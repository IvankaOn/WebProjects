	
	/**
	 * API module for making HTTP requests.
	 *
	 * @module API
	 *
	 * @requires /assets/js/classes/Cookie.js
	 * @requires /assets/js/classes/Cache.js
	 * @requires /assets/js/classes/Log.js
	 * @requires /assets/js/classes/Auth.js
	 * @requires /assets/js/classes/Toast.js
	 */
	const API = (function() {
		
		
		
		const baseApiUrl = 'https://printpenguinapi.faster.ws';
		const defaultHeaders = {
			'Content-Type': 'application/json',
		};
		
		
		
		
		
		/**
		 * Sends a GET request to the specified endpoint.<br>
		 * Also checks for cache and saves response to cache if there are no headers sent.
		 *
		 * @memberof API
		 * @function get
		 *
		 * @param {string} endpoint - The endpoint to send the request to.
		 * @param {object} [headers={}] - Additional headers to include in the request.
		 * @param {boolean} [aSync=true] - Whether the request should be sent aSynchronously. (Default: true)
		 * @param {boolean} [useCache=true] - Whether the request should try to use cache or not. (Default: true)
		 *
		 * @returns {Promise<object>} - A Promise that resolves to the response data.
		 */
		function get(endpoint, headers = {}, aSync = true, useCache = true) {
			Log.debug(`API :: GET request to ${endpoint}`);
			
			if (useCache && Object.keys(headers).length === 0) {
				const cachedResult = Cache.get(endpoint); // Check/get cache
				
				if (cachedResult) {
					Log.info(`API :: Returning cached results.`);
					return aSync ? Promise.resolve(cachedResult) : cachedResult;
				}
			}
			
			Log.info(`API :: Not using cached results.`);
			return _fetch('GET', endpoint, headers, undefined, aSync, useCache);
		}
		
		
		
		
		
		/**
		 * Sends a POST request to the specified endpoint with the specified data.
		 *
		 * @memberof API
		 * @function post
		 *
		 * @param {string} endpoint - The endpoint to send the request to.
		 * @param {object} data - The data to send with the request.
		 * @param {object} [headers={}] - Additional headers to include in the request.
		 * @param {boolean} [aSync=true] - Whether the request should be sent aSynchronously.
		 *
		 * @returns {Promise<object>} - A Promise that resolves to the response data.
		 */
		function post(endpoint, data, headers = {}, aSync = true) {
			Log.debug(`API :: POST request to ${endpoint}`);
			
			return _fetch('POST', endpoint, headers, data, aSync);
		}
		
		
		
		
		
		/**
		 * Sends a PUT request to the specified endpoint with the specified data.
		 *
		 * @memberof API
		 * @function put
		 *
		 * @param {string} endpoint - The endpoint to send the request to.
		 * @param {object} data - The data to send with the request.
		 * @param {object} [headers={}] - Additional headers to include in the request.
		 * @param {boolean} [aSync=true] - Whether the request should be sent aSynchronously.
		 *
		 * @returns {Promise<object>} - A Promise that resolves to the response data.
		 */
		function put(endpoint, data, headers = {}, aSync = true) {
			Log.debug(`API :: PUT request to ${endpoint}`);
			
			return _fetch('PUT', endpoint, headers, data, aSync);
		}
		
		
		
		
		
		/**
		 * Sends a DELETE request to the specified endpoint.
		 *
		 * @memberof API
		 * @function del
		 *
		 * @param {string} endpoint - The endpoint to send the request to.
		 * @param {object} [headers={}] - Additional headers to include in the request.
		 * @param {boolean} [aSync=true] - Whether the request should be sent aSynchronously.
		 *
		 * @returns {Promise<object>} - A Promise that resolves to the response data.
		 */
		function del(endpoint, headers = {}, aSync = true) {
			Log.debug(`API :: DELETE request to ${endpoint}`);
			
			return _fetch('DELETE', endpoint, headers, undefined, aSync);
		}
		
		
		
		
		
		/**
		 * Internal method for sending HTTP requests.
		 *
		 * @memberof API
		 * @function _fetch
		 * @private
		 *
		 * @param {string} method - The HTTP method to use.
		 * @param {string} endpoint - The endpoint to send the request to.
		 * @param {object} headers - Additional headers to include in the request.
		 * @param {object} data - The data to send with the request.
		 * @param {boolean} aSync - Whether the request should be sent aSynchronously.
		 *
		 * @returns {Promise<object>} - A Promise that resolves to the response data.
		 */
		function _fetch(method, endpoint, headers, data, aSync = true, useCache = false) {
			
			const requestOptions = {
				method,
				headers: {
					...defaultHeaders,
					...headers,
				},
				credentials: 'include',
			};
			
			/* Headers (Bearer + Currency) */
			if (Cookie) {
				const bearer = Cookie.get('PPSS');
				if (bearer) {
					requestOptions.headers.Authorization = `Bearer ${bearer}`;
				}
				
				const currency = Cookie.get('currency');
				if (currency) {
					requestOptions.headers['X-Currency'] = currency;
				}
			}
			
			if (data) {
				requestOptions.body = JSON.stringify(data);
			}
			
			if (aSync) {
				Log.debug(`API :: Using fetch with async.`);
				
				return fetch(baseApiUrl + endpoint, requestOptions)
					.then(response => {
						return response.json()
							.then(result => {
								
								if (result.options) {
									_handleOptions(result.options);
								}
								
								if (response.status === 401) {
									Log.info(`API :: 401 Returned.`);
									Auth.showLoginModal();
								} else if (response.status === 403) {
									Log.info(`API :: 403 Returned.`);
								} else if (response.status === 300) {
									Log.info(`API :: 300 Returned.`);
									Auth.showAccountsModal();
								}
								
								const resultData = result.data || {};
								
								/*
								// @todo - do we need to include status in response??
								const resultData = {
									status: result.status || { code: 200, message: 'OK' },
									result: result.data || {}
								}
								*/
								
								if (method === 'GET' && useCache && Object.keys(headers).length === 0) {
									Log.debug(`API :: Caching results.`);
									Cache.set(endpoint, resultData);
								}
								
								return resultData;
							});
					})
					.catch(error => {
						throw new Error(error);
					});
			} else {
				Log.debug(`API :: Using XHR with sync.`);
				
				const xhr = new XMLHttpRequest();
				xhr.open(requestOptions.method, baseApiUrl + endpoint, false);
				
				Object.keys(requestOptions.headers).forEach(key => {
					xhr.setRequestHeader(key, requestOptions.headers[key]);
				});
				
				xhr.withCredentials = true;
				
				let resultData;
				
				xhr.onreadystatechange = () => {
					if (xhr.readyState === 4) {
						
						/* @todo - Should these just be set for internal errors such as 404, 500 and then use secondary responses for controlling data manipulation? */
						// Should this be after result so that we can get the username for the login, etc..
						if (xhr.status === 401) {
							Log.info(`API :: 401 Returned.`);
							Auth.showLoginModal();
						} else if (xhr.status === 403) {
							Log.info(`API :: 403 Returned.`);
						} else if (xhr.status === 300) {
							Log.info(`API :: 300 Returned.`);
							Auth.showAccountsModal();
						}
						
						const result = JSON.parse(xhr.responseText);
						
						if (result.options) {
							_handleOptions(result.options);
						}
						
						resultData = result.data || {};
						/*
						// @todo - do we need to include status in response??
						const resultData = {
							status: result.status || { code: 200, message: 'OK' },
							result: result.data || {}
						}
						*/
					}
				};
				
				xhr.send(requestOptions.body);
				
				if (method === 'GET' && useCache && Object.keys(headers).length === 0) {
					Log.debug(`API :: Caching results.`);
					Cache.set(endpoint, resultData);
				}
				
				return resultData;
			}
			
		}
		
		
		
		
		
		/**
		 * Handles any options that are returned in the response data, such as deleting or setting cookies.
		 *
		 * @memberof API
		 * @function _handleOptions
		 * @private
		 *
		 * @param {object} options - The options object returned in the response data.
		 */
		function _handleOptions(options) {
			
			// Delete all cookies (Must be called first)
			if (options.delete_all_cookies) {
				Cookie.clear();
			}
			
			// Set/delete individual cookies
			if (options.cookies) {
				for (const cookie of options.cookies) {
					if (cookie.name && cookie.value !== undefined) {
						if (cookie.value === false) {
							Cookie.del(cookie.name);
						} else {
							const expiryInSeconds = cookie.expiry || 0;
							Cookie.set(cookie.name, cookie.value, expiryInSeconds);
						}
					}
				}
			}
			
			// Redirect request (Used for changing language or currency) @note - Should we do more checking here to make sure the URL is valid or trust api?
			if (options.redirect) {
				const url = options.redirect;
				/* Replaced with below to allow relative urls
				if (typeof url === 'string' && /^https?:\/\//i.test(url)) {
					if (options.toasts) {
						Toast.save(options.toasts);
					}
					window.location.href = url;
				}
				*/
				if (typeof url === 'string') {
					if (options.toasts) {
						Toast.save(options.toasts);
					}
					
					if (url.startsWith('http://') || url.startsWith('https://')) {
						window.location.href = url;
					} else {
						window.location.href = window.location.origin + '/' + url;
					}
				}
			} else {
				if (options.toasts) {
					Toast.showAll(options.toasts);
				}
			}
			
		}
		
		
		
		
		
		return {
			get,
			post,
			put,
			del,
		};
		
		
		
	})();
	
	
	
	
	
	/** EXAMPLE USAGE
		
		
		
		
		
		// API.get()
		
			// aSync = true
			API.get('/users/123')
				.then(data => {
					console.log(data); // Handle the fetched data here
				})
				.catch(error => {
					console.error(error); // Handle any errors here
				});
			
			
			//aSync = false
			try {
				const data = API.get('/users/123', {}, false);
				console.log(data); // Handle the fetched data here
			} catch (error) {
				console.error(error); // Handle any errors here
			}
		
		
		
		
		
		// API.post()
			
			// aSync = true
			const data = { name: 'John Doe', email: 'johndoe@example.com' };
			API.post('/users', data)
				.then(response => {
					console.log(response); // Handle the response here
				})
				.catch(error => {
					console.error(error); // Handle any errors here
				});
			
			
			// aSync = false
			const data = { name: 'John Doe', email: 'johndoe@example.com' };
			try {
				const response = API.post('/users', data, {}, false);
				console.log(response); // Handle the response here
			} catch (error) {
				console.error(error); // Handle any errors here
			}
		
		
		
		
		
		// API.put()
		
			// aSync = true
			const data = { name: 'Jane Doe', email: 'janedoe@example.com' };
			API.put('/users/123', data)
				.then(response => {
					console.log(response); // Handle the response here
				})
				.catch(error => {
					console.error(error); // Handle any errors here
				});
			
			
			// aSync = false
			const data = { name: 'Jane Doe', email: 'janedoe@example.com' };
			try {
				const response = API.put('/users/123', data, {}, false);
				console.log(response); // Handle the response here
			} catch (error) {
				console.error(error); // Handle any errors here
			}
		
		
		
		
		
		// API.del()
		
			// aSync = true
			API.del('/users/123')
				.then(response => {
					console.log(response); // Handle the response here
				})
				.catch(error => {
					console.error(error); // Handle any errors here
				});
			
			
			// aSync = false
			try {
				const response = API.del('/users/123', {}, false);
				console.log(response); // Handle the response here
			} catch (error) {
				console.error(error); // Handle any errors here
			}
		
		
		
		
		
	// END OF EXAMPLES */
	
	
	
	
	
	
	
	