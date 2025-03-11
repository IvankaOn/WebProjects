/* *********************************************** */
/**************** TOM SELECT OPTIONS ***************/
/* *********************************************** */
let tomSelectDefaultOptions = {
	/* controlInput: null */
}



let tomSelectWorkTimesOptions = {

	render: {
		option: function(data, escape) {
			let selectedText = escape(data.text);
			let price = data.$option.dataset.price ?? "$0";

			let option = `<div class="d-flex align-items-center text-start justify-content-between">${selectedText} <span class="text-drab fw-normal">Up To $${price}</span></div>`;
			return option;
		},
		item: function(data, escape) {
			let selectedText = escape(data.text);
			let price = data.$option.dataset.price ?? "$0";

			let option = `<div class="d-flex align-items-center text-start pe-4 justify-content-between">${selectedText} <span class="text-drab ms-3">$${price}</span></div>`;
			return option;
		}
	}
}



let tomSelectZoomOptions = {
	controlInput: null,
	render: {
		item: function(data, escape) {
			let selectedText = escape(data.text);

			let option = `<div class="d-flex align-items-center lh-base"><span class="fi-rr-zoom-in me-2 lh-sm text-drab text-xs"></span><span class="d-none d-sm-inline-block">${selectedText}</span</div>`;
			return option;
		}
	},
	plugins: {
		'dropdown_header': {
			html: function(data){
				return `<div>
							<div class="text-xxs text-light-dark d-flex justify-content-between fw-normal pb-2">
								Zoom In
								<span>Ctrl+</span>
							</div>
							<div class="text-xxs text-light-dark d-flex justify-content-between fw-normal">
								Zoom Out
								<span>Ctrl-</span>
							</div>
							<hr>
						</div>`;
			}
		}
	}
}



let tomSelectProductPriceBasketOptions = {
	controlInput: null,
	render: {
		option: function(data, escape) {
			let selectedText = escape(data.text);
			let price = data.$option.dataset.price ?? "$0.00";

			let option = `<div class="d-flex align-items-center text-start justify-content-between"><span>Quantity:<span class="fw-bold ms-1 me-4 me-sm-5"> ${selectedText}</span></span> <span class="fw-bold text-green pe-4 pe-sm-5">${price}</span></div>`;
			return option;
		},
		item: function(data, escape) {
			let selectedText = escape(data.text);
			let price = data.$option.dataset.price ?? "$0.00";

			let option = `<div class="d-flex align-items-center flex-fill text-start pe-4 pe-sm-5 justify-content-between"><span class="fw-400">Quantity:<span class="fw-bold ms-1 me-4 me-sm-5"> ${selectedText}</span></span> <span class="fw-bold text-green">${price}</span></div>`;
			return option;
		}
	}
}



let tomSelectWithQuantityOptions = {
	controlInput: null,
	render: {
		item: function(data, escape) {
			let selectedText = escape(data.text);

			let option = `<div class="d-flex align-items-center justify-content-between text-start fw-normal text-white"><span>Quantity:<span class="fw-bold ms-1 me-3"> ${selectedText}</span></span> <span class="me-4 text-drab">$5555.55</span></div>`;
			return option;
		}
	}
}



let tomSelectWithQuantityCartOptions = {
	controlInput: null,
	render: {
		option: function(data, escape) {
			let selectedText = escape(data.text);
			let price = data.$option.dataset.price ?? "$0.00";

			let option = `<div class="d-flex align-items-center justify-content-between fw-normal"><span>Quantity:<span class="fw-bold ms-1 me-3"> ${selectedText}</span></span> <span class="text-drab text-end">${price}</span></div>`;
			return option;
		},
		item: function(data, escape) {
			let selectedText = escape(data.text);
			let price = data.$option.dataset.price ?? "$0.00";

			let option = `<div class="d-flex align-items-center text-start pe-4 justify-content-between"><span>Quantity:<span class="fw-bold ms-1 me-5"> ${selectedText}</span></span> <span class="text-drab">${price}</span></div>`;
			return option;
		}
	}
}




