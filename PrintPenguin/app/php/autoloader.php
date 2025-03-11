<?PHP
	/**
	 * Autoloader
	 *
	 * This file is used to load all the classes and constants
	 *
	 * @package        Autoloader
	 * @version        1.0
	 * @since          2023-05-26
	 * @author         Konrad Margiel
	 */
	
	
	
	
	
	// Start session
	if (session_status() === PHP_SESSION_NONE) {
		session_start();
	}
	
	
	
	
	
	// Default Timezone
	date_default_timezone_set('America/Toronto'); // @todo - this needs to be set based on the user. Should we get it from locale?
	
	
	
	
	
	// Defined Constants
	if (!defined('DS'))
		define('DS', DIRECTORY_SEPARATOR);
	
	if (!defined('_ROOT_'))
		define('_ROOT_', '/home/webarraydev/dev_projects/enabled/printpenguin');
	
	if (!defined('_APP_'))
		define('_APP_', _ROOT_ . DS . 'app');
	
	if (!defined('_DATA_'))
		define('_DATA_', _ROOT_ . DS . 'user-data');
	
	if (!defined('_PHP_'))
		define('_PHP_', _APP_ . DS . 'php');
	
	if (!defined('_CLASSES_'))
		define('_CLASSES_', _PHP_ . DS . 'classes');
	
	if (!defined('_CACHE_'))
		define('_CACHE_', _APP_ . DS . 'cache');
	
	if (!defined('_CONFIG_'))
		define('_CONFIG_', _APP_ . DS . 'config');
	
	if (!defined('_VIEWS_'))
		define('_VIEWS_', _APP_ . DS . 'views');
	
	if (!defined('_PAGES_'))
		define('_PAGES_', _VIEWS_ . DS . 'pages');
	
	//if (!defined('_DOMAIN_'))
	//	define('_DOMAIN_', 'printpenguinapi.faster.ws');
	
	
	
	
	
	// Register autoloader
	spl_autoload_register(function($class_name) {
		$file = _CLASSES_ . DS . ltrim(str_replace('\\', DS, $class_name), DS) . '.php';
		if (file_exists($file)) {
			include $file;
		}
	});
	
	
	
	
	
	/**
	 * Shortcut to Text::get() used to get the text from the database/cache
	 *
	 * @param    string    $needle    The keyword to search for
	 *
	 * @return   string               The language specific text from the database/cache
	 */
	function __($needle = '') {
		//return \User\Locale::getText($needle);
		// @todo change to get text from cache or api
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	