	
	const Catalog = (function() {
		
		const baseApiUri = '';
		
		function getProducts() {
			// get list of all products using api - cached by default
		}
		
		function getCategories() {
			// get list of all products using api - cached by default
		}
		
		function getGroups() {
			// get list of all products using api - cached by default
		}
		
		
		
		
		
		// Classes ////////////////////////////////////////////////////////////////////////////////
		
		
		
		/* Products */
		class Product {
			
			title;
			description;
			img_src;
			img_alt;
			recommended;
			
			
			constructor(uuid) {
				// check if uuid is in cache
					// if yes load properties
					Cache.get(uuid);
					// if no get from api (@todo - api should cache each product details to file?? - this will need to be offset.)
						Cache.set(uuid, { all_properties_in_class });
			}
			
			getRecommended() {
				// if property is not empty
					// return property
				// else use api to get list
					// update cache + return
					Cache.set(uuid, { all_properties_in_class });
					
					//return list of recommended uuid
			}
			
			getSimilar() {
				// if property is not empty
					// return property
				// else use api to get list
					// update cache + return
					Cache.set(uuid, { all_properties_in_class });
			}
			
			getPopular() {
				// if property is not empty
					// return property
				// else use api to get list
					// update cache + return
					Cache.set(uuid, { all_properties_in_class });
			}

		}
		
		
		
		class Group {
			
			title;
			description;
			url;
			
			
			
			constructor(uuid) {
				// check if uuid is in cache
					// if yes load properties
					Cache.get(uuid);
					// if no get from api (@todo - api should cache each group details to file?? - this will need to be offset.)
						Cache.set(uuid, { properties_in_here });
			}
			
			getProducts() {
				// if property is not empty
					// return property
				// else use api to get list
					// update cache + return
					Cache.set(uuid, { all_properties_in_class });
			}
			
			getRecommendedProducts() {
				// if property is not empty
					// return property
				// else use api to get list
					// update cache + return
					Cache.set(uuid, { all_properties_in_class });
			}
			
			getSimilarProducts() {
				// if property is not empty
					// return property
				// else use api to get list
					// update cache + return
					Cache.set(uuid, { all_properties_in_class });
			}
			
			getPopularProducts() {
				// if property is not empty
					// return property
				// else use api to get list
					// update cache + return
					Cache.set(uuid, { all_properties_in_class });
			}

		}
		
		
		class Category {
			
			title;
			description;
			url;
			
			
			
			constructor(uuid) {
				// check if uuid is in cache
					// if yes load properties
					Cache.get(uuid);
					// if no get from api (@todo - api should cache each category details to file?? - this will need to be offset.)
						Cache.set(uuid, { properties_in_here });
			}
			
			getGroups() {
				// if property is not empty
					// return property
				// else use api to get list
					// update cache + return
					Cache.set(uuid, { all_properties_in_class });
			}
			
			getProducts() {
				// if property is not empty
					// return property
				// else use api to get list
					// update cache + return
					Cache.set(uuid, { all_properties_in_class });
			}
			
			getRecommendedProducts() {
				// if property is not empty
					// return property
				// else use api to get list
					// update cache + return
					Cache.set(uuid, { all_properties_in_class });
			}
			
			getSimilarProducts() {
				// if property is not empty
					// return property
				// else use api to get list
					// update cache + return
					Cache.set(uuid, { all_properties_in_class });
			}
			
			getPopularProducts() {
				// if property is not empty
					// return property
				// else use api to get list
					// update cache + return
					Cache.set(uuid, { all_properties_in_class });
			}

		}
		
		
		
		return {
			getProducts,
			getCategories,
			getGroups,
			Product,
			Group,
			Catgory,
		};
		
		
		
	})();
	
	
	
	
	
	
	
	
	
	/*
	// Structuring like this will allow usage like this:
	
	
	cats = Catalog.getCategories();
	
	foreach cats as cat {
		
		category = new Catalog.Category(cat);
		
		category.title;
		category.url;
		
		grps = category.getGroups();
		
		foreach grps as grp {
			
			group = new Catalog.Group(grp);
			
			group.title;
			group.url;
			
			prods = group.getProducts();
			
			foreach prds as prd {
				
				product = new Catalog.Product(prd);
				
				product.title;
				product.url;
				product.img_src;
				product.img_alt;
				
			}
			
		}
		
	}
	
	*/
	
	
	
	// because product, group, category uuid all have different prefix we can easily store them in cache incase there is multiple calls to the same request
	
	
	
	
	
		// Properties set in Flyout
	
		Flyout.clear(); // should clear be private and triggered when hiding
		
		Flyout.hide(); // this will clear // check if already closed
		
		
		Flyout.Header.backArrow.show(); // module to set property of backArrow
		Flyout.Header.backArrow.hide();
		
		Flyout.Header.background = 'blue';
		Flyout.Header.background = '';
		
		Flyout.Header.textAlign = 'left';
		
		Flyout.Header.title = ''; // should these be functions??
		Flyout.Header.subTitle = ''; // Check to make sure that h4 title supplied first
		
		Flyout.Body.content('html here?');
		Flyout.Body._update();
		
		Flyout.Footer.content = 'html here';
		Flyout.Footer.show();
		
		Flyout.show(); // this will render // check if already open