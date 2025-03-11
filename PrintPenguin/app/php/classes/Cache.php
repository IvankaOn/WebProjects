<?php
	
	/**
	 * Cache Class
	 * Provides an interface for caching data using Memcached, or it can be adapted to use Redis or APCu
	 */
	class Cache {
		
		
		
		public const  API_ENDPOINT = 'https://printpenguinapi.faster.ws/appcache/';
		public const  FILE_EXT     = '.cache.php';
		private const PREFIX       = 'ppweb_';
		
		
		/**
		 * Memcached Instance
		 */
		private static $Mem;
		
		
		
		
		
		/**
		 * Get the Memcached instance or load if needed;
		 *
		 * @return Memcached
		 */
		private static function driver() {
			
			if (!self::$Mem) {
				self::$Mem = new Memcached();
				self::$Mem->addServer('localhost', 11211);
				
				$stats = self::$Mem->getStats();
				
				if (!$stats) {
					error_log('Cache::driver() => Failed to connect to Memcached');
					die();	// @todo this needs to be handled better
				}
			}
			
			return self::$Mem;
			
		}
		
		
		
		/**
		 * Get cached key
		 *
		 * @param    string    $key    Key to get
		 *
		 * @return mixed|boolean Returns cached date or FALSE if key does not exist
		 */
		public static function get($key = '') {
			
			if (empty($key))
				return FALSE;
			
			$Mem = self::driver();
			
			if (!empty($result = $Mem->get(self::PREFIX . $key)))
				return $result;
			
			if (file_exists(_CACHE_ . DS . $key . self::FILE_EXT)) {
				include(_CACHE_ . DS . $key . self::FILE_EXT);
				if (isset($cache_data) && !empty($cache_data)) {
					$Mem->set($key, $cache_data);
					unset($cache_data);
				}
			}
			else {
				$api_data = self::getFromAPI($key);
				if (!empty($api_data))
					$Mem->set($key, $api_data);
			}
			
			return $Mem->get($key);
			
		}
		
		
		private static function getFromAPI($endpoint) {
			
			$curl = curl_init(self::API_ENDPOINT . $endpoint);
			
			curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
			curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE); // Disable SSL verification (only for testing purposes)
			
			$response = curl_exec($curl);
			
			if (curl_errno($curl)) {
				$error_message = curl_error($curl);
				error_log('Cache::getDataFromAPI() => ' . $error_message);
			}
			
			curl_close($curl);
			
			$data = NULL;
			
			if ($response) {
				$res = json_decode($response, TRUE); // Decode the JSON response into an associative array
				
				if (isset($res['data'])) {
					$data = $res['data'];
					
					file_put_contents(_CACHE_ . DS . $endpoint . self::FILE_EXT, '<?php $cache_data = ' . var_export($res["data"], TRUE) . ';');
				}
			}
			
			return $data;
			
		}
		
		/**
		 * Get all keys in the cache related to this application
		 *
		 * @return array List of keys
		 */
		public static function getKeys() {
			
			$Mem = self::driver();
			
			$Mem->getAllKeys(); // Need to call twice to get all results
			
			$keys = [];
			foreach ($Mem->getAllKeys() as $key) {
				if (str_starts_with($key, self::PREFIX))
					$keys[] = str_replace(self::PREFIX, '', $key);
			}
			
			return $keys;
			
		}
		
		
		
		/**
		 * Store a key=>value in the cache
		 *
		 * @param string $key Key to set
		 * @param mixed $value Value to set (Default: NULL)
		 * @param integer $ttl Time to live in seconds (Default: 0 = no expiration)
		 *
		 * @return boolean
		 */
		public static function set($key = '', $value = NULL, $ttl = 0) {
			
			if (empty($key))
				return FALSE;
			
			$Mem = self::driver();
			
			if ($Mem->set(self::PREFIX . $key, is_float($value) ? (string) $value : $value, $ttl))
				return TRUE;
			
			return FALSE;
			
		}
		
		
		
		/**
		 * Delete a key from the cache
		 *
		 * @param    string    $key    Key to delete
		 *
		 * @return boolean Returns TRUE if key was deleted, FALSE if key does not exist or delete failed
		 */
		public static function delete($key) {
			
			if (empty($key))
				return FALSE;
			
			$Mem = self::driver();
			
			if ($Mem->delete(self::PREFIX . $key))
				return TRUE;
			
			return FALSE;
			
		}
		
		
		
		/**
		 * Check if a key exists in the cache
		 *
		 * @param    string    $key    Key to check
		 *
		 * @return boolean
		 */
		public static function exists($key = '') {
			
			if (empty($key))
				return FALSE;
			
			$Mem = self::driver();
			
			$Mem->get(self::PREFIX . $key);
			
			return $Mem->getResultCode() === Memcached::RES_SUCCESS;
			
		}
		
		
		
		/**
		 * Clear all cached data for this user
		 *
		 * @return boolean Returns TRUE always
		 */
		public static function clear() {
			
			$count = 0;
			
			foreach (self::getKeys() as $key)
				if (self::delete($key))
					$count++;
			
			return $count;
			
		}
		
		
		
	}
	