function makeRequest(method, url) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}

class Api {

	token;
	currency = null;

	constructor() {
	     this.token = this.getCookie('PPSS');

		if(this.currency === null){
			this.currency = this.getCookie('currency');

		}
	}

	 
	get(url = '', callback = null, asynchron = true){
		// let result = makeRequest('GET', url);
		// result.then(res => {
		// 	var result = JSON.parse(res);
		// 	return result.data;
		// } )
		return this.call('GET', url, null, callback, asynchron);
	}


	post(url = '', form = null, callback = null, asynchron = true){
		let formData = new FormData(form);
		call('POST', url, formData, callback, asynchron);
	}


	put(url = '', form = null, callback = null, asynchron = true){
		let formData = new FormData(form);
		call('PUT', url, formData, callback, asynchron);
	}


	remove(url = '', callback = null, asynchron = true){
		call('DELETE', url, null, callback, asynchron);
	}


	call(method = 'GET', url = '', data = '', callback = null, asynchron = true) {

		if(url == ''){
			console.log('No URL received');
			return;
		}

		let xhr = new XMLHttpRequest();
		xhr.withCredentials = true;
		xhr.open(method, url, asynchron);


		if (this.token) {
			xhr.setRequestHeader('Authorization', 'Bearer ' + this.token);
		}

		if (this.currency) {
			xhr.setRequestHeader('X-Currency', this.currency);
		}


		xhr.onreadystatechange = () => {

			if(xhr.readyState == 4) {

				var result = JSON.parse(xhr.responseText);

				// Checking to see if there are any cookies to handle
				if (result.options) {
					this.processResponseCookies(result.options);
				}
			
				switch (xhr.status) {
					case 401:
						this.http401();
						break;
					case 403:
						this.http403();
						break;
					case 300:
						this.http300();
						break;
					case 200:

						if (result.data) {

							if(callback){
								this.http200(callback, result.data ?? '');

							} else {
								console.log(result.data);

								return result.data;
							}

						} else {
							return {};
						}
						break;
				
					default:
						console.log('error');
				}

			}
		  }

		if(data) {
			xhr.send(data);
		} else {
			xhr.send();
		}
	  
	}


	http401(){
		this.token = '';

		openLoginContent();

	}


	http403(){
		this.token = '';

		/* return false BAD LOGIN*/
	}


	http300(){
		/* Show modal full screen  SwitchAccounts */
		openMultipleAccountsContent();
	}


	http200(callback, result){
		callback(result);
	}

// processResponseCookies
	//checkOptions(result){
		processResponseCookies(options) {

		//if (result.options){

		//	let options = result.options;

			if(options.clear_cookies){
				this.deleteAllCookies();
			}

			if(options.cookies){

				options.cookies.forEach(cookie => {

					if(cookie.name) {

						if(cookie.value === false) {
							this.deleteCookie(cookie.name);

						} else {

							this.setCookie(cookie.name, cookie.value ?? '', cookie.expiry ?? null);
						}

					} else {
						console.log('Nie moglismy ustawić cookie bo nie ma imieni');
					}
				
				})
			}
		//}
	}


	setCookie(name, value, days) {

		if (!days) {
			days = 1000;
		}
			var date = new Date();
			date.setTime(date.getTime() + (days*24*60*60*1000));
			var expires = "; expires=" + date.toUTCString();
		
		document.cookie = name + "=" + (value || "")  + expires + "; path=/";
	}


	getCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}
	

	deleteAllCookies() {

	  var cookies = document.cookie.split(";");
	
	  for (var i = 0; i < cookies.length; i++) {
	    var cookie = cookies[i];
	    var eqPos = cookie.indexOf("=");
	    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
	    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
	  }
	}


	deleteCookie(name) {
		document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
	}

}

let api = new Api();