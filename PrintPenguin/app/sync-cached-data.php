<?php
	
	$endpoint = 'https://printpenguinapi.faster.ws';
	
	// API endpoint URLs
	$fetch = [
		'products' => '/product/items',
		'groups' => '/product/groups',
		'categories' => '/product/categories',
		'keywords' => '/product/keywords',
		'recommendations' =>  '/product/recommendations',
		'promotions' => '/product/promotions'
	];
	
	$data = [];
	foreach ($fetch as $name => $query)
		$data[$name] = json_decode(file_get_contents($endpoint . $query));
	
	file_put_contents(dirname(__DIR__) . '/app/cache/main.en.js', 'var cachedResults = ' . json_encode($data, JSON_PRETTY_PRINT) . ';');