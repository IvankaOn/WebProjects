/* ****************** GET_API ***************** */
function getApi(url, callback) {
	"user strict";
 let xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		xhr.withCredentials = false;
		xhr.onload = function() {
		var jsonData = JSON.parse(xhr.responseText);
			if(callback) callback(jsonData);
		
			if (xhr.readyState == 4 && xhr.status == 200) {
				console.log('ok');
		
			} else {
			console.log('error');
			}
		};
	 xhr.send();
}

/* ****************** SET_API ***************** */
function sendGetQuoteForm(callback) {
	let formData = new FormData(getQuoteForm);
 let xhr = new XMLHttpRequest();
		xhr.open("POST", 'https://doormarketing.buildmy.ca/api/calc/definedareas.php', true);
		xhr.onload = function() {
		var jsonData = JSON.parse(xhr.responseText);
			if(callback) callback(jsonData);
			if (xhr.readyState == 4 && xhr.status == 200) { 
				console.log('ok'); 
			} else {  
				console.log('error'); 
			}
		};
	xhr.send(formData);
}

/* ****************** NAVBAR MENU ***************** */
let navbarNavMenu = document.getElementById('navbarNavAltMarkup');
let navbarLinks = navbarNavMenu.querySelectorAll('.nav-link');
var navbarNavMenuCollapse = new bootstrap.Collapse(navbarNavMenu, { toggle: false });

navbarLinks.forEach(link => {
	link.addEventListener('click', function () {
		navbarNavMenuCollapse.hide();
	})
});

/* ****************** MODAL PRINTING CREATE SELECT ***************** */
let modalSelectPrintingType = document.getElementById('modalSelectPrintingType');
let modalSelectPricingTiers = document.getElementById('modalSelectPricingTiers');

function createModalPrintingTypeSelect(printingTypes){
	printingTypes.forEach(el => {
		let option = document.createElement('option');
		option.value = el.value;
		option.innerText = el.title;
		modalSelectPrintingType.append(option);
	})

	updatePrintingModalPricingTiers(printingTypes[0].prices);
}

function updatePrintingModalPricingTiers(prices){
	modalSelectPricingTiers.innerHTML = '';
	for (let [key, value] of Object.entries(prices)) {
		let option = document.createElement('option');
		option.value = key;
		option.innerText = key;

		modalSelectPricingTiers.append(option);
	}
}

/* ****************** SECTION PRINTING & SHARED MARKETING ***************** */
let printingSelect = document.getElementById('printingSelect');
let printingTable = document.getElementById('printingTable');

let sharedMarketingSelect = document.getElementById('sharedMarketingSelect');
let sharedMarketingCard = document.getElementById('sharedMarketingCard');

let fullServiceData, printingData, sharedMarketingData;

getApi('https://doormarketing.buildmy.ca/api/pricing.php?Printing', function(jsonData) {
	printingData = jsonData.result;
	createSelect(jsonData.result, printingSelect);
	createTable(jsonData.result[0].prices, printingTable);
	createModalPrintingTypeSelect(jsonData.result);
});

getApi('https://doormarketing.buildmy.ca/api/pricing.php?SharedMarketing', function(jsonData) {
	sharedMarketingData = jsonData.result;
	createSelect(jsonData.result, sharedMarketingSelect);
	createCardWithMap(jsonData.result[0], sharedMarketingCard);
});

/* *********************** CHANGE SELECT ************************** */
printingSelect.addEventListener('change', function () {

	for(let i in printingData){
		if(this.value == printingData[i].value){
			let selectedData = printingData[i].prices;
			createTable(selectedData, printingTable);
		}
	}
})

sharedMarketingSelect.addEventListener('change', function(){

	for(let i in sharedMarketingData){
		if(this.value == sharedMarketingData[i].value){
			createCardWithMap(sharedMarketingData[i], sharedMarketingCard);
		}
	}
})

modalSelectPrintingType.addEventListener('change', function(){
	for(let i in printingData){
		if(this.value == printingData[i].value){
			let selectedPrices = printingData[i].prices;
			updatePrintingModalPricingTiers(selectedPrices);
		}
	}
})
/* *********************** BUTTONS ANIMATION ************************** */
document.querySelectorAll('.btn-animation').forEach((el)=>{
	el.addEventListener('mouseenter', function (event) {
	  	let relX = event.pageX - this.offsetLeft;
	  	let relY = event.pageY - this.offsetTop;
		let span = this.querySelector('.js-element-animation');
		span.style.top = `${relY}px`;
		span.style.left = `${relX}px`;
	})
	el.addEventListener('mouseout', function (event) {
		let relX = event.pageX - this.offsetLeft;
	  	let relY = event.pageY - this.offsetTop;
		let span = this.querySelector('.js-element-animation');
		span.style.top = `${relY}px`;
		span.style.left = `${relX}px`;
	})
});

 /* *********************** MAIN MENU ************************** */
let btnBurger = document.getElementById('navbarNavAltMarkup')
let navbar = document.querySelector('.navbar');

btnBurger.addEventListener('show.bs.collapse', function () {
	navbar.classList.add('active');
})
btnBurger.addEventListener('hidden.bs.collapse', function () {
	navbar.classList.remove('active');
})

 /* *********************** BTN FAQ MORE ************************** */
let collapseFaq = document.getElementById('js-collapseFaq');
let faqButton = document.getElementById('faqBtn');
collapseFaq.addEventListener('hide.bs.collapse', function () {
	faqButton.innerHTML = 'Show all <i class="icon-arrow-down-1 fw-semibold ms-3"></i>';
})
collapseFaq.addEventListener('shown.bs.collapse', function () {
	faqButton.innerHTML = 'Show less <i class="icon-arrow-up-2 fw-semibold ms-3"></i>';
})

 /* *********************** TOM SELECT SETTINGS ************************** */
 let tomSelectSettings = {
	maxOptions: null,
	render:{
		option: function(data, escape) {
			let text = escape(data.text);
			let img = data.$option.dataset.icon;

			let option = '<div class="d-flex align-items-center py-3 text-start">';
			if(img){
				option = option + '<img class="mx-2 mx-sm-4 icon-flyer" src="'+img+'" alt="Icon Flyer">';
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
				if(img == 'dist/images/dropdown/map-dot.svg'){ /* @todo change this to be full url with / */
					option = option + '<img class="me-2 me-sm-4 icon-flyer" src="dist/images/dropdown/map-marker.svg" alt="Icon Flyer">'; /* @todo change this to be full url with / */
				}
				else {
					option = option + '<img class="me-2 me-sm-4 icon-flyer" src="'+img+'" alt="Icon Flyer">';
				}
			}
			option = option + text;
			option = option + '</div>';
			return option;
		}
	}
};
 /* *********************** ADD MY TOM SELECT ************************** */
