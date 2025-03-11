<?php
	
	class Router {
		
		private $routes          = [];
		private $url_parts       = NULL;
		private $url_parts_count = 0;
		
		
		/**
		 * Uses htmlspecialchars to echo a string so that it's safer to display
		 *
		 * @param    string    $text
		 */
		public static function out($text = '') {
			
			echo htmlspecialchars($text);
			
		}
		
		/**
		 * Echoes a CSRF token to be included with any forms that are being submitted via POST
		 */
		public static function echoToken() {
			
			// Check if SESSION is started
			if (session_status() == PHP_SESSION_NONE)
				session_start();
			
			if (!isset($_SESSION["csrf"]))
				$_SESSION["csrf"] = bin2hex(random_bytes(50));
			
			echo '<input type="hidden" name="csrf" value="' . $_SESSION["csrf"] . '">';
			
		}
		
		public static function getToken() {
			
			// Check if SESSION is started
			if (session_status() == PHP_SESSION_NONE)
				session_start();
			
			if (!isset($_SESSION["csrf"]))
				$_SESSION["csrf"] = bin2hex(random_bytes(50));
			
			return $_SESSION["csrf"];
			
		}
		
		/**
		 * Checks if the POST CSRF token is valid
		 *
		 * @return bool
		 */
		public static function isTokenValid() {
			
			// Check if SESSION is started
			if (session_status() == PHP_SESSION_NONE)
				session_start();
			
			if (!isset($_SESSION['csrf']) || !isset($_POST['csrf']))
				return FALSE;
			
			if ($_SESSION['csrf'] != $_POST['csrf'])
				return FALSE;
			
			return TRUE;
			
		}
		
		/**
		 * Checks that a get request is made
		 *
		 * @param    $route     string    The route to match
		 * @param    $action    mixed    The action to perform (file to include or function)
		 *
		 * @return    void
		 */
		public function get($route, $action) {
			$this->routes['GET'][$route] = $action;
		}
		
		/**
		 * Checks that a post request is made
		 *
		 * @param    $route     string    The route to match
		 * @param    $action    mixed    The action to perform (file to include or function)
		 *
		 * @return    void
		 */
		public function post($route, $action) {
			$this->routes['POST'][$route] = $action;
		}
		
		/**
		 * Checks that a put request is made
		 *
		 * @param    $route    string    The route to match
		 * @param    $action   mixed    The action to perform (file to include or function)
		 *
		 * @return    void
		 */
		public function put($route, $action) {
			$this->routes['PUT'][$route] = $action;
		}
		
		/**
		 * Checks that a patch request is made
		 *
		 * @param    $route    string    The route to match
		 * @param    $action   mixed    The action to perform (file to include or function)
		 *
		 * @return    void
		 */
		public function patch($route, $action) {
			$this->routes['PATCH'][$route] = $action;
		}
		
		/**
		 * Checks that a delete request is made
		 *
		 * @param    $route    string    The route to match
		 * @param    $action   mixed    The action to perform (file to include or function)
		 *
		 * @return    void
		 */
		public function delete($route, $action) {
			$this->routes['DELETE'][$route] = $action;
		}
		
		/**
		 * Checks that any request is made
		 *
		 * @param    $route    string    The route to match
		 * @param    $action   mixed    The action to perform (file to include or function)
		 *
		 * @return    void
		 */
		public function any($route, $action) {
			$this->routes['GET'][$route] = $action;
			$this->routes['POST'][$route] = $action;
			$this->routes['PUT'][$route] = $action;
			$this->routes['PATCH'][$route] = $action;
			$this->routes['DELETE'][$route] = $action;
		}
		
		/**
		 * Runs the routing function
		 *
		 * @return void
		 */
		public function route() {
			// Process the request URL if it hasn't been processed yet
			if ($this->url_parts === NULL) {
				$request_url = filter_var($_SERVER['REQUEST_URI'], FILTER_SANITIZE_URL);
				$request_url = strtok($request_url, '?');
				$request_url = rtrim($request_url, '/');
				$this->url_parts = explode('/', $request_url);
				array_shift($this->url_parts);
				$this->url_parts_count = count($this->url_parts);
			}
			
			// Get the HTTP method and route
			$method = $_SERVER['REQUEST_METHOD'];
			
			//Template::setLanguage('en');
			//Template::loadPage($request_url);
			
			// Check if there is a matching route
			if (isset($this->routes[$method])) {
				foreach ($this->routes[$method] as $route => $action) {
					$route_parts = explode('/', $route);
					array_shift($route_parts);
					
					// If the route is empty, then include the file and exit (Aka someone requested /)
					//if (!isset($route_parts[0]) || empty($route_parts) || count($route_parts) == 0 || ($route_parts[0] == '' && $this->url_parts_count == 0)) {
					if ($route_parts[0] == '' && $this->url_parts_count == 0) {
						// Callback function
						if (is_callable($action)) {
							call_user_func_array($action, []);
							exit();
						}
						
						include_once _VIEWS_ . "$action";
						exit();
					}
					
					// Check if the number of parts match and if not continue
					if (count($route_parts) != $this->url_parts_count)
						continue;
					
					
					// Check if the route matches
					$params = [];
					for ($i = 0; $i < count($route_parts); $i++) {
						if (isset($route_parts[$i][0]) && $route_parts[$i][0] === '$') {
							$param_name = substr($route_parts[$i], 1);
							$params[$param_name] = $this->url_parts[$i];
							$$param_name = $this->url_parts[$i];
						}
						elseif ($route_parts[$i] !== $this->url_parts[$i]) {
							continue 2;
						}
					}
					
					
					// If we're here then it passed all of them and this is the route we want
					if (is_callable($action)) {
						call_user_func_array($action, $params);
					}
					else {
						if (file_exists(_VIEWS_ . "$action")) {
							include_once _VIEWS_ . "$action";
						}
						else {
							error_log('Router->route() :: Endpoint "' . $route . '" found but file "' . $action . '" not found!');
							// redirect to 500
							$error_code = '500';
							include_once(_VIEWS_ . '/page/error.php');
						}
					}
					
					// So that we don't continue foreach
					exit();
					
				}
			}
			
			// Handle 404 // @todo redirect to 404
			$error_code = '404';
			include_once(_VIEWS_ . '/page/error.php');
			
		}
		
		
	}