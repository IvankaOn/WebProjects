
	/**
	 * Toast module.
	 *
	 * @module Toast
	 *
	 * @requires /assets/js/classes/Cookie.js
	 * @requires /assets/js/classes/Log.js
	 */
	const Toast = (() => {
		
		
		
		const defaultClose = 5;
		const cookieName = 'toast-notifications';
		
		
		
		
		
		/**
		 * Shows a toast notification on the screen.
		 *
		 * @memberof Toast
		 * @function show
		 *
		 * @param {Object} options - The options for the toast.
		 * @param {string} options.icon - The icon for the toast.
		 * @param {string} options.message - The message for the toast.
		 * @param {boolean} options.progress - Whether to show a progress bar on the toast.
		 * @param {string} options.color - The color of the toast.
		 * @param {boolean|number} options.close - Whether to auto-close the toast after a certain time.
		 * @param {boolean|string} options.time - The time for the toast.
		 * @param {string} options.type - The type of the toast ('error', 'info', 'warning', 'success').
		 */
		function show({ icon = '', message = '', progress = true, color = 'green', close = false, time = false, type = '' }) {
			
			// Check if toast container exists. If not, create it.
			let containerElement = document.getElementById('toast-container');
			if (!containerElement) {
				containerElement = document.createElement('div');
				containerElement.id = 'toast-container';
				containerElement.className = 'toast-container position-fixed top-0 end-0 m-3';
				document.body.appendChild(containerElement);
			}
			
			// Set type
			if (type) {
				switch (type) {
					case 'error':
						color = 'red';
						icon = 'fi fi-sr-times-hexago';
						break;
					case 'info':
						color = 'blue';
						icon = 'fi fi-sr-info';
						break;
					case 'warning':
						color = 'orange';
						icon = 'fi fi-sr-triangle-warning';
						break;
					case 'success':
						color = 'green';
						icon = 'fi fi-br-check';
						break;
				}
			}
			
			// Set default close if it's true
			if (close === true) {
				close = defaultClose;
			}
			
			// Toast Element
			const toastElement = document.createElement('div');
			toastElement.className = `toast mb-3 ${color ? `toast-${color}` : ''}`;
			toastElement.setAttribute('role', 'alert');
			toastElement.setAttribute('aria-live', 'assertive');
			toastElement.setAttribute('aria-atomic', 'true');
			
			// Toast Header
			const headerElement = document.createElement('div');
			headerElement.className = 'toast-header toast-header-border';
			toastElement.appendChild(headerElement);
			
			// Icon
			if (icon) {
				const iconElement = document.createElement('span');
				iconElement.className = `me-2 ${icon}`;
				headerElement.appendChild(iconElement);
			}
			
			// Message
			if (message) {
				const messageElement = document.createElement('strong');
				messageElement.className = 'me-auto';
				messageElement.textContent = message;
				headerElement.appendChild(messageElement);
			}
			
			// Time Since
			let timeElement;
			if (time) {
				timeElement = document.createElement('small');
				timeElement.textContent = time;
				headerElement.appendChild(timeElement);
			}
			
			// Close Button
			const closeButton = document.createElement('button');
			closeButton.className = 'btn-close';
			closeButton.setAttribute('type', 'button');
			closeButton.setAttribute('data-bs-dismiss', 'toast');
			closeButton.setAttribute('aria-label', 'Close'); /* Optional */
			headerElement.appendChild(closeButton);
			
			// Progress Bar
			if (progress && typeof close === 'number' && close > 0) {
				const bodyElement = document.createElement('div');
				headerElement.classList.add('toast-header-border-top');
				bodyElement.className = 'toast-body it-block-progress';
				toastElement.appendChild(bodyElement);
			}
			
			containerElement.appendChild(toastElement);
			
			// Auto Close
			let duration;
			if (typeof close === 'number' && close > 0) {
				duration = close * 1000;
				document.documentElement.style.setProperty('--toast-duration', `${close-0.5}s`);
			} else {
				duration = 0;
			}
			
			const options = {
				autohide: typeof close === 'number' && close > 0,
				delay: duration
			};
			const bootstrapToast = new bootstrap.Toast(toastElement, options);
			
			bootstrapToast.show();
		}
		
		
		
		
		
		/**
		 * Shows an error toast notification on the screen.
		 *
		 * @memberof Toast
		 * @function error
		 *
		 * @param {string} message - The message for the toast.
		 * @param {boolean} close - Whether to auto-close the toast.
		 * @param {boolean|string} time - The time for the toast.
		 */
		function error(message, close = true, time = false) {
			show({ type: 'danger', message, close, progress: false, time });
		}
		
		
		
		
		
		/**
		 * Shows an info toast notification on the screen.
		 *
		 * @memberof Toast
		 * @function info
		 *
		 * @param {string} message - The message for the toast.
		 * @param {boolean} close - Whether to auto-close the toast.
		 * @param {boolean|string} time - The time for the toast.
		 */
		function info(message, close = true, time = false) {
			show({ type: 'info', message, close, progress: false, time });
		}
		
		
		
		
		
		/**
		 * Shows a warning toast notification on the screen.
		 *
		 * @memberof Toast
		 * @function warning
		 *
		 * @param {string} message - The message for the toast.
		 * @param {boolean} close - Whether to auto-close the toast.
		 * @param {boolean|string} time - The time for the toast.
		 */
		function warning(message, close = true, time = false) {
			show({ type: 'warning', message, close, progress: false, time });
		}
		
		
		
		
		
		/**
		 * Shows a success toast notification on the screen.
		 *
		 * @memberof Toast
		 * @function success
		 *
		 * @param {string} message - The message for the toast.
		 * @param {boolean} close - Whether to auto-close the toast.
		 * @param {boolean|string} time - The time for the toast.
		 */
		function success(message, close = true, time = false) {
			show({ type: 'success', message, close, progress: false, time });
		}
		
		
		
		
		
		/**
		 * Shows all the notifications parsed from the provided JSON string.
		 *
		 * @memberof Toast
		 * @function showAll
		 *
		 * @param {string} jsonString - A JSON string containing the notifications to show.
		 */
		function showAll(jsonString) {
			Log.debug(`Toast :: Showing all notifications.`);
			
			const notifications = JSON.parse(jsonString);
			for (const notification of notifications) {
				show(notification);
			}
		}
		
		
		
		
		
		/**
		 * Retrieves the stored notifications and displays them.
		 *
		 * @memberof Toast
		 * @function get
		 */
		function get() {
			Log.debug(`Toast :: Checking for stored notifications.`);
			
			const jsonString = Cookie.get(cookieName);
			Cookie.del(cookieName);
			
			if (jsonString) {
				Log.info(`Toast :: Found stored notifications.`);
				
				try {
					const data = JSON.parse(jsonString);
					if (!Array.isArray(data) || data.length === 0) {
						Log.info(`Toast :: Saved notification did not contain any data.`);
						return;
					}
					
					showAll(jsonString);
				} catch (error) {
					Log.error(`Toast :: Saved notifications are not in valid JSON string.`);
				}
			}
		}
		
		
		
		
		
		/**
		 * Saves the notifications to a cookie.
		 *
		 * @memberof Toast
		 * @function save
		 *
		 * @param {string} jsonString - A JSON string containing the notifications to save.
		 */
		function save(jsonString) {
			Log.debug(`Toast :: Saving notifications.`);
			
			try {
				const data = JSON.parse(jsonString);
				if (!Array.isArray(data) || data.length === 0) {
					Log.info(`Toast :: Nothing to save.`);
					return;
				}
				
				Log.info(`Toast :: Saving notifications to cookie.`);
				Cookie.set(cookieName, jsonString, 10800);
			} catch (error) {
				Log.error(`Toast :: Cannot save because the data is not a valid JSON string.`);
			}
		}
		
		
		
		
		
		return {
			show,
			error,
			info,
			warning,
			success,
			showAll,
			get,
			save
		};
		
		
		
	})();
	
	
	
	
	
	/**
	 * Adds a load event listener to the window that retrieves and displays any stored notifications.
	 */
	window.addEventListener('load', function() {
		Toast.get();
	});