<?php
	
	// @note - when files are uploaded, we will need to generate the jpg versions of the files and assign a uuid which will then be used to get the images here.
	
	if (!isset($size) || !isset($image_uuid)) {
		die('Invalid Image!');
	}
	
	// Acceptable sizes
	$acceptable_sizes = [
		's', // small - 30% quality
		'm', // medium - 50% quality
		'l', // large - 70% quality
		'o'	// full quality image
	];
	
	if (!in_array($size, $acceptable_sizes)) {
		die('Invalid Image Size!');
	}
	
	
	// Check if file exists
	$filename = _DATA_ . DS . 'images' . DS . $image_uuid . '_' . $size . '.png';
	
	if (!file_exists($filename)) {
		die('Image does not exist!');
	}
	
	// display image
	header('Content-Type: image/jpeg');
	// make 100px wide thumbnail at 50% quality
	/*
	$image = new Imagick($filename);
	$image->setImageFormat('jpg');
	//$image->thumbnailImage(100, 0);
	$image->setImageCompressionQuality(30);
	*/
	
	
	
	echo $image;
	//echo file_get_contents($filename);
	
?>
