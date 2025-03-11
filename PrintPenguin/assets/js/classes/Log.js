
	/**
	 * Custom log module
	 * Developed to quickly enable or disable console logs.
	 *
	 * @module Log
	 */
	const Log = (() => {
		
		
		
		/**
		 * Available log levels
		 *
		 * @readonly
		 * @enum {number}
		 */
		const LogLevel = {
			NONE: 0,
			ERROR: 1,
			WARNING: 2,
			INFO: 3,
			DEBUG: 4,
		};
		
		
		
		/**
		 * What log level should be shown in console
		 *
		 * @type {number}
		 * @default LogLevel.DEBUG
		 */
		let currentLogLevel = LogLevel.DEBUG;
		
		
		
		
		
		/**
		 * Initialize the log module
		 *
		 * @memberof Log
		 * @function loadLog
		 * @private
		 */
		function load() {
			debug(`Log :: Loading module!`);
		}
		
		
		
		
		
		/**
		 * Log error to console
		 *
		 * @memberof Log
		 * @function error
		 */
		function error(message) {
			if (currentLogLevel >= LogLevel.ERROR) {
				console.log(`[ERROR] ${message}`);
				//console.error(`[ERROR] ${message}`);
			}
		}
		
		
		
		
		
		/**
		 * Log warning to console
		 *
		 * @memberof Log
		 * @function warning
		 */
		function warning(message) {
			if (currentLogLevel >= LogLevel.WARNING) {
				console.log(`[WARNING] ${message}`);
				//console.warn(`[WARNING] ${message}`);
			}
		};
		
		
		
		
		
		/**
		 * Log info to console
		 *
		 * @memberof Log
		 * @function info
		 */
		function info(message) {
			if (currentLogLevel >= LogLevel.INFO) {
				console.log(`[INFO] ${message}`);
			}
		};
		
		
		
		
		
		/**
		 * Log low level debug to console
		 *
		 * @memberof Log
		 * @function debug
		 */
		function debug(message) {
			if (currentLogLevel >= LogLevel.DEBUG) {
				console.log(`[DEBUG] ${message}`);
				//console.debug(`[DEBUG] ${message}`);
			}
		};
		
		
		
		
		
		/* Constructor */
		load();
		
		
		
		
		
		return {
			error,
			warning,
			info,
			debug
		};
		
		
		
	})();