document.querySelectorAll('.tom-select').forEach((el)=>{
    new TomSelect(el, tomSelectSettings)
});

/* *********************** CREATE SELECT ************************** */
function createSelect(options, id) {
	
	options.forEach(el => {
		let option = document.createElement('option');
		option.value = el.value;
		option.dataset.icon = el.icon;
		option.dataset.prices = {};
		for (const property in el.prices) {
			option.dataset.prices[property] = el.prices[property];
		}
		option.innerText = el.title;

		id.append(option);
	})

	/* *********************** ADD MY TOM SELECT ************************** */
    new TomSelect(id, tomSelectSettings);

}

/* *********************** CREATE TABLE ************************** */
function createTable(prices, id) {

	let tbody = id.querySelector('tbody');
	tbody.innerHTML = '';

	for (let [key, value] of Object.entries(prices)) {
		let tr = document.createElement('tr');
		tbody.append(tr);

		let tdPricing = document.createElement('td');
		tdPricing.className = 'col-8 bg-light-primary';
		tdPricing.innerText = key;
		tr.append(tdPricing);

		let tdPrice = document.createElement('td');
		tdPrice.className = 'col-4 text-center';
		tdPrice.innerText = value;
		tr.append(tdPrice);
	}
}

/* ***********************  CREATE CARD ************************** */
function createCardWithMap(item, id) {
	
	/****** ADD IMAGE *****/  
	let cardImage = id.querySelector('.js-card-img');
	cardImage.innerHTML = '';

	cardImage.style.backgroundImage = `url(${item.image})`;


	/****** ADD TOTAL HOUSES *****/ 
	let cardTotalHourse = id.querySelector('.js-total-houses');
	cardTotalHourse.innerHTML =''

	let elementHousNum = document.createElement('h3');
	elementHousNum.className = 'text-black fw-bold';
	elementHousNum.innerText = item.houses;
	cardTotalHourse.append(elementHousNum);


	/****** ADD TOTAL COST *****/ 
	let cardTotalCost = id.querySelector('.js-total-cost');
	cardTotalCost.innerHTML =''

	let elementCostNum = document.createElement('h3');
	elementCostNum.className = 'text-primary fw-bold';
	elementCostNum.innerText = item.cost;
	cardTotalCost.append(elementCostNum);
}	

/*********************** ANIMATION ***************************/
let animateClassNext = 'animate-content-next';
let animateClassBack = 'animate-content-back';

function animationQuote(animateClass, element) {
	
	element.classList.add(animateClass);
	
	setTimeout(function() {
		element.classList.remove(animateClass);
	}, 900);
}
/* *********************** CREATE INPUT TYPE HIDDEN ************************** */
function createInputHidden(name, dataDeliveryValue) {
	let inputEl = document.createElement('input');
	inputEl.value = dataDeliveryValue;
	inputEl.name =  name;
	inputEl.type = 'hidden';

	return inputEl;
}
/* *********************** CREATE ROW ELEMENT ************************** */
function createRowElement(className) {
	let element = document.createElement('div');
	element.className = className;

	return element;
}

/* ************** CREATE SECTION HEADING ************** */
function createSectionHeading(title, desc) {


	/* ************** CREATE COLUMN ************** */
	let column = document.createElement('div');
	column.className = 'col-12 col-sm-10 text-center mb-4 mb-md-5';

	/* ************** CREATE TITLE ************** */
	let titleEl = document.createElement('h2');
	titleEl.className = 'fw-bold pb-md-3';
	titleEl.innerHTML = title;
	column.append(titleEl);

	/* ************** CREATE DESCRIPTION ************** */
	let descriptionEl = document.createElement('p');
	descriptionEl.className = 'lh-sm my-4 py-2';
	descriptionEl.innerHTML = desc;
	column.append(descriptionEl);

	return column;
}

/* ************** CREATE CARD FLYER ************** */
function createCardFlyer(title, desc, iconName, dataName, dataValue, active, cardSize, onclickFunc) {
	animationQuote(animateClassNext, getQuoteContent);

	/* ************** CREATE COLUMN ************** */
	let columnEl = document.createElement('div');
	columnEl.className = 'col-12 col-sm-10 col-lg-4 mb-5 mb-lg-0';

	/* ************** CREATE CARD CONTAINER ************** */
	let cardContainer = document.createElement('div');
	cardContainer.className = 'card-flyer';
	if(active){
		cardContainer.classList.add('active');
	}
	if(cardSize){
		cardContainer.classList.add('card-medium');
	}
	cardContainer.setAttribute('data-name', dataName);
	cardContainer.setAttribute('data-value', dataValue);
	cardContainer.addEventListener('click', onclickFunc);	
	columnEl.append(cardContainer);

	/* ************** CREATE CARD BODY ************** */
	let cardBody = document.createElement('div');
	cardBody.className = 'card-flyer-body d-flex flex-column align-items-center h-100';
	cardContainer.append(cardBody);
	
	/* ************** CREATE CARD BODY ICON ************** */
	let cardBodyIcon = document.createElement('div');
	cardBodyIcon.className = 'card-flyer-body-icon';
	cardBody.append(cardBodyIcon);

	let img = document.createElement('img');
	img.src = `dist/images/icons/${iconName}`;
	cardBodyIcon.append(img);

	/* ************** CREATE CARD BODY TEXT ************** */
	let cardBodyText = document.createElement('div');
	cardBodyText.className = 'card-flyer-body-text d-flex justify-content-center';
	cardBody.append(cardBodyText);

	let cardBodyTextCont = document.createElement('div');
	cardBodyTextCont.className = 'mt-auto mb-auto';
	cardBodyText.append(cardBodyTextCont);

	/* ************** CREATE CARD BODY TEXT TITLE ************** */
	let titleEl = document.createElement('h5');
	titleEl.className = 'my-2 fw-semibold text-xl';
	titleEl.innerText = title;
	cardBodyTextCont.append(titleEl);

	/* ************** CREATE CARD BODY TEXT DESC ************** */
	let descriptionEl = document.createElement('p');
	descriptionEl.className = 'lh-sm text-md';
	descriptionEl.innerText = desc;
	cardBodyTextCont.append(descriptionEl);


	/* ************** CREATE CARD FOOTER ************** */
	let cardFooter = document.createElement('div');
	cardFooter.className = 'card-flyer-footer d-flex justify-content-center align-items-center';
	cardContainer.append(cardFooter);

	let button = document.createElement('button');
	button.className = 'btn btn-primary btn-primary-hover';
	button.type = 'button';
	button.innerText = 'Select';
	cardFooter.append(button);

	return columnEl;
}

