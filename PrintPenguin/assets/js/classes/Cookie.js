	
	/**
	 * Cookie manager module.
	 *
	 * Also builds cookie banner and cookie popup
	 *
	 * @module Cookie
	 *
	 * @requires /assets/js/classes/Log.js
	 */
	const Cookie = (() => {
		
		
		
		/**
		 * The cookies to store as object.
		 *
		 * @type {Object}
		 * @private
		 */
		let cookies = {};
		
		
		
		
		
		/**
		 * Initialize the cookies object by loading document cookies into the object store
		 *
		 * @memberof Cookie
		 * @function loadCookies
		 * @private
		 */
		function load() {
			Log.debug(`Cookie :: Loading module!`);
			
			Log.debug(`Cookie :: Loading cookies to self property.`);
			document.cookie.split(';').forEach((cookie) => {
				const [key, value] = cookie.split('=');
				cookies[key.trim()] = value;
			});
		}
		
		
		
		
		
		/**
		 * Get a cookie by name.
		 *
		 * @memberof Cookie
		 * @function get
		 
		 * @param {string} name - The name of the cookie.
		 *
		 * @returns {bool|string} The value of the cookie, or false if it doesn't exist.
		 */
		function get(name) {
			Log.debug(`Cookie :: Retrieving cookie '${name}'.`);
			
			if (cookies.hasOwnProperty(name)) {
				return cookies[name];
			}
			
			Log.info(`Cookie :: Cookie '${name}' does not exist. Returned false.`)
			return false;
			// return cookies[name] ?? null;
		}
		
		
		
		
		
		/**
		 * Sets a new cookie with the given name, value, and expiry time in seconds.
		 *
		 * @memberof Cookie
		 * @function set
		 *
		 * @param {string} name - The name of the cookie.
		 * @param {string} value - The value of the cookie.
		 * @param {number} [expiresInSeconds] - The expiry time of the cookie in seconds. If not provided, the cookie will be treated as a session cookie. If 0 it will be set to 5 years
		 * @param {string} [path='/'] - The path attribute of the cookie. (Leave blank for default /)
		 *
		 * @throws {TypeError} Throws a TypeError if the name or value of the cookie is not a string.
		 */
		function set(name, value, expiresInSeconds = 0, path = '/') {
			Log.debug(`Cookie :: Setting cookie '${name}'.`);
			
			let cookieString = `${name}=${value}`;
			if (expiresInSeconds !== undefined) {
				let expiryTime;
				if (expiresInSeconds === 0) {
					expiryTime = new Date(Date.now() + 5 * 365 * 24 * 60 * 60 * 1000);
				} else {
					expiryTime = new Date(Date.now() + expiresInSeconds * 1000);
				}
				cookieString += `; expires=${expiryTime.toUTCString()}`;
			}
			cookieString += `; path=${path}`;
			document.cookie = cookieString;
			cookies[name] = value;
		}
		
		
		
		
		
		/**
		 * Update a cookie if its value.
		 * Only use this if you are expecting to update an existing cookie and only want to update if the value has changed, otherwise if you are not sure use set.
		 *
		 * @memberof Cookie
		 * @function update
		 *
		 * @param {string} name - The name of the cookie.
		 * @param {string} value - The value of the cookie.
		 * @param {number} [expiresInSeconds] - The expiry time of the cookie in seconds. If not provided, the cookie will be treated as a session cookie.
		 * @param {string} [path='/'] - The path attribute of the cookie. (Leave blank for default /)
		 */
		function update(name, value, expiresInSeconds, path = '/') {
			Log.debug(`Cookie :: Updating cookie '${name}'.`);
			
			if (cookies.hasOwnProperty(name) && cookies[name] !== value) {
				set(name, value, expiresInSeconds, path);
			}
		}
		
		
		
		
		
		/**
		 * Delete a cookie by name.
		 *
		 * @memberof Cookie
		 * @function del
		 *
		 * @param {string} name - The name of the cookie.
		 */
		function del(name, path = '/') {
			Log.debug(`Cookie :: Deleting cookie '${name}'.`);
			
			document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=' + path + ';';
			delete cookies[name];
		}
		
		
		
		
		
		/**
		 * Delete all cookies.
		 *
		 * @memberof Cookie
		 * @function clear
		 */
		function clear() {
			Log.debug(`Cookie :: Clearing all cookies.`);
			
			Object.keys(cookies).forEach((name) => {
				del(name);
			});
		}
		
		
		
		
		
		/**
		 * Show cookie footer banner if not already accepted
		 *
		 * @memberof Cookie
		 * @function showNotice
		 */
		function showNotice() {
			
			// Check if notice was shown and accepted already
			if (Cookie.get('cookie-notice') != '') {
				Log.info(`Cookie :: Cookie notice already accepted.`);
				return;
			}
			
			Log.info(`Cookie :: Cookie notice not accepted.`);
			
			// Get text from API and show banner
			API.get('/text/cookie-banner')
				.then(response => {
					Log.debug(`Cookie :: Showing cookie banner.`);
					const {	text_description, button_ok, button_more } = response;
					
					const bannerHTML = `
		<div id="cookieBanner" class="cookie-banner">
			<div class="container">
				<div class="d-flex flex-column flex-sm-row align-items-center">
					<span class="cookie-banner-icon"></span>
					<span class="text-center text-sm-start text-xxs mb-3 mb-sm-0 me-sm-4">
						${text_description}
						<button class="text-white text-decoration-underline btn btn-link p-0 ps-2 text-xxs" onclick="Cookie.showInfoModal()" type="button">${button_more}</button>
					</span>
					<div class="ms-sm-auto">
						<button type="button" class="btn btn-green text-white d-flex align-items-center white-space-nowrap" onclick="Cookie.acceptNotice()">
							<span class="btn-circle-md me-2">
								<span class="wa-wa-check text-green text-md position-absolute top-50 start-50 translate-middle"></span>
							</span>
							<span class="pe-2">${button_ok}</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	`;
					document.body.insertAdjacentHTML('beforeend', bannerHTML);
				})
				.catch(error => {
					Log.error(`Cookie :: Error retrieving cookie banner text from API.`);
				});
		}
		
		
		
		
		
		
		/**
		 * Accept cookie notice
		 * Saves the date in a cookie to mark that it has been accepted and removes the banner.
		 *
		 * @memberof Cookie
		 * @function acceptNotice
		 */
		function acceptNotice() {
			Log.info(`Cookie :: Notice accepted!`);
			
			const currentDate = new Date();
			
			Cookie.set('cookie-notice', currentDate.toISOString(), 0);
			
			Log.debug(`Cookie :: Removing cookie footer banner.`);
			
			const cookieBanner = document.getElementById('cookieBanner');
			if (cookieBanner) {
				cookieBanner.remove();
			}
			
			const cookieModal = document.getElementById('modalCookie');
			if (cookieModal) {
				cookieModal.remove();
			}
		}
		
		
		
		
		
		/**
		 * Open cookie more information modal
		 *
		 * @memberof Cookie
		 * @function showInfoModal
		 */
		function showInfoModal() {
			Log.info(`Cookie :: Showing more information modal.`);
			
			API.get('/text/cookie-modal', {}, true, true)
				.then(function(response) {
					var modalHTML = `
		<div class="modal fade" id="modalCookie" aria-hidden="true" aria-labelledby="modalCookieLabel" tabindex="-1">
			<div class="modal-dialog modal-dialog-centered modal-lg">
				<div class="modal-content rounded-6 overflow-hidden">
					<div class="modal-body scrollbar-dark mb-0">
						<p class="fw-bold" id="modalCookieLabel">${response.title}</p>
						<p class="text-sm">${response.body}</p>
						<div class="accordion" id="accordionCookie">
	`;
					
					// Create accordion items
					response.points.forEach(function(point, index) {
						modalHTML += `
							<div class="accordion-item">
								<h2 class="accordion-header" id="accordionCookieHeading${index + 1}">
									<button class="accordion-button ${index === 0 ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#accordionCookieCollapse${index + 1}" aria-expanded="${index === 0 ? 'false' : 'true'}" aria-controls="accordionCookieCollapse${index + 1}">
										${point.title}
									</button>
								</h2>
								<div id="accordionCookieCollapse${index + 1}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" aria-labelledby="accordionCookieHeading${index + 1}" data-bs-parent="#accordionCookie">
									<div class="accordion-body">
										<p>${point.description}</p>
									</div>
								</div>
							</div>
	`;
					});
					
					modalHTML += `
						</div>
						<p class="text-xxs">${response.footer_text} <a href="/privacy-policy" target="_blank" class="fw-semibold text-black text-decoration-none border-bootom-dotted">${response.privacy_policy}</a>.</p>
					</div>
					<div class="modal-footer border-0 box-shadow-footer justify-content-center py-4">
						<button type="button" class="btn btn-primary px-40" data-bs-dismiss="modal" aria-label="Close" onclick="Cookie.acceptNotice()">${response.button_ok}</button>
					</div>
				</div>
			</div>
		</div>
	`;
					document.body.insertAdjacentHTML('beforeend', modalHTML);
					
					// Open the modal
					var modalElement = document.getElementById('modalCookie');
					var bootstrapModal = new bootstrap.Modal(modalElement);
					bootstrapModal.show();
				})
				.catch(function(error) {
					Log.error(`Cookie :: Error retrieving cookie modal text from API.`);
				});
		}
		
		
		
		
		
		/* Constructor */
		load();
		
		
		
		
		
		return {
			get,
			set,
			update,
			del,
			clear,
			acceptNotice,
			showInfoModal,
			showNotice
		};
		
		
		
	})();
	
	
	
	
	
	window.addEventListener('load', function() {
		Cookie.showNotice();
	});
	
	
	
	/** EXAMPLE USAGE
	
	
	
	
	
		// Cookie.set()
		Cookie.set('currency', 'usd', 3600);
		
		
		
		
		
		// Cookie.get()
		const curr = Cookie.get('currency');
		if (username) {
			console.log(`Currency is: ${curr}!`);
		} else {
			console.log('Currency not found!');
		}
		
		
		
		
		
		// Cookie.update()
		Cookie.update('currency', 'cad', 3600);
		
		
		
		
		
		// Cookie.del()
		Cookie.del('currency');
		
		
		
		
		
		// Coolie.clear()
		Cookie.clear();
		
		
		
		
		
	// END OF EXAMPLES */