let tomSelectCountryOptions = {
	controlInput: null,
	render:{
		option: function(data, escape) {
			let text = escape(data.text);
			let img = data.$option.dataset.icon;

			let option = '<div class="d-flex align-items-center text-start px-0">';

			if(img){
				option = option + `<img class="me-2 icon-flag-country-select" src="${img}" alt="Icon Flag">`;
			}
			option = option + text;
			option = option + '</div>';
			return option;
		},
		item: function(data, escape) {
			let text = escape(data.text);
			let img = data.$option.dataset.icon;

			let option = '<div class="d-flex align-items-center text-start">';

			if(img){
				option = option + `<img class="me-2 icon-flag-country-select" src="${img}" alt="Icon Flag">`; 
			}
			option = option + text;
			option = option + '</div>';
			return option;
		}
	}
}





/* *********************************************** */
/******* INIT TOM SELECT BY CLASS NAME *************/
/* *********************************************** */
document.querySelectorAll('.tom-select').forEach((el)=>{
	addTomSelect(el, tomSelectDefaultOptions);
});  

var tomSelectZoom;
document.querySelectorAll('.tom-select-zoom').forEach((el)=>{
	tomSelectZoom = new TomSelect(el, tomSelectZoomOptions);
});
document.querySelectorAll('.tom-select-work-times').forEach((el)=>{
	new TomSelect(el, tomSelectWorkTimesOptions);
});

document.querySelectorAll('.tom-select-cart').forEach((el)=>{
	new TomSelect(el, tomSelectProductPriceBasketOptions);
});

document.querySelectorAll('.tom-select-quantity').forEach((el)=>{
	new TomSelect(el, tomSelectWithQuantityOptions);
}); 

document.querySelectorAll('.tom-select-quantity-cart').forEach((el)=>{
	new TomSelect(el, tomSelectWithQuantityCartOptions);
}); 

document.querySelectorAll('.tom-select-country').forEach((el)=>{
	initTomSelectByEl(el, tomSelectCountryOptions);
});  





/* *********************************************** */
/************* CREATE COUNTRY SELECT ***************/
/* *********************************************** */
function createCountrySelect(elId, items) {
	let accountAddressBookCountry = document.getElementById(elId);

    if (accountAddressBookCountry) {
        items.forEach(el => {
            let option = document.createElement('option');
            option.dataset.icon = el.image;
            option.innerText = el.name;
            accountAddressBookCountry.append(option);
        })

        initTomSelectByEl(accountAddressBookCountry, tomSelectCountryOptions);
    }
}



/* *********************************************** */
/************* INIT TOM SELECT BY ID ***************/
/* *********************************************** */
function initTomSelectById(elId, tsOptions) {
    let element = document.getElementById(elId);

    if (element) {
        new TomSelect(element, tsOptions);
    }
}




/* *********************************************** */
/************* INIT TOM SELECT BY EL ***************/
/* *********************************************** */
function initTomSelectByEl(element, tsOptions) {
    if (element) {
        new TomSelect(element, tsOptions);
    }
}


/* *********************************************** */
/****************** FLOAT LABELS *******************/
/* *********************************************** */
// Get the form group and label elements
function setFloatLabel(tomSelect, parentDiv) {
	// Bind focus and blur events to the select element
	// tomSelect.control_input.addEventListener("focus", function () {
	// 	parentDiv.classList.add("select-focused");
	// });

	// tomSelect.control_input.addEventListener("blur", function () {
	// 	if (tomSelect.items.length === 0) {
	// 		parentDiv.classList.remove("select-focused");
	// 	}
	// });

	// Bind change event to check if the select has a value
	// tomSelect.on("change", function () {
	// 	if (tomSelect.items.length > 0) {
	// 		parentDiv.classList.add("select-has-value");
	// 	} else {
	// 		parentDiv.classList.remove("select-has-value");
	// 	}
	// });
}

function addTomSelect(el, tomselectConf){
	let labelEl = el.parentNode.querySelectorAll('label');

	if (labelEl.length === 1 && labelEl[0].classList.contains('inline-label')){
		let wrapper = document.createElement('div');
		el.parentNode.insertBefore(wrapper, el);
		wrapper.className = 'select-group';
		wrapper.append(labelEl[0]);
		wrapper.append(el);

		new TomSelect(el, tomselectConf);

		/* setFloatLabel(tomSelect, wrapper); */
	} else {
		new TomSelect(el, tomselectConf);
	}
}