/* ************** FUNCTION STEP BACK ************** */
function createBtnStepBack() {

	let col = document.createElement('div');
	col.className = 'col-12 text-center btn-back';

	let button = document.createElement('a');
	button.className = 'btn btn-link btn-link-gray d-inline-flex mb-2 mb-sm-0 align-items-center link-arrow-icon-left';
	button.setAttribute('href', 'javascript:void(0)');
	button.innerText = 'Back';
	col.append(button);

	let icon = document.createElement('i');
	icon.className = 'icon-arrow-circle-left me-2 fw-semibold';
	button.append(icon);

	button.addEventListener('click', stepBack);

	return col;

}

function stepBack() {
	animationQuote(animateClassBack, getQuoteContent);
	let inputDelivery = getQuoteForm.querySelector('input[name="delivery_type"]');
	let inputCardType = getQuoteForm.querySelector('input[name="print_type"]');
	let inputCardSize = getQuoteForm.querySelector('input[name="print_size"]');
	let inputCardPrinting = getQuoteForm.querySelector('input[name="print_side"]');

	getQuoteContent.innerHtml = '';

	if (inputCardPrinting){
		inputCardPrinting.remove(); 
	
		createStepCardPrinting(inputCardPrinting.value);

	} else if (inputCardSize){
		inputCardSize.remove(); 

		createStepCardSize(inputCardType.value);

	} else if (inputCardType){
		inputCardType.remove(); 

		createStepCardType(inputDelivery.value);

	} else if (inputDelivery){
		inputDelivery.remove(); 
		quoteStartContent.classList.remove('d-none');
		animationQuote(animateClassBack, quoteStartContent);
		getQuoteContent.innerText = '';

	} 
	getQuoteContent.scrollIntoView();

}

/* *********************** CREATE TABLE QUOTE ************************** */
function createTableQuote(prices, tbody) {

	tbody.innerHTML = '';

	for(let price in prices) {
		let tr = document.createElement('tr');
		tbody.append(tr);

		let tdPricing = document.createElement('td');
		tdPricing.className = 'bg-dark-purple col-8 p-3 p-sm-4';
		tdPricing.innerText =  prices[price].name;
		tr.append(tdPricing);

		let tdPrice = document.createElement('td');
		tdPrice.className = 'text-center col-4 p-3 p-sm-4';
		tdPrice.innerText = prices[price].quantity;
		tr.append(tdPrice);

		let countTrTable = tbody.querySelectorAll('tr');
		if(countTrTable.length > 0 ){
			tbody.parentElement.classList.remove('rounded-bottom');
		}
	}
	
	return tbody;
}

/* *********************** GET A QUOTE SECTION ************************** */
let getQuoteContent = document.getElementById('getQuoteContent');
let getQuoteForm = document.getElementById('getQuote');
let buttonsQuote = getQuoteForm.querySelectorAll('button');
let quoteStartContent = getQuoteForm.querySelector('.quote-start-content');

let dataDeliveryValue;

buttonsQuote.forEach((btn) => {
	let card = btn.closest('.card-flyer');

	card.addEventListener('click', function(event) {
		quoteStartContent.classList.add('d-none');

		/* ************** CREATE INPUT ************** */
		dataDeliveryValue = btn.dataset.delivery;
		let inputElement = createInputHidden('delivery_type', dataDeliveryValue);
		getQuoteForm.append(inputElement);

		createStepCardType(dataDeliveryValue);

		getQuoteContent.scrollIntoView();
	})
})

/* *********************** CREATE STEP CARD TYPE ************************** */
function createStepCardType(dataDeliveryValue) {
	getQuoteContent.innerHTML = '';	

	if(dataDeliveryValue == 'direct'){
		/* ************** CREATE HEADING ************** */
		let rowEl = createRowElement('row justify-content-center align-items-center mb-3 mb-sm-4 mb-md-5');
		getQuoteContent.append(rowEl);

		let heading = createSectionHeading('Get A Quote', "Doing business online means different things to different businesses.We've got the tools to get your business online easily.");
		rowEl.append(heading);

		/* ************** CREATE ROW ************** */
		let rowEl2 = createRowElement('row justify-content-center align-items-center mb-3 mb-sm-4 mb-md-5');
		getQuoteContent.append(rowEl2);
		
		/* ************** CREATE COLUMNS ************** */
		let columnEl = createCardFlyer('Flyers', 'Cost effective flyers that can be placed in mailboxes by the door', 'flyers-double.svg', 'print_type', 'flyer', false, false, onCardTypeBtnClicked);
		rowEl2.append(columnEl);

		let columnEl2 = createCardFlyer('Door Hangers', 'Thick card stock that can be easily hung on door handles for maximized visibility', 'doorhanger-double.svg', 'print_type', 'doorhanger', true, false, onCardTypeBtnClicked);
		rowEl2.append(columnEl2);

		let columnEl3 = createCardFlyer('Postcards', 'Small and durable cards the can be placed in mailboxes or between the door', 'card-double.svg', 'print_type', 'postcard', false, false, onCardTypeBtnClicked);
		rowEl2.append(columnEl3);

		let columnElBtnBlack = createBtnStepBack();
		getQuoteContent.append(columnElBtnBlack);
	
	}
	if(dataDeliveryValue == 'mailbox'){
		/* ************** CREATE HEADING ************** */
		let rowEl = createRowElement('row justify-content-center align-items-center mb-3 mb-sm-4 mb-md-5');
		getQuoteContent.append(rowEl);

		let heading = createSectionHeading('Get A Quote 2', "Doing business online means different things to different businesses.We've got the tools to get your business online easily.");
		rowEl.append(heading);
		
		/* ************** CREATE ROW ************** */
		let rowEl2 = createRowElement('row justify-content-center align-items-center mb-3 mb-sm-4 mb-md-5');
		getQuoteContent.append(rowEl2);
		
		/* ************** CREATE COLUMNS ************** */
		let columnEl = createCardFlyer('Postcards', 'Small and durable cards the can be placed in mailboxes or between the door', 'card-double.svg', 'print_type', 'postcard', true, false, onCardTypeBtnClicked);
		rowEl2.append(columnEl);

		let columnEl2 = createCardFlyer('Flyers', 'Cost effective flyers that can be placed in mailboxes by the door', 'flyers-double.svg', 'print_type', 'flyer', false, false, onCardTypeBtnClicked);
		rowEl2.append(columnEl2);
		
		let columnElBtnBlack = createBtnStepBack();
		getQuoteContent.append(columnElBtnBlack);
	}
	
}

