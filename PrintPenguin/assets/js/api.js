// class Api {

// 	token;


// 	constructor() {
// 	     this.token = this.getCookie('PPSS');
// 	}

// 	/* setJwtToken(token) {
// 		this.jwtToken = token;
// 	} */
	 
// 	get(url = '', callback = null, asynchron = true){
// 		this.call('GET', url, null, callback, asynchron);
// 	}

// 	post(url = '', form = null, callback = null, asynchron = true){
// 		let formData = new FormData(form);
// 		call('POST', url, formData, callback, asynchron);
// 	}

// 	put(url = '', form = null, callback = null, asynchron = true){
// 		let formData = new FormData(form);
// 		call('PUT', url, formData, callback, asynchron);
// 	}

// 	delete(url = '', callback = null, asynchron = true){
// 		call('DELETE', url, null, callback, asynchron);
// 	}


// 	call(method = 'GET', url = '', data = '', callback = null, asynchron = true) {

// 		if(url == ''){
// 			console.log('No URL received');
// 			return;
// 		}

// 		let xhr = new XMLHttpRequest();
// 		xhr.withCredentials = true;
// 		xhr.open(method, url, asynchron);

// 		// Add JWT token to request headers
// 		/* var jwtToken = this.getCookie('jwt'); */

// 		if (this.token) {
// 			xhr.setRequestHeader('Authorization', 'Bearer ' + this.token);
// 		}

// 		xhr.onreadystatechange = () => {
// 			if(xhr.readyState == 4) {

// 				var result = JSON.parse(xhr.responseText);

// 				this.checkOptions(result);
				
// 				switch (xhr.status) {
// 					case 401:
// 						http401();
// 						break;
// 					case 403:
// 						http403();
// 						break;
// 					case 300:
// 						http300();
// 						break;
// 					case 200:
// 						if(callback){
// 							this.http200(callback, result.data ?? '');

// 						} else {
// 							return result;
// 						}

// 						break;
				
// 					default:
// 						console.log('error');
// 				}

// 			}
// 		  }

// 		if(data) {
// 			xhr.send(data);
// 		} else {
// 			xhr.send();
// 		}
	  
// 	}


// 	http401(){
// 		this.token = '';

// 		/* Show modal full screen  Sign In */
// 		openLoginContent();

// 	}

// 	http403(){
// 		this.token = '';

// 		/* return false BAD LOGIN*/
// 	}

// 	http300(){
// 		/* Show modal full screen  SwitchAccounts */
// 		openMultipleAccountsContent();
// 	}

// 	http200(callback, result){
// 		callback(result);
// 	}

// 	checkOptions(result){

// 		if (result.options){

// 			let options = result.options;

// 			if(options.clear_cookies){
// 				this.deleteAllCookies();
// 			}

// 			if(options.cookies){

// 				options.cookies.forEach(cookie => {

// 					if(cookie.name) {

// 						if(cookie.value === false) {
// 							this.deleteCookie(cookie.name);

// 						} else {

// 							this.setCookie(cookie.name, cookie.value ?? '', cookie.expiry ?? null);
// 						}

// 					} else {
// 						console.log('Nie moglismy ustawić cookie bo nie ma imieni');
// 					}
				
// 				})
// 			}

			
// 		}
// 	}

// 	setCookie(name, value, days) {

// 		if (!days) {
// 			days = 1000;
// 		}
// 			var date = new Date();
// 			date.setTime(date.getTime() + (days*24*60*60*1000));
// 			var expires = "; expires=" + date.toUTCString();
		
// 		document.cookie = name + "=" + (value || "")  + expires + "; path=/";
// 	}

// 	getCookie(name) {
// 		var nameEQ = name + "=";
// 		var ca = document.cookie.split(';');
// 		for(var i=0;i < ca.length;i++) {
// 			var c = ca[i];
// 			while (c.charAt(0)==' ') c = c.substring(1,c.length);
// 			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
// 		}
// 		return null;
// 	}
	

// 	deleteAllCookies() {
// 	  var cookies = document.cookie.split(";");
	
// 	  for (var i = 0; i < cookies.length; i++) {
// 	    var cookie = cookies[i];
// 	    var eqPos = cookie.indexOf("=");
// 	    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
// 	    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
// 	  }
// 	}

// 	deleteCookie(name) {
// 		document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
// 	}

// }



// const api = new Api();


// api.get('https://printpenguinapi.faster.ws/cookietest', function(jsonData){

//   console.log(jsonData);

