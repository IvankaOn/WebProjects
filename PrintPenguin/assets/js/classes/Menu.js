class Menu {

    api;
    cached = {};
    items = null;
    groups = null;
    categories = null;
    promotions = null;
    recommendations = null;
    user_recommendations = null;
    keywords = null;

    last_search = '';
    
    /* 
     * Request cachedResults as cached which is an array from/cached/en.js
     */

    constructor(api, cached = {}){

        this.api = api;

        console.log('Menu->constructor()');
        console.log(api);

        if(cached && typeof cached === 'object'){ //Array.isArray(cached)
            this.cached = cached;
        } else {
            this.cached = api.get('https://printpenguinapi.faster.ws/cache/all');
        }

    }


    /**
     * Used for the search bar to look up results
     * 
     * @param {string} search_term String of the text to search
     * @returns {Array} Product UUID's that match the search or Recommended Products
     */
    search(search_term){

        if(search_term && search_term != this.last_search){

            this.api.get(`https://printpenguinapi.faster.ws/search/${encodeURIComponent(search_term)}`, (data) => {
                return data;
            }, false);

        } else {
            let result = {};

            result.title = 'Recommended Products';
            result.products = this.getRecommendations(); // []
    
            return result;
        }
    }


    /**
     * Gets the information from cache or from API
     * 
     * @param {string} item Name of the API data we want to get
     * @returns {Array|Object|Boolean} False if item name is empty, arr/obj if found based on API data
     */
    getCache(item = ''){

        if(!item) {
            return false; // should this be false
        }

        if(this[item] === null){
            if(this.cached[item]){
                this[item] = this.cached[item];
            } else{
                this[item] = this.api.get(`https://printpenguinapi.faster.ws/product/${item}`);
            }
        }
        return this[item];
    }


    /**
     * Gets a product details as an object
     * 
     * @param {string} productId Product UUID (ex: prod_7293429fuih4)
     * @returns {Object} Empty if nothing found or product information if UUID exists
     */
    getProduct(productId = ''){

        if(productId){
         
            let product = this.getCache('items');

            if(product[productId]){
                return product[productId];
            }
        }

        return {};
       
    }


    

    /**
     * Gets the product recommendations for use in constructing HTML
     * 
     * @returns {Array} An array of product objects
     */
    getPromotions(){
        let promotionProducts  = [];

        let promotions = this.getCache('promotions'); // []

        if(!promotions){
            return [];
        }

        promotions.forEach(productId => {

            let product = this.getProduct(productId);

            if (product){
                promotionProducts.push(product);
            }
        })

        return promotionProducts; // []
    }


    /**
     * Will check to see if the user has any product recommendations and if not will try to return generic recommendations.
     * This will also cache any user_recommendations that were found with the API call
     * 
     * @returns {Array} Array of recommended products as objects
     */
    getRecommendations(){
        let results = [];
        let data = [];
        
        if (this.user_recommendations === null) {
            let user_recommendations = this.api.get('https://printpenguinapi.faster.ws/user/recommendations');
            if (user_recommendations) {
                this.user_recommendations = user_recommendations;
            } else {
                this.user_recommendations = [];
            }
        }

        if (this.user_recommendations) {
            data = this.user_recommendations;
        }

        if (data.length == 0) {
            data = this.getCache('recommendations');
        }

        if(data){
            /* data.forEach(productId => {
                let product = this.getProduct(productId); 

                if (product){
                    results.push(product);
                }
            }); */
            results = data;
        }

        return results;
    }


    /**
     * This will return a property for a given group or category
     * 
     * @param {string} item Class property ( groups | categories )
     * @param {string} uuid UUID of the group or category we want information about
     * @param {string} property Which property we want to access
     * @returns {string} Empty string if nothing found or the value if found
     */
    getProperty(item, uuid, property) {
        let result = '';

        if (uuid) {
            let data = this.getCache(item);

            if (data[uuid] && data[uuid][property]) {
                result = data[uuid][property];
            }
        }

        return result;

    }
    
    /**
     * Get the name of the group
     * 
     * @param {string} uuid UUID of the group
     * 
     * @returns {string} Name of the group
     */
    getGroupName(uuid = ''){
        return this.getProperty('groups', uuid, 'name');
    }

    /**
     * Get the name of the category
     * 
     * @param {string} uuid UUID of the category
     * 
     * @returns {string} Name of the category
     */
    getCategoryName(uuid = '') {
        return this.getProperty('categories', uuid, 'name');
    }

    /**
     * Get the URL to the group
     * 
     * @param {string} uuid UUID of the group
     * 
     * @returns {string} URL to the group
     */
    getGroupUrl(uuid = '') {
        return this.getProperty('groups', uuid, 'url');
    }

    /**
     * Get the URL to the category
     * 
     * @param {string} uuid UUID of the category
     * 
     * @returns {string} URL to the category
     */
    getCategoryUrl(uuid = '') {
        return this.getProperty('categories', uuid, 'url');
    }

    /**
     * Get all the products for a group
     * 
     * @param {string} uuid Group UUID that we want to get the products for
     * 
     * @returns {Array} Empty if no results or an array of product UUID's
     */
    getGroupProducts(uuid = '') {
        let products = this.getProperty('groups', uuid, 'products');
        
        if (products) {
            return products;
        }

        return [];
    }

    /**
     * Get all the groups for a category
     * 
     * @param {string} uuid Category UUID that we want to get the groups for
     * 
     * @returns {Array} Array of group UUID's or empty if no results
     */
     getCategoryGroups(uuid = '') {
        let groups = this.getProperty('categories', uuid, 'product_groups');
        
        if (groups) {
            return groups;
        }

        return [];
    }

    /**
     * Get all products for a specific category
     * 
     * @param {string} uuid Category UUID for which we want to get all the products
     * 
     * @returns {Array} Array of product UUID's or empty array if no results
     */
    getCategoryProducts(uuid = '') {
        let groups = this.getCategoryGroups(uuid);

        if (!groups) {
            return [];
        }

        let results = [];

        // foreach groups get products
        groups.forEach(group_uuid =>{
            let products = this.getGroupProducts(group_uuid);
            if (products) {
                results.push(products);
            }
        });

        return results;
    }



    /**
     * Gets all Categories or Groups
     * 
     * @param {string} item What API data we are accessing ( categories | groups )
     * 
     * @returns {Array} Returns an array of all the UUID's for the item or empty array if no results
     */
    getAllUuids(item) {
        let results = [];

        let obj = this.getCache(item);

        if(obj){
            for (var uuid in obj) {
                results.push(uuid);
            }
        }
        
        return results;
    }

    /**
     * Get a list of all category UUID's
     * 
     * @returns {Array} Category UUID's or empty array
     */
    getCategories() {
        return this.getAllUuids('categories');

    }

    /**
     * Get a list of all group UUID's
     * 
     * @returns {Array} Group UUID's or empty array
     */
    getGroups() {
        return this.getAllUuids('groups');
    }

    /**
     * Get a list of all product UUIDs
     * 
     * @returns {Array} Product UUID's or empty array
     */
    getProducts() {
        return this.getAllUuids('items');
    }

    /**
     * Returns all the keywords used for search type-ahead
     * 
     * @returns {Array} List of keywords as an array
     */
    getKeywords(){
        return this.getCache('keywords');
    }
}


// let menu = new Menu(api, cachedResults);