/* ************** ONCLICKED CARD TYPE BUTTON ************** */
function onCardTypeBtnClicked(event) {
	let dataName = event.currentTarget.dataset.name;
	let dataValue = event.currentTarget.dataset.value;
	let inputElement = createInputHidden(dataName, dataValue);

	getQuoteForm.append(inputElement);

	createStepCardSize(dataValue);

	getQuoteContent.scrollIntoView();
}

/* *********************** CREATE STEP CARD SIZE ************************** */
function createStepCardSize(dataValue){
	getQuoteContent.innerHTML = '';	

	
	/* ************** CREATE HEADING ************** */
	let rowEl = createRowElement('row justify-content-center align-items-center mb-3 mb-sm-4 mb-md-5');
	getQuoteContent.append(rowEl);

	let heading = createSectionHeading('Choose A Size', "Doing business online means different things to different businesses.We've got the tools to get your business online easily.");
	rowEl.append(heading);

	/* ************** CREATE ROW ************** */
	let rowEl2 = createRowElement('row justify-content-center align-items-center mb-3 mb-sm-4 mb-md-5');
	getQuoteContent.append(rowEl2);
	
	if(dataValue == 'doorhanger'){
		
		/* ************** CREATE COLUMNS ************** */
		let columnEl = createCardFlyer('Oversized', '4.5 x 11 Inches', 'doorhanger-double.svg', 'print_size', 'large', true, true, onCardSizeBtnClicked);
		rowEl2.append(columnEl);

		let columnEl2 = createCardFlyer('Standard', '3.5 x 8.5 Inches', 'doorhanger-double.svg', 'print_size', 'small', false, true,onCardSizeBtnClicked);
		rowEl2.append(columnEl2);

		let columnElBtnBlack = createBtnStepBack();
		getQuoteContent.append(columnElBtnBlack);
	}
	if(dataValue == 'postcard'){

		/* ************** CREATE COLUMNS ************** */
		let columnEl = createCardFlyer('Oversized', '8.5 x 5.5 Inches', 'card-double.svg', 'print_size', 'large', true, true,onCardSizeBtnClicked);
		rowEl2.append(columnEl);

		let columnEl2 = createCardFlyer('Standard', '4 x 7 Inches', 'card-double.svg', 'print_size', 'small', false, true,onCardSizeBtnClicked);
		rowEl2.append(columnEl2);

		let columnElBtnBlack = createBtnStepBack();
		getQuoteContent.append(columnElBtnBlack);
	}
	if(dataValue == 'flyer'){
		
		/* ************** CREATE COLUMNS ************** */
		let columnEl = createCardFlyer('Full Page', '8.5 x 11 Inches', 'flyers-double.svg', 'print_size', 'large', true, true,onCardSizeBtnClicked);
		rowEl2.append(columnEl);

		let columnEl2 = createCardFlyer('Half Page', '8.5 x 5.5 Inches', 'flyers-double.svg', 'print_size', 'small', false, true,onCardSizeBtnClicked);
		rowEl2.append(columnEl2);

		let columnElBtnBlack = createBtnStepBack();
		getQuoteContent.append(columnElBtnBlack);
	}
}

/* ************** ONCLICKED CARD TYPE SIZE ************** */
function onCardSizeBtnClicked(event) {

	let dataName = event.currentTarget.dataset.name;
	let dataValue = event.currentTarget.dataset.value;
	let inputElement = createInputHidden(dataName, dataValue);

	getQuoteForm.append(inputElement);
	createStepCardPrinting(dataValue);
	getQuoteContent.scrollIntoView();
}

/* *********************** CREATE STEP CARD PRINTING ************************** */
function createStepCardPrinting() {
	getQuoteContent.innerHTML = '';	
	
	/* ************** CREATE HEADING ************** */
	let rowEl = createRowElement('row justify-content-center align-items-center mb-3 mb-sm-4 mb-md-5');
	getQuoteContent.append(rowEl);

	let heading = createSectionHeading('Printing Location', "Doing business online means different things to different businesses. We've got the tools to get your business online easily.");
	rowEl.append(heading);

	/* ************** CREATE ROW ************** */
	let rowEl2 = createRowElement('row justify-content-center align-items-center mb-3 mb-sm-4 mb-md-5');
	getQuoteContent.append(rowEl2);


	let inputDelivery = getQuoteForm.querySelector('input[name="delivery_type"]');
	let inputCardType = getQuoteForm.querySelector('input[name="print_type"]');

	
	if(inputDelivery.value == 'direct' && inputCardType.value == 'doorhanger'){
		let columnEl = createCardFlyer('Double Sided', 'Printed on the front and back sides.', 'doorhanger-double.svg', 'print_side', 'double', true, true,createDistributionAreas);
		rowEl2.append(columnEl);

		let columnEl2 = createCardFlyer('Single Sided', 'Only printed on the front side.', 'doorhanger-single.svg', 'print_side', 'single', false, true,createDistributionAreas);
		rowEl2.append(columnEl2);

		let columnElBtnBlack = createBtnStepBack();
		getQuoteContent.append(columnElBtnBlack);

	} else if((inputDelivery.value == 'direct' || inputDelivery.value == 'mailbox') && inputCardType.value == 'postcard'){

		let columnEl = createCardFlyer('Double Sided', 'Printed on the front and back sides.', 'card-double.svg', 'print_side', 'double', true, true,createDistributionAreas);
		rowEl2.append(columnEl);

		let columnEl2 = createCardFlyer('Single Sided', 'Only printed on the front side.', 'card-single.svg', 'print_side', 'single', false, true,createDistributionAreas);
		rowEl2.append(columnEl2);

		let columnElBtnBlack = createBtnStepBack();
		getQuoteContent.append(columnElBtnBlack);

	} else if((inputDelivery.value == 'direct' || inputDelivery.value == 'mailbox') &&  inputCardType.value == 'flyer'){
		
		let columnEl = createCardFlyer('Double Sided', 'Printed on the front and back sides.', 'flyers-double.svg', 'print_side', 'double', true, true,createDistributionAreas);
		rowEl2.append(columnEl);

		let columnEl2 = createCardFlyer('Single Sided', 'Only printed on the front side.', 'flyers-single.svg', 'print_side', 'single', false, true,createDistributionAreas);
		rowEl2.append(columnEl2);

		let columnElBtnBlack = createBtnStepBack();
		getQuoteContent.append(columnElBtnBlack);
	}

	getQuoteContent.scrollIntoView();
}

