<?php

	//die('here');

	//namespace Template;

	

	// this will be an instance for adding scripts, meta, etc.. to the html template

	// it will have a static function for displaying the data

	// it will have chained methods for adding headers

	// it will have an option to have default included scripts

	class Template {

		
		private static $page = [];
		private static $default = [];
		private static $language = 'en';

		

		

		private static $header = [

			'meta'       => [

				'<meta name="author" content="WebArray.com">',

				'<meta charset="UTF-8">',

				'<meta http-equiv="X-UA-Compatible" content="IE=edge">',

				'<meta name="viewport" content="width=device-width, initial-scale=1.0">'

			],

			'og'         => [

				'<meta property="og:title" content="Print Penguin">',

				'<meta property="og:image" content="https://printpenguin.faster.ws/assets/img/og/affordable-printing-products.png">',

				'<meta property="og:image:secure_url" content="https://printpenguin.faster.ws/assets/img/og/affordable-printing-products.png">',

				'<meta property="og:image:type" content="image/jpeg">',

				'<meta property="og:image:width" content="1200">',

				'<meta property="og:image:height" content="627">',

				'<meta property="og:image:alt" content="Print Penguin">',

				'<meta property="og:url" content="https://printpenguin.faster.ws">',

				'<meta property="og:type" content="website">',

			],

			'twitter'    => [

				//'<meta name="twitter:card" content="summary_large_image">',

				'<meta name="twitter:card" content="affordable-printing-products">',

				'<meta property="twitter:domain" content="printpenguin.faster.ws">',

				'<meta property="twitter:url" content="https://printpenguin.faster.ws">',

				'<meta name="twitter:title" content="Print Penguin">',

				'<meta name="twitter:image" content="https://printpenguin.faster.ws/assets/img/og/affordable-printing-products.png">',

				'<meta name="twitter:image:alt" content="Print Penguin">',

				'<meta name="twitter:site" content="@printpenguin">',

				'<meta name="twitter:creator" content="@printpenguin">'

			],

			'favicon'    => [

				'<link rel="icon" type="image/png" sizes="16x16" href="/assets/theme/favicon-16x16.png">',

				'<link rel="icon" type="image/png" sizes="32x32" href="/assets/theme/favicon-32x32.png">',

				'<link rel="icon" type="image/png" sizes="48x48" href="/assets/theme/favicon-48x48.png">',

				'<link rel="icon" type="image/png" sizes="96x96" href="/assets/theme/favicon-96x96.png">',

				

				'<link rel="icon" type="image/png" sizes="36x36" href="/assets/theme/android-icon-36x36.png">',

				'<link rel="icon" type="image/png" sizes="48x48" href="/assets/theme/android-icon-48x48.png">',

				'<link rel="icon" type="image/png" sizes="72x72" href="/assets/theme/android-icon-72x72.png">',

				'<link rel="icon" type="image/png" sizes="96x96" href="/assets/theme/android-icon-96x96.png">',

				'<link rel="icon" type="image/png" sizes="144x144" href="/assets/theme/android-icon-144x144.png">',

				'<link rel="icon" type="image/png" sizes="192x192" href="/assets/theme/android-icon-192x192.png">',

				

				'<link rel="apple-touch-icon" sizes="57x57" href="/assets/theme/apple-icon-57x57.png">',

				'<link rel="apple-touch-icon" sizes="60x60" href="/assets/theme/apple-icon-60x60.png">',

				'<link rel="apple-touch-icon" sizes="72x72" href="/assets/theme/apple-icon-72x72.png">',

				'<link rel="apple-touch-icon" sizes="76x76" href="/assets/theme/apple-icon-76x76.png">',

				'<link rel="apple-touch-icon" sizes="114x114" href="/assets/theme/apple-icon-114x114.png">',

				'<link rel="apple-touch-icon" sizes="120x120" href="/assets/theme/apple-icon-120x120.png">',

				'<link rel="apple-touch-icon" sizes="144x144" href="/assets/theme/apple-icon-144x144.png">',

				'<link rel="apple-touch-icon" sizes="152x152" href="/assets/theme/apple-icon-152x152.png">',

				'<link rel="apple-touch-icon" sizes="180x180" href="/assets/theme/apple-icon-180x180.png">'

			],

			'pwa'        => [

				'<link rel="manifest" href="/assets/theme/manifest.json">',

				'<meta name="msapplication-TileColor" content="#ffffff">',

				'<meta name="msapplication-TileImage" content="/assets/theme/ms-icon-144x144.png">',

				'<meta name="msapplication-config" content="/assets/theme/browserconfig.xml" />',

				'<meta name="theme-color" content="#009fe3">'

			],

			'css'        => [

				'top' => [

					'<link rel="stylesheet" href="/assets/css/bootstrap.css">', // Bootstrap

					'<link rel="stylesheet" href="/assets/tom-select/tom-select.css">' // TOM select

				],

				'mid' => [

					'<link rel="stylesheet" href="/assets/iconsax/style.css">',	// ICONSAX

					'<link rel="stylesheet" href="/assets/uicons-regular-rounded/css/uicons-regular-rounded.css">', // UICONS

					'<link rel="stylesheet" href="/assets/penguin-icons-v1.0/style.css">', // PENGUIN_ICONS

					'<link rel="stylesheet" href="/assets/glider/glider.min.css">' // GLIDER SLIDER

				],

				'end' => [

					'<link rel="stylesheet" href="/assets/css/style.css">' // Style

				]

			],

			'javascript' => [

				'class' => [

					'top' => [],

					'mid' => [],

					'end' => []

				],

				'script' => [

					'top' => [],

					'mid' => [],

					'end' => []

				]

			],

		];

		

		private static $footer = [

			'javascript' => [

				'class' => [

					'top' => [],

					'mid' => [

						'<script src="/assets/js/classes/Log.js"></script>',

						'<script src="/app/cache/main.en.js"></script>',

						'<script src="/assets/js/bootstrap.min.js"></script>',

						'<script src="/assets/glider/glider.min.js"></script>',

						'<script src="/assets/js/glider-main.js"></script>',

						'<script src="/assets/tom-select/tom-select.complete.js"></script>',

						'<script src="/assets/js/tom-select-functions.js"></script>',

						'<script src="/assets/js/classes/API.js"></script>',

						'<script src="/assets/js/classes/Menu.js"></script>',

						'<script src="/assets/js/classes/Cache.js"></script>',

						'<script src="/assets/js/classes/Cookie.js"></script>',

						'<script src="/assets/js/main.js"></script>',

						'<script src="/assets/js/main-menu.js"></script>',

						'<script src="/assets/js/design-flyer-modal.js"></script>',

						'<script src="/assets/js/support-center.js"></script>',

						'<script src="/assets/js/search-products.js"></script>',

						'<script src="/assets/js/user-menu.js"></script>',

						'<script src="/assets/js/products-basket.js"></script>',

						'<script src="/assets/js/update-badges.js"></script>',

						'<script src="/assets/js/switch-account.js"></script>'

					],

					'end' => []

				],

				'script' => [

					'top' => [],

					'mid' => [],

					'end' => []

				]

			]

		];

		

		private static $share_description = [

			'en' => 'Amazing printing and amazing prices at your fingertips.',

			'fr' => 'Impression incroyable et prix incroyables à portée de main.'

		];

		

		private static $title = [

			'en' => 'Print Penguin',

			'fr' => 'Print Penguin'

		];

		private static $description = [

			'en' => 'Amazing printing and amazing prices at your fingertips.',

			'fr' => 'Impression incroyable et prix incroyables à portée de main.'

		];

		private static $keywords = [

			'en' => [

				'Print Penguin',

				'Print',

				'Printing'

			],

			'fr' => [

				'Print Penguin',

				'impression',

				'imprimerie'

			]

		];

		private static $canonical = FALSE;

		private static $robots = [

			'index' => TRUE,

			'follow' => TRUE

		];

		

		

		private $location = '';

		private $async_defer = '';

		private $crossorigin = FALSE;

		private $src = '';

		private $type = '';

		private $sub_type = '';

		private $integrity = '';

		private $pos = 'mid';

		

		

		public function __construct($location) {
			
			$this->data = Cache::get('page_info');
			
			$this->location = $location;

		}
		
		
		// To be called outside the page or inside the page
		/*
		public static function load($endpoint = '/') {
			
			if (empty($endpoint))
				$endpoint = '/';
			
			$cache = Cache::get('page_info');
			
			if (isset($cache[$endpoint]))
				self::$page = $cache[$endpoint];
			else
				self::$default = $cache['/'];
			
		}
		*/
		
		
		
		/**
		 * <b>Set the language of the page</b><br>
		 * This will be used for delivering the proper data as well as setting the page language.<br>
		 * <u>Must be called before loading page data</u>
		 *
		 * @param    string    $language    - The language to set (<b>en</b>, fr)
		 *
		 * @return boolean - TRUE if the language was set, FALSE otherwise
		 */
		public static function useLanguage($language = 'en') {
			
			switch (strtolower($language)) {
				
				case 'en':
				case 'english':
					self::$language = 'en';
					return TRUE;
					
				case 'fr':
				case 'french':
					self::$language = 'fr';
					return TRUE;
				
				default:
					error_log('Template::setLanguage() => Language not supported: ' . $language);
					break;
			}
			
			return FALSE;
			
		}
		
		
		
		/**
		 * <b>Load Page Data</b><br>
		 * This will load all the data for the default page and for the requested page.
		 *
		 * @param    string    $endpoint    - The endpoint of the page to load
		 *
		 * @return boolean - TRUE if the page was set, FALSE otherwise
		 */
		public static function usePage($endpoint = '/') {
			
			if (empty($endpoint))
				$endpoint = '/';
			
			$cache = Cache::get('page_info');
			
			if (isset($cache[self::$language]['/']))
				self::$default = $cache[self::$language]['/'];
			else
				self::$default = $cache['en']['/'];
			
			if (isset($cache[self::$language][$endpoint])) {
				self::$page = $cache[self::$language][$endpoint];
				return TRUE;
			}
			
			return FALSE;
			
		}
		
		
		private static function get($property = '') {
			
			if (empty($property))
				return NULL;
			
			if (isset(self::$page[$property]))
				return self::$page[$property];
			elseif (isset(self::$default[$property]))
				return self::$default[$property];
			else
				return NULL;
			
		}
		
		
		
		
		
		
		

		public static function addHeader() {

			return new self('header');

		}

		

		public static function addFooter() {

			return new self('header');

		}

		

		public function css($css_file_name) {

			$this->type = 'css';

			

			if (substr($css_file_name, -4) != '.css')

				$css_file_name .= '.css';

			

			$this->src = '/assets/css/' . $css_file_name;

			

			return $this;

		}

		

		public function cssLibrary($css_file_name) {

			$this->type = 'css';

			

			$this->src = '/assets/' . $css_file_name;

			

			return $this;

		}

		

		public function jsClass($js_class_name) {

			$this->type = 'javascript';

			$this->sub_type = 'class';

			

			if (substr($js_class_name, -3) != '.js')

				$js_class_name .= '.js';

			

			$this->src = '/assets/js/classes/' . $js_class_name;

			

			return $this;

		}

		

		public function js($js_file_name) {

			$this->type = 'javascript';

			$this->sub_type = 'script';

			

			if (substr($js_file_name, -3) != '.js')

				$js_file_name .= '.js';

			

			$this->src = '/assets/js/' . $js_file_name;

			

			return $this;

		}

		

		public function jsLibrary($js_file_name) {

			$this->type = 'javascript';

			$this->sub_type = 'script';

			

			$this->src = '/assets/' . $js_file_name;

			

			return $this;

		}

		

		

		public function async($enabled = TRUE) {

			$this->async_defer = 'async';

			return $this;

		}

		

		public function defer($enabled = TRUE) {

			$this->async_defer = 'defer';

			return $this;

		}

		

		public function crossorigin($parameter = '') {

			if (empty($parameter))

				$this->crossorigin = 'anonymous';

			else

				$this->crossorigin = $parameter;

			

			return $this;

		}

		

		public function integrity($parameter = '') {

			if (!empty($parameter))

				$this->integrity = $parameter;

			

			return $this;

		}

		

		public function toTop() {

			$this->pos = 'top';

			return $this;

		}

		

		public function toEnd() {

			$this->pos = 'end';

			return $this;

		}

		

		public function add() {

			

			if ($this->location == 'robots')

				die('Error :: Cannot use robots with add()');

			

			// Async / Defer

			$ad = '';

			if ($this->async_defer != '')

				$ad = ' ' . $this->async_defer;

			

			// Crossorigin

			$co = '';

			if ($this->crossorigin !== FALSE) {

				if ($this->crossorigin == TRUE)

					$co = ' crossorigin';

				else

					$co = ' crossorigin="' . $this->crossorigin . '"';

			}

			

			// Integrity

			$in = '';

			if ($this->integrity != '')

				$in = ' integrity="' . $this->integrity . '"';

			

			// CSS or JS tag creation

			if ($this->type == 'css') {

				$script = '<link' . $ad . ' rel="stylesheet" href="' . $this->src . '"' . $in . $co . '>';

				

				if ($this->location == 'header')

					self::$header['css'][$this->pos][] = $script;

				elseif ($this->location == 'footer')

					self::$footer['css'][$this->pos][] = $script;

				else

					return FALSE;

			}

			elseif ($this->type == 'javascript') {

				$script = '<script' . $ad . ' src="' . $this->src . '"' . $in . $co . '></script>';

				

				if ($this->location == 'header')

					self::$header['javascript'][$this->sub_type][$this->pos][] = $script;

				elseif ($this->location == 'footer')

					self::$footer['javascript'][$this->sub_type][$this->pos][] = $script;

				else

					return FALSE;

			}

			else {

				return FALSE;

			}

			

			return TRUE;

		}

		

		

		

		

		

		

		public static function getHeader() {

			

			$lang = self::getLang();

			

			echo '<!DOCTYPE html>' . PHP_EOL;

			echo '<html lang="' . $lang . '">' . PHP_EOL;

			echo '	<head>' . PHP_EOL;

			

			// Shareable descriptions

			self::$header['og'][] = '<meta property="og:description" content="' . self::$share_description[$lang] . '">';

			self::$header['twitter'][] = '<meta name="twitter:description" content="' . self::$share_description[$lang] . '">';

			

			// merge top, mid, end

			self::$header['css'] = array_merge(self::$header['css']['top'], self::$header['css']['mid'], self::$header['css']['end']);

			self::$header['javascript']['class'] = array_merge(self::$header['javascript']['class']['top'], self::$header['javascript']['class']['mid'], self::$header['javascript']['class']['end']);

			self::$header['javascript']['script'] = array_merge(self::$header['javascript']['script']['top'], self::$header['javascript']['script']['mid'], self::$header['javascript']['script']['end']);

			

			// Create title

			echo '		<title>' . self::$title[$lang] . '</title>' . PHP_EOL;

			

			// create description

			if (self::$description != '')

				echo '		<meta name="description" content="' . self::$description[$lang] . '">' . PHP_EOL;

			else

				echo '		<meta name="description" content="' . self::$share_description[$lang] . '">' . PHP_EOL;

			

			// create keywords from array

			if (count(self::$keywords) > 0)

				echo '		<meta name="keywords" content="' . implode(', ', self::$keywords[$lang]) . '">' . PHP_EOL;

			

			// create robots

			echo '		<meta name="robots" content="' . (self::$robots['index'] ? 'noindex' : 'index') . ', ' . (self::$robots['follow'] ? 'nofollow' : 'follow') . '">' . PHP_EOL;

			

			// create canonical

			//if (self::$canonical === TRUE)

			//	echo '		<link rel="canonical" href="https://' . $_SERVER['HTTP_HOST'] . strtok($_SERVER['REQUEST_URI'], "?") . '">' . PHP_EOL;

			if (!empty(self::$canonical))

				echo '		<link rel="canonical" href="' . self::$canonical . '">' . PHP_EOL;

			

			

			

			foreach (self::$header as $section) {

				foreach ($section as $tag) {

					if (is_array($tag)) {

						foreach ($tag as $subtag) {

							echo '		' . $subtag . PHP_EOL;

						}

					}

					else {

						echo '		' . $tag . PHP_EOL;

					}

				}

			}

			

			echo '	</head>' . PHP_EOL;

			echo '	<body>' . PHP_EOL;

			echo '	' . PHP_EOL;

			

		}

		

		

		

		public static function getLang() {

			$host = $_SERVER['HTTP_HOST'];

			$subdomain = 'en';

			

			$parts = explode('.', $host);

			

			error_log(print_r($parts, TRUE));

			

			if (count($parts) > 2)

				if ($parts[0] == 'fr' || $parts[1] == 'fr')

					$subdomain = 'fr';

			

			return $subdomain;

		}

		

		public static function getCanonical() {

			return 'https://' . $_SERVER['HTTP_HOST'] . strtok($_SERVER['REQUEST_URI'], '?');

		}

		

		

		

		

		

		public static function getFooter() {

			

			echo '		' . PHP_EOL;

			

			// merge top, mid, end

			self::$footer['javascript']['class'] = array_merge(self::$footer['javascript']['class']['top'], self::$footer['javascript']['class']['mid'], self::$footer['javascript']['class']['end']);

			self::$footer['javascript']['script'] = array_merge(self::$footer['javascript']['script']['top'], self::$footer['javascript']['script']['mid'], self::$footer['javascript']['script']['end']);

			

			foreach (self::$footer as $section) {

				foreach ($section as $tag) {

					if (is_array($tag)) {

						foreach ($tag as $subtag) {

							echo '		' . $subtag . PHP_EOL;

						}

					}

					else {

						echo '		' . $tag . PHP_EOL;

					}

				}

			}

			

			echo '	</body>' . PHP_EOL;

			echo '</html>' . PHP_EOL;

			

		}

		

		

		/*

		public static function docLang() {

			echo 'lang="' . self::$language . '"';

		}

		*/

		

		public function setTitleEN($title = 'Print Penguin') {

			return $this->setTitle('en', $title);

		}

		

		public function setTitleFR($title = 'Print Penguin') {

			return $this->setTitle('fr', $title);

		}

		

		private function setTitle($lang, $title) {

			self::$title[$lang] = $title;

			return $this;

		}

		

		

		public function setDescriptionEN($description = '') {

			return $this->setDescription('en', $description);

		}

		

		public function setDescriptionFR($description = '') {

			return $this->setDescription('fr', $description);

		}

		

		private function setDescription($lang, $description) {

			self::$description[$lang] = $description;

			return $this;

		}

		

		

		public function addKeywordEN($keyword = '') {

			return $this->addKeyword('en', $keyword);

		}

		

		public function addKeywordFR($keyword = '') {

			return $this->addKeyword('fr', $keyword);

		}

		

		private function addKeyword($lang, $keyword) {

			if (!empty($keyword) && !in_array($keyword, self::$keywords[$lang]))

				self::$keywords[$lang][] = $keyword;

			

			return $this;

		}

		

		

		

		public static function setCanonical($canonical = '') {

			

			if (empty($canonical)) {

				// @todo - make sure this works!!!

				

				$host = isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : 'en.printpenguin.ca';

				$host = preg_replace('/^www\./', '', $host);

				$subdomain = strtok($host, '.');

				if ($subdomain != 'fr')

					$subdomain = 'en';

				

				$path = strtok($_SERVER['REQUEST_URI'], '?');

				$canonical = 'https://' . $subdomain . '.printpenguin.ca' . $path;

			}

			

			self::$canonical = $canonical;

		}

		

		

		

		// Robots //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

		

		public static function robots() {

			return new self('robots');

		}

		

		public function follow() {

			if ($this->location == 'robots')

				self::$robots['follow'] = TRUE;

			

			return $this;

		}

		

		public function noFollow() {

			if ($this->location == 'robots')

				self::$robots['follow'] = FALSE;

			

			return $this;

		}

		

		public function index() {

			if ($this->location == 'robots')

				self::$robots['index'] = TRUE;

			

			return $this;

		}

		

		public function noIndex() {

			if ($this->location == 'robots')

				self::$robots['index'] = FALSE;

			

			return $this;

		}

		

	}