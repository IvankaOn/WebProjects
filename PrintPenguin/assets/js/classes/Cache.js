	
	/**
	 * A caching utility that stores key-value pairs in memory.
	 *
	 * @module Cache
	 * 
	 * @requires /assets/js/classes/Log.js
	 */
	const Cache = (function() {
		
		
		
		// Private variable to store cached data
		let storage = {};
		
		
		
		/**
		 * Loads data from a JSON string into the cache.
		 *
		 * @memberof Cache
		 * @function loadJsonStringData
		 * 
		 * @param {string} jsonString - The JSON string to load into the cache.
		 */
		function loadJsonStringData(jsonString) {
			Log.debug(`Cache :: Loading cache via JSON string`);
			
			let data;

			try {
				data = JSON.parse(jsonString);
			} catch (error) {
				Log.error(`Cache :: Error parsing JSON string: ${error}`);
				return;
			}

			for (const key in data) {
				if (data.hasOwnProperty(key)) {
					storage[key] = data[key];
				}
			}
		}
		
		
		
		/**
		 * Retrieves a value from the cache.
		 *
		 * @memberof Cache
		 * @function get
		 *
		 * @param {string} key - The key of the value to retrieve from the cache.
		 *
		 * @returns {*} - The value associated with the key, or undefined if the key is not found.
		 */
		function get(key) {
			Log.debug(`Cache :: Get cache value for '${key}'`);
			
			if (storage.hasOwnProperty(key)) {
				return storage[key];
			} else {
				return undefined;
			}
		}
		
		
		
		/**
		 * Sets a value in the cache.
		 *
		 * @memberof Cache
		 * @function set
		 * 
		 * @param {string} key - The key to set the value for.
		 * @param {*} [value=''] - The value to set for the key. Defaults to an empty string if not provided.
		 */
		function set(key, value = '') {
			Log.debug(`Cache :: Set cache value for '${key}'`);
			
			if (key) {
				storage[key] = value;
			}
		}
		
		
		
		/**
		* Deletes a key-value pair from the cache.
		 *
		 * @memberof Cache
		 * @function del
		 *
		 * @param {string} key - The key to delete.
		 *
		 * @returns {boolean} True if the key-value pair was deleted, false if the key does not exist.
		 */
		function del(key) {
			Log.debug(`Cache :: Deleting '${key}'`);
			
			if (storage.hasOwnProperty(key)) {
				delete storage[key];
				return true;
			} else {
				return false;
			}
		}
		
		
		
		// Public interface for the Cache object
		return {
			loadJsonStringData,
			get,
			set,
			del,
		};
		
		
		
	})();
	
	
	
	
	
/** EXAMPLE USAGE
	
	
	
	
	
	// Cache.loadJsonStringData()
	const jsonString = '{"key1": "value1", "key2": "value2"}';
	Cache.loadJsonStringData(jsonString);
	
	
	
	// Or from the cachedData var
	Cahce.loadJsonStringData(cachedData);
	
	
	
	
	
	// Cache.set()
	Cache.set('new_key', 'value of new_key');
	
	
	
	
	
	// Cache.get()
	const value1 = Cache.get('new_key');
	console.log(value1); // Output: "value of new_key"
	
	
	
	// @todo - Konrad change var cacheData to const cachedData in php script that creates the cached file
	
	
	
	
	
// END OF EXAMPLES */