/* *********************** CREATE DISTRIBUTION AREAS ************************** */
let delivery_type, print_type, print_size, print_side;

function createDistributionAreas(event) {
	let dataName = event.currentTarget.dataset.name;
	let dataValue = event.currentTarget.dataset.value;
	let inputElement = createInputHidden(dataName, dataValue);

	getQuoteForm.append(inputElement);

	getQuoteContent.innerHTML = '';	

	/* ************** CREATE HEADING ************** */
	let rowEl = createRowElement('row justify-content-center align-items-center');
	getQuoteContent.append(rowEl);

	let heading = createSectionHeading('Distribution Areas', `Let us know what areas you want to distribute your ${dataDeliveryValue} in. <div class="mt-3"></div>
	 Click on the areas below that you would like to have included in your distribution area. As you select the areas, they will be added to your list and your estimated price will be updated. To unselect and area, simply click on that area again.`);
	rowEl.append(heading);


	/* ************** CREATE ROW MAPS ************** */
	let row = document.createElement('div');
	row.className = 'row row-full text-white';
	getQuoteContent.append(row);

	let colMaps = document.createElement('div');
	colMaps.className = 'col-12 mb-5';
	row.append(colMaps);

	/* ************** CREATE MAPS ************** */
	var mapDelivery = document.createElement('div');
	mapDelivery.id = 'map';
	mapDelivery.style.height = '500px';
	mapDelivery.style.width = '100%';
	colMaps.append(mapDelivery);

	if (dataDeliveryValue == 'direct'){
		getApi('https://doormarketing.buildmy.ca/api/fullservicedetails.php', function(jsonData){
			let zoom = parseInt(jsonData.result.zoom);
			let lat = parseFloat(jsonData.result.lat);
			let lng = parseFloat(jsonData.result.lng);

			initMap(zoom, lat, lng);
			  
			configureDirectMap();
		});
	}
	if (dataDeliveryValue == 'mailbox'){
		getApi('https://doormarketing.buildmy.ca/api/fullservicedetails.php', function(jsonData){
			let zoom = parseInt(jsonData.result.zoom);
			let lat = parseFloat(jsonData.result.lat);
			let lng = parseFloat(jsonData.result.lng);

			initMap(zoom, lat, lng);

			configureMailboxMap();
		});
	}

	let pricingRow = document.createElement('div');
	pricingRow.className = 'row text-white mt-4 mt-lg-5';
	pricingRow.id = 'pricing';
	getQuoteContent.append(pricingRow);

	delivery_type = getQuoteForm.querySelector('input[name="delivery_type"]').value;
	print_type = getQuoteForm.querySelector('input[name="print_type"]').value;
	print_size = getQuoteForm.querySelector('input[name="print_size"]').value;
	print_side = getQuoteForm.querySelector('input[name="print_side"]').value;

	if (delivery_type === 'mailbox'){
		setPricing([], 0, 'To receive an estimated cost please draw around the areas you want to target.');
	} else {
		setPricing([], 0, 'To receive an estimated cost please select the areas you want to target.');
	}
	
	updateEstimateResultModal();
	updatePrintSummaryTable();

	if (delivery_type === 'mailbox'){
		modalDistributionAreaInstruction.show();
	} else {
		getQuoteContent.scrollIntoView();
	}
}

/* *********************** SEND FORMS ************************** */

/* *********************** FORM FINALIZE ESTIMATE ************************** */
let formEstimateFinalize = document.getElementById('formFinalizeEstimate'); 

formEstimateFinalize.addEventListener('submit', function(event) {
    event.preventDefault();

	if (!formEstimateFinalize.checkValidity()) {
        formEstimateFinalize.classList.add('form-validated')
        return false;
    }
	var formData = new FormData(formEstimateFinalize);
	
	 grecaptcha.ready(function() {
        grecaptcha.execute('6LdMLa4cAAAAALe3fZb0afV_C_TMjLxsMwqDqD_l', {action:'submit'}).then(function(token) {
            formData.append('wa-recaptcha', token);

            var req = new XMLHttpRequest();
            req.open('POST', 'https://mailer.apps.webarray.com/post/zXBdwiRenUvYswGLcambZeAqArzjHy0e', false);
            
            req.onreadystatechange = function() {

                if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
					
					let formElements = formEstimateFinalize.querySelectorAll('.form-control');
					formElements.forEach(el =>{
						el.value = '';
					})

					Swal.fire({
						icon: 'success',
						confirmButtonColor: '#396CE8',
						title: 'Success',
						text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
					}).then(function() {
						var modal = bootstrap.Modal.getInstance(document.getElementById('modalFinalizeEstimate'));
						modal.hide();
					});
                }	
            }
            req.send(formData);
        });
    });
});

/* *********************** MODALS FORMS ************************** */
var modalForms = document.getElementsByClassName('js-modal-form');
Array.from(modalForms).forEach((modalForm) => {

	modalForm.addEventListener('submit', function(event) {
	event.preventDefault();		
	
		if (!modalForm.checkValidity()) {
			modalForm.classList.add('form-validated')
			return false;
		}

		var formData = new FormData(modalForm);

		grecaptcha.ready(function() {
			grecaptcha.execute('6LdMLa4cAAAAALe3fZb0afV_C_TMjLxsMwqDqD_l', {action:'submit'}).then(function(token) {

				formData.append('wa-recaptcha', token);

				var req = new XMLHttpRequest();
				req.open('POST', 'https://mailer.apps.webarray.com/post/zXBdwiRenUvYswGLcambZeAqArzjHy0e', false);
				
				req.onreadystatechange = function() {

					if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
						modalForm.reset();
						modalForm.classList.add('d-none');
						modalForm.parentNode.querySelector('.form-success').classList.remove('d-none');
					}	
				}
				req.send(formData);
			});
		});
	});
});