// }, false);






// var $apiCached = {}
// /* *********************************************** */
// /**************** GET MENU PRODUCTS ****************/
// /* *********************************************** */
// $apiCached.getCachedMenuProducts = getMenuProducts();

// function getMenuProducts() {

// 	let cachedResult = null;
	
// 	return function() {
		
// 	  if (cachedResult !== null) {
		
// 	    return cachedResult;
		
// 	  } else {
		
// 	    cachedResult = cachedResults.products; 
// 	    return cachedResult;
		
// 	  }
// 	}
// }  




// /* *********************************************** */
// /****************** GET MENU GROUPS ****************/
// /* *********************************************** */
// $apiCached.getCachedMenuGroups = getMenuGroups();

// function getMenuGroups() {

// 	let cachedResult = null;
	
// 	return function() {
		
// 	  if (cachedResult !== null) {
		
// 	    return cachedResult;
		
// 	  } else {
		
// 	    cachedResult = cachedResults.groups; 
// 	    return cachedResult;
		
// 	  }
// 	}
// }  



// $apiCached.getCachedMenu = function () {

// 	let categories = $apiCached.getCachedMenuCategories();
// 	let groups = $apiCached.getCachedMenuGroups();

// 	if (categories) {
// 		let categoryArr = [];
// 		for (const [key, category] of Object.entries(categories)) {
// 			let catGroupsArr = [];

// 			category.product_groups.forEach(catGrKey => {
// 				let catGr = groups[catGrKey];

// 				catGroupsArr.push({
// 					group_id: catGrKey,
// 					group_name: catGr.name,
// 					group_url: catGr.url
// 				})
// 			});

// 			categoryArr.push({
// 				category_id: key,
// 				category_name: category.name,
// 				category_url: category.url,
// 				category_groups: catGroupsArr
// 			})
// 		}

// 		return categoryArr;
// 	}

// };





// /* *********************************************** */
// /**************** GET MENU CATEGORIES **************/
// /* *********************************************** */
// $apiCached.getCachedMenuCategories = getMenuCategories();

// function getMenuCategories() {

// 	let cachedResult = null;
	
// 	return function() {
		
// 	  if (cachedResult !== null) {
		
// 	    return cachedResult;
		
// 	  } else {
		
// 	    cachedResult = cachedResults.categories; 
// 	    return cachedResult;
		
// 	  }
// 	}
// }  





// /* *********************************************** */
// /****************** GET MENU KEYWORDS **************/
// /* *********************************************** */
// $apiCached.getCachedKeywords = getKeywords();
// function getKeywords() {

// 	let cachedResult = null;
	
// 	return function() {
		
// 	  if (cachedResult !== null) {
		
// 	    return cachedResult;
		
// 	  } else {
		
// 	    cachedResult = cachedResults.keywords; 
// 	    return cachedResult;
		
// 	  }
// 	}
// };





// /* *********************************************** */
// /************ GET MENU RECOMMENDATIONS *************/
// /* *********************************************** */
// $apiCached.getCachedMenuRecommendations = function () {


// 	let recommendationsProductsId = cachedResults.recommendations;

// 	let allProducts = $apiCached.getCachedMenuProducts();

// 	if (allProducts) {

// 		let productsObj = {};

// 		recommendationsProductsId.forEach(productId => {
			
// 			for (const [key, product] of Object.entries(allProducts)) {

// 				if(productId == key) {
					
// 					productsObj[key] = {
// 						name: product.name,
// 						content: product.content,
// 						src: product.src,
// 						alt: product.alt,
// 						url: product.url,
// 						color: product.color
// 					};
// 				}
// 			}
// 		})

// 		return productsObj;
// 	}

// };





// /* *********************************************** */
// /*************** GET MENU PROMOTIONS ***************/
// /* *********************************************** */
// $apiCached.getCachedPromotions = function () {

// 	let promotionsProductsId = cachedResults.promotions;

// 	let allProducts = $apiCached.getCachedMenuProducts();

// 	if (allProducts) {

// 		let productsObj = {};

// 		promotionsProductsId.forEach(productId => {
			
// 			for (const [key, product] of Object.entries(allProducts)) {

// 				if(productId == key) {
					
// 					productsObj[key] = {
// 						name: product.name,
// 						content: product.content,
// 						src: product.src,
// 						alt: product.alt,
// 						url: product.url,
// 						color: product.color
// 					};
// 				}
// 			}
// 		})

// 		return productsObj;
// 	}

// };