var forms = document.getElementsByClassName('js-form');

Array.from(forms).forEach((form) => {

	form.addEventListener('submit', function(event) {
		event.preventDefault();
        
        if (!form.checkValidity()) {
            form.classList.add('form-validated')
            return false;
        }

        var formData = new FormData(form);

		grecaptcha.ready(function() {
			grecaptcha.execute('6LdMLa4cAAAAALe3fZb0afV_C_TMjLxsMwqDqD_l', {action:'submit'}).then(function(token) {

				formData.append('wa-recaptcha', token);

				var req = new XMLHttpRequest();
				req.open('POST', 'https://mailer.apps.webarray.com/post/zXBdwiRenUvYswGLcambZeAqArzjHy0e', false);
				
				req.onreadystatechange = function() {

					if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {

						let formElements = form.querySelectorAll('.form-control');
						formElements.forEach(el =>{
							el.value = '';
						})

						Swal.fire({
							icon: 'success',
                            confirmButtonColor: '#396CE8',
							title: form.dataset.title,
							text: form.dataset.message
						})
					}	
				}
				req.send(formData);
			});
		});
	});
});

var modalFinalizeEstimate = document.getElementById('modalFinalizeEstimate')
modalFinalizeEstimate.addEventListener('hidden.bs.modal', function (event) {
	let inputsHidden = formEstimateFinalize.querySelectorAll('input[type="hidden"]');
	inputsHidden.forEach(elInput =>{
		elInput.remove();
	})
})

function updateFinalizeEstimate() {
	let inputsHidden = getQuoteForm.querySelectorAll('input[type="hidden"]');
	
	inputsHidden.forEach(elInput =>{
		if (elInput.name.includes('[coordinates]')) {
			let inHidden = createInputHidden('delivery_areas[]', elInput.value)
			formEstimateFinalize.append(inHidden);
		} else if (!elInput.name.includes('[area]')) {
			let cloneInput = elInput.cloneNode(true);
			formEstimateFinalize.append(cloneInput);
		}
	})
	
}

/* *********************** UPDATE MODAL FORM ************************** */
function updateEstimateResultModal() {
let formEstimateResult = document.getElementById('formEstimateResult'); 
	
	/* *********************** ADD INPUTS HIDDEN TO MODAL FORM ************************** */
	formEstimateResult.append(createInputHidden('delivery_type', delivery_type))
	formEstimateResult.append(createInputHidden('print_type', print_type))
	formEstimateResult.append(createInputHidden('print_size', print_size))
	formEstimateResult.append(createInputHidden('print_side', print_side))
}

/* *********************** UPDATE TABLE ************************** */
function updateDistributionAreasTable(prices) {
	let tbody = document.getElementById('tableEstimateResult');
	
	tbody.innerHTML = '';

	for(let price in prices) {
		let tr = document.createElement('tr');
		tbody.append(tr);

		let tdPricing = document.createElement('td');
		tdPricing.className = 'col-8 p-3 p-sm-4';
		tdPricing.innerText =  prices[price].name;
		tr.append(tdPricing);

		let tdPrice = document.createElement('td');
		tdPrice.className = 'border-start text-center col-4 p-3 p-sm-4';
		tdPrice.innerText = prices[price].quantity;
		tr.append(tdPrice);
		
	}

}

function updatePrintSummaryTable() {

	let printSummaryTableDeliveryType = document.getElementById('estimateResultDeliveryType');
	if (delivery_type == 'direct'){
		printSummaryTableDeliveryType.innerText = 'Door To Door';
	} else{
		printSummaryTableDeliveryType.innerText = 'Canada Post';
	}
	
	let printSummaryTablePrintType = document.getElementById('estimateResultPrintType');
	if (print_type == 'postcard'){
		printSummaryTablePrintType.innerText = 'Postcard';
	} else if (print_type == 'doorhanger'){
		printSummaryTablePrintType.innerText = 'Door Hanger';
	} else {
		printSummaryTablePrintType.innerText = 'Flyer';
	}

	let printSummaryTablePrintSize = document.getElementById('estimateResultPrintSize');
	if (delivery_type == 'direct' || delivery_type == 'mailbox' ){
		if (print_type == 'doorhanger'){
			if (print_size == 'large'){
				printSummaryTablePrintSize.innerText = '4.5 x 11 Inches';
			} else{
				printSummaryTablePrintSize.innerText = '3.5 x 8.5 Inches';
			}
		}
		if (print_type == 'postcard') {
			if (print_size == 'large') {
				printSummaryTablePrintSize.innerText = '8.5 x 5.5 Inches';
			} else {
				printSummaryTablePrintSize.innerText = '4 x 7 Inches';
			}
		}
		if (print_type == 'flyer') {
			if (print_size == 'large') {
				printSummaryTablePrintSize.innerText = '8.5 x 11 Inches';
			} else {
				printSummaryTablePrintSize.innerText = '8.5 x 5.5 Inches';
			}
		}
	}

	let printSummaryTablePrintSide = document.getElementById('estimateResultPrintSide');
	if (print_side == 'single'){
		printSummaryTablePrintSide.innerText = 'Single Sided';
	} else {
		printSummaryTablePrintSide.innerText = 'Double Sided';
	}
}

let modalDistributionAreaInstructionContainer = document.getElementById('modalDistributionAreaInstruction');
let modalDistributionAreaInstruction = new bootstrap.Modal(modalDistributionAreaInstructionContainer, {});
modalDistributionAreaInstructionContainer.addEventListener('shown.bs.modal', function (event) {
	document.getElementById('map').scrollIntoView();
})

function setPricing(prices, priceSum, priceText) {
	
	let row = document.getElementById('pricing');
	row.innerHTML = '';

	/* ************** CREATE TABLE ************** */
	let colTable = document.createElement('div');
	row.append(colTable);

	
	let table = document.createElement('table');
	table.className = 'table text-white rounded-5 rounded-bottom dark-table';
	table.style.backgroundColor = '#1f1f4a';
	colTable.append(table);

	let thead = document.createElement('thead');
	table.append(thead);

	let tr = document.createElement('tr');
	thead.append(tr);

	let th = document.createElement('th');
	th.innerText = 'Area';
	tr.append(th);

	let th2 = document.createElement('th');
	tr.append(th2);


	/* ************** CREATE PRICING ************** */

	let colPricing = document.createElement('div');
	row.append(colPricing);

	let pricingTitle = document.createElement('h2');
	pricingTitle.className = 'fw-semibold text-xll my-3 mt-lg-0 mb-lg-4';
	pricingTitle.innerText = 'Pricing';
	colPricing.append(pricingTitle);

	let pricingDesc = document.createElement('p');
	pricingDesc.className = 'lh-sm text-md';
	pricingDesc.innerText = priceText;
	colPricing.append(pricingDesc);

	let pricingPrice = document.createElement('h2');
	pricingPrice.className = 'text-primary fw-bold text-center py-2 border rounded-2 border-dark-primary my-4';
	pricingPrice.innerHTML = priceSum;
	colPricing.append(pricingPrice);

	let pricingButton = document.createElement('button');
	pricingButton.className = 'btn btn-purple w-100 d-flex justify-content-center align-items-center lh-base btn-finalize-estimate btn-animation-right';
	pricingButton.innerHTML = 'Finalize My Estimate';
	pricingButton.setAttribute('onclick', 'updateFinalizeEstimate()');
	pricingButton.setAttribute('type', 'button');
	pricingButton.setAttribute('data-bs-toggle', 'modal');
	pricingButton.setAttribute('data-bs-target', '#modalFinalizeEstimate');
	colPricing.append(pricingButton);

	
	let pricingButtonIcon = document.createElement('i');
	pricingButtonIcon.className = 'icon-arrow-right-1 ms-2 btn-animation-arrow-right d-none d-sm-inline-block';
	pricingButton.append(pricingButtonIcon);


	let tbody = document.createElement('tbody');

	
	if (dataDeliveryValue == 'direct'){
		tbody.id = 'idTableDirect';
		colTable.className = 'col-12 col-lg-7 pe-lg-4';
		th.className = 'col-8 p-3 p-sm-4';
		th2.className = 'col-4 p-3 p-sm-4 text-center';
		th2.innerText = 'Houses';
		colPricing.className = 'col-12 col-lg-5 ps-lg-4 text-center text-lg-start'

	}
	if (dataDeliveryValue == 'mailbox'){
		tbody.id = 'idTableMailbox';
		colTable.className = 'col-12 col-lg-5 pe-lg-4';
		th.className = 'col-7 p-3 p-sm-4';
		th2.className = 'col-5 p-3 p-sm-4 text-center';
		th2.innerText = 'Mailboxes';
		colPricing.className = 'col-12 col-lg-7 ps-lg-4 text-center text-lg-start'
		
	}

	table.append(tbody);

	createTableQuote(prices, tbody);

	return row;
}

/* *********************** MAPS ************************** */
let map;

function initMap(zoom, lat, lng) {
	var mapConf = {
		zoom: zoom,
		center: { lat: lat, lng: lng },
		options: {
			/* gestureHandling: 'cooperative' */
			scrollwheel: false,
			streetView: false,
			streetViewControl: false
			/* noClear: true */
		},
		mapTypeControl: true,
		mapTypeControlOptions: {
		style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
		mapTypeIds: ["webarray_light", "webarray_dark", "satellite"]
		}
	};

	map = new google.maps.Map(document.getElementById("map"), mapConf);

	const webarrayLightMapType = new google.maps.StyledMapType([], { name: "Light" });
	map.mapTypes.set("webarray_light", webarrayLightMapType);

	const webarrayDarkMapType = new google.maps.StyledMapType(mapStylesArray, { name: "Dark" });
	map.mapTypes.set("webarray_dark", webarrayDarkMapType);
  	map.setMapTypeId("webarray_dark");
	  
}

function configureDirectMap() {
	
	map.data.loadGeoJson(
		"https://doormarketing.buildmy.ca/api/fullserviceareas.php"
	);
	
	map.data.setStyle((feature) => {
		let color = "gray";

		if (feature.getProperty("isColorful")) {
		color = feature.getProperty("color");
		}
		return /** @type {!google.maps.Data.StyleOptions} */ {
		fillColor: color,
		strokeColor: color,
		strokeWeight: 2,
		};
	});

	map.data.addListener("click", (event) => {

		let areaId = event.feature.getProperty('code');
		  if (event.feature.getProperty('isColorful') === true) {
			event.feature.setProperty('isColorful', false);
			
			let input = document.querySelector(`input[name="delivery_areas[]"][value="${areaId}"]`);
			input.remove();

		}
		else {
			event.feature.setProperty('isColorful', true);
			
			let inputHidden = document.createElement('input');
			inputHidden.type = 'hidden';
			inputHidden.value = areaId;
			inputHidden.name = 'delivery_areas[]';
			getQuoteForm.append(inputHidden);

			
		}
		sendGetQuoteForm(function(pricingResult) {

			let prices = pricingResult.result.list;
			let cost = pricingResult.result.cost;
			let text = pricingResult.result.text;

			let pricingRow = setPricing(prices, cost, text);
			getQuoteContent.append(pricingRow);

			updateDistributionAreasTable(prices);
		});
	});
}

var InfoWindow;

function createCenterControl() {
	let controlButton = document.createElement("button");

	// Set CSS for the control.
	
	controlButton.id = 'btn-map-marked-area';
	controlButton.innerHTML = '<span class="icon-brush-4 me-2 fw-semibold"></span>Outline <span class="d-none d-lg-inline-block"> Desired</span> Area';
	controlButton.title = "Click to mark an area on the map";
	controlButton.type = "button";

	// Setup the click event listeners: simply set the map to Chicago.
	controlButton.addEventListener("click", () => {
		if (controlButton.classList.contains('active')){
			mailboxDrawingManager.setDrawingMode(null);
		} else {
			mailboxDrawingManager.setDrawingMode(google.maps.drawing.OverlayType.POLYGON);
		}
		
		controlButton.classList.toggle('active');
	});
	return controlButton;
}

let mailboxDrawingManager;
let createdPolygonId;

function configureMailboxMap() {
	
	mailboxDrawingManager = new google.maps.drawing.DrawingManager({ drawingControl: false });
	mailboxDrawingManager.setMap(map);

	// Create the DIV to hold the control.
	const centerControlDiv = document.createElement("div");
	// Create the control.
	const centerControl = createCenterControl();

	// Append the control to the DIV.
	centerControlDiv.appendChild(centerControl);
	map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);

	  let area_number = 0;

	  google.maps.event.addListener(mailboxDrawingManager, 'polygoncomplete', function (polygon) {

		let coordinates = polygon.getPath().getArray();

		if(coordinates.length < 3){
			polygon.setMap(null);
			return;
		}
		++area_number;

		polygon._id = area_number;
		polygon._name = `Custom Area ${polygon._id}`;
		polygon._quantity = 0;

		polygon.setEditable(true);
		polygonArray.push(polygon);

		if (InfoWindow)
			InfoWindow.close();

		InfoWindow = new google.maps.InfoWindow({
			content: " "
		});

		InfoWindow.setPosition(polygon.getPath().getAt(0));
		
		createdPolygonId = area_number;

		let coorHiddenInput = document.createElement('input');
		coorHiddenInput.type = 'hidden';
		coorHiddenInput.value = coordinates;
		coorHiddenInput.name = 'delivery_polygons['+area_number+'][coordinates]';
		getQuoteForm.append(coorHiddenInput);
		
		
		let calculated_area = google.maps.geometry.spherical.computeArea(polygon.getPath());
			calculated_area = calculated_area/1000000;

		let areaHiddenInput = document.createElement('input');
		areaHiddenInput.type = 'hidden';
		areaHiddenInput.value = calculated_area;
		areaHiddenInput.name = 'delivery_polygons['+area_number+'][area]';
		getQuoteForm.append(areaHiddenInput);

		google.maps.event.addListener(polygon, 'click', function (event) {
			setInfoWindowContent(polygon);
			InfoWindow.setPosition(event.latLng);
			InfoWindow.open(map, this);
		}); 

		google.maps.event.addListener(polygon.getPath(), 'insert_at', function(index, obj) {
			updatePolygonNewCoordinates(polygon, polygon._id);
			InfoWindow.close();

	 	});
		google.maps.event.addListener(polygon.getPath(), 'set_at', function(index, obj) {
			updatePolygonNewCoordinates(polygon, polygon._id);
			InfoWindow.close();

	 	});
		 

		sendGetQuoteForm(function(pricingResult) {

			let prices = pricingResult.result.list;
			let cost = pricingResult.result.cost;
			let text = pricingResult.result.text;

			let pricingRow = setPricing(prices, cost, text);
			getQuoteContent.append(pricingRow);

			polygonArray.forEach(polygonEl =>{
				prices.forEach(price => {
					if (price.name == polygonEl._name){
						polygonEl._quantity = price.quantity;
					}

					if (polygonEl._id == createdPolygonId){
						setInfoWindowContent(polygon);
						InfoWindow.open(map, this);
					}
				});
			})

			updateDistributionAreasTable(prices);			
		});

		document.getElementById('btn-map-marked-area').classList.remove('active');
		mailboxDrawingManager.setOptions({
			drawingMode: null
		  });
	});
}

function setInfoWindowContent(polygon){
	let quantitySpan = `<span class="icon-house fw-bold text-xxs text-gray"></span> <span class="fw-bold text-gray">${polygon._quantity}</span> <span class="text-gray">Mailboxes</span>`;

	if(polygon._quantity == 0){
		quantitySpan = '';
	}

	InfoWindow.setContent('<p class="fw-semibold my-3 text-center text-black text-sm">Custom Area <b>'+ polygon._id +'</b></p>' +
		quantitySpan +
		`<button class="btn btn-link float-end p-0" type="button" onclick="deletingPolygon(${polygon._id})"><span class="icon-trash fw-bold text-xxs" style="color: #af1109"></span>
		</button>`
	);
}

function updatePolygonNewCoordinates(polygon, polygonId){
	let newCoordinates = polygon.getPath().getArray();
	let hiddenInputCoord = document.querySelector('[name="delivery_polygons['+polygonId+'][coordinates]"]');
	hiddenInputCoord.value = newCoordinates;

	var new_calculated_area = google.maps.geometry.spherical.computeArea(polygon.getPath());
	new_calculated_area = new_calculated_area/1000000;
	let hiddenInputArea = document.querySelector('[name="delivery_polygons['+polygonId+'][area]"]');
	hiddenInputArea.value = new_calculated_area;

	sendGetQuoteForm(function(pricingResult) {

	let prices = pricingResult.result.list;
	let cost = pricingResult.result.cost;
	let text = pricingResult.result.text;
		let pricingRow = setPricing(prices, cost, text);
		prices.forEach(price => {

			polygonArray.forEach(polygonEl =>{
				if (price.name == polygonEl._name){
					polygonEl._quantity = price.quantity;
				}
			})
			
		});

		getQuoteContent.append(pricingRow);
		updateDistributionAreasTable(prices);
	});
}

var polygonArray = [];

function deletingPolygon(id){
	
	for (let index = 0; index <polygonArray.length; index++) {
		const polygon = polygonArray[index];
		if(polygon._id == id) {
			polygon.setMap(null);

			let inputDeliveryPolygonArea = document.querySelector(`input[name="delivery_polygons[${id}][area]"]`);
			inputDeliveryPolygonArea.remove();
			let inputDeliveryPolygonCoor = document.querySelector(`input[name="delivery_polygons[${id}][coordinates]"]`);
			inputDeliveryPolygonCoor.remove();

			InfoWindow = new google.maps.InfoWindow({
				content: " "
			});

			sendGetQuoteForm(function(pricingResult) {
				let prices = pricingResult.result.list;
				let cost = pricingResult.result.cost;
				let text = pricingResult.result.text;
		
				let pricingRow = setPricing(prices, cost, text);
				getQuoteContent.append(pricingRow);

				updateDistributionAreasTable(prices);
			});
		}
	}
}

window.initMap = initMap;

var modalEstimateResult = document.getElementById('modalEstimateResult');
modalEstimateResult.addEventListener('hidden.bs.modal', function (event) {
var finalizeEstimateModal = new bootstrap.Modal(modalFinalizeEstimate, {});
	finalizeEstimateModal.show();
	updateFinalizeEstimate();
})

/* *********************** AOS ************************** */
AOS.init({
	// Global settings:
	disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
	initClassName: 'aos-init', // class applied after initialization
	animatedClassName: 'aos-animate', // class applied on animation
	useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
	

	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 120, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 400, // values from 0 to 3000, with step 50ms
	easing: 'ease', // default easing for AOS animations
	once: true, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});