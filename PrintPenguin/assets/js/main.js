/* var recommendationProducts = menu.getRecommendations(); */

let mainMenuRow = document.getElementById('mainMenuRow');
let mainMenuNav = document.getElementById('mainMenuNav');


/* *********************************************** */
/********************* STICKY MENU *****************/
/* *********************************************** */
let navbar = document.getElementById('js-navbar');
if(navbar){
	let stickyOffset = navbar.offsetTop + navbar.offsetHeight;

	window.addEventListener('scroll', () => {
		if (window.pageYOffset >= stickyOffset) {
			navbar.classList.add('sticky');
		}  else  {
			navbar.classList.remove('sticky');
		}
	})
}




/* *********************************************** */
/********************* OFFCANVAS *******************/
/* *********************************************** */
let offcanvasElementList = [].slice.call(document.querySelectorAll('.offcanvas'))
let offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
  return new bootstrap.Offcanvas(offcanvasEl);
})




/* *********************************************** */
/********************* MAIN MENU *******************/
/* *********************************************** */
let btnBurger = document.getElementById('btnBurger');
let modalBackdrop = document.querySelector('.modal-backdrop');
let searchInput = document.getElementById('search-input');
let mainMenu = document.getElementById('mainMenu');

if(mainMenu){
	mainMenu.addEventListener('show.bs.collapse', function (e) {
		if (e.target.id == 'mainMenu') {
			document.body.classList.add('body-backdrop');
			modalBackdrop.classList.remove('d-none');
			btnBurger.classList.add('active');
			/* updateMenuResults(recommendationProducts, 'Recommended Products'); */
		}
	});
	mainMenu.addEventListener('hidden.bs.collapse', function (e) {
		if (e.target.id == 'mainMenu') {
			searchInput.value = '';

			updateSearchData();
		}
	});
}




document.addEventListener('click', function (event) {
	// if the clicked element isn't child of the navbar, you must close it if is open
	if(mainMenu){
		if (!event.target.closest('#mainMenu') && !event.target.closest('.autocomplete') && document.getElementById('mainMenu').classList.contains('show')) {
			document.getElementById('btnBurger').click();
		}
	}
});




/* *********************************************** */
/*********** CHECK CONTAINER HEIGHT MENU ***********/
/* *********************************************** */
let checkContainerHeight = document.querySelectorAll('.js-check-container-height');

checkContainerHeight.forEach((elem) =>{
  let menuCategoryLink = elem.parentElement.querySelector('.main-category-card-list');

  if (elem.offsetHeight >= 600){
    menuCategoryLink.classList.add('main-category-card-big');
  }
});




/* *********************************************** */
/*************** LANGUAGE DROPDOWN *****************/
/* *********************************************** */
function selectLanguage(el) {

	let selectedLangImgUrl;
	let allLinks = el.closest('.lang-content').querySelectorAll('a');

	allLinks.forEach((link) => {
		link.classList.remove('active');
	});

	el.classList.add('active');

	if(el.classList.contains('language-link')){

		selectedLangImgUrl = el.querySelector('img').getAttribute('src');
		
		/* SELECTED LANG */
		
		document.querySelectorAll('.language-badges-icon').forEach((badgesIcon) =>{

			badgesIcon.style.backgroundImage = `url('${selectedLangImgUrl}')`; 

		});
	}
}


function selectCurrency(el) {

	let selectedCurrenImgUrl;
	let selectedNameLang = document.getElementById('selectedNameLang');
	let langContent = el.closest('.lang-content');
	let allLinks = langContent.querySelectorAll('a');

	allLinks.forEach((link) => {
		link.classList.remove('active');
	});

	el.classList.add('active');

	if(el.classList.contains('currency-link')){

		selectedCurrenImgUrl = el.querySelector('img').getAttribute('src');
		
		/* SELECTED CURRENCY */
		let selectedCurrenLinks = document.querySelectorAll('.selected-currency');
		
		selectedCurrenLinks.forEach((selectedlink) =>{

			let currencyIcon = selectedlink.querySelector('.language-settings-img');

			currencyIcon.style.backgroundImage = `url('${selectedCurrenImgUrl}')`; 

			selectedNameLang.innerHTML = el.innerText;

		});
	}
}





/* *********************************************** */
/************* MODAL GET A DESIGN QUOTE ************/
/* *********************************************** */
let modalGetADesignQuote = document.getElementById('modalGetADesignQuote');
let jsModalGetDesignDropZone = document.getElementById('jsModalGetDesignDropZone');
let jsModalGetDesignTextarea = document.getElementById('jsModalGetDesignTextarea');

if (modalGetADesignQuote){

	let radios = modalGetADesignQuote.querySelectorAll('input[type=radio][name="Upload_Own_Design"]');

	Array.prototype.forEach.call(radios, function(radio) {
		radio.addEventListener('change', changeHandlerGetDesignModal);
	});
	
}

function changeHandlerGetDesignModal() {

   if ( this.value === 'true' ) {
	
	jsModalGetDesignTextarea.querySelector('textarea').value='';
	jsModalGetDesignTextarea.classList.add('d-none');
	jsModalGetDesignDropZone.classList.remove('d-none');

   } else if ( this.value === 'false' ) {
	jsModalGetDesignDropZone.classList.add('d-none');
	jsModalGetDesignTextarea.classList.remove('d-none');
     
   }  
}




/* *********************************************** */
/********************** DROP ZONE ******************/
/* *********************************************** */
document.querySelectorAll('.drop-zone-input').forEach((inputElement) => {
	addDropZoneEvents(inputElement);
});



function addDropZoneEvents(inputElement, overwrite = false) {
	let dropZoneElement = inputElement.closest('.drop-zone');

	if (dropZoneElement.classList.contains('js-overwrite')){
		overwrite = true;
	}

	dropZoneElement.addEventListener('click', (e) => {
		inputElement.click();
	});

	inputElement.addEventListener('change', (e) => {
		if (inputElement.files.length) {
			updateThumbnail(dropZoneElement, inputElement.files[0], overwrite);
		}
	});

	dropZoneElement.addEventListener('dragover', (e) => {
		e.preventDefault();
		dropZoneElement.classList.add('drop-zone-over');
	});

	['dragleave', 'dragend'].forEach((type) => {
		dropZoneElement.addEventListener(type, (e) => {
			dropZoneElement.classList.remove('drop-zone-over');
		});
	});

	dropZoneElement.addEventListener('drop', (e) => {
		e.preventDefault();

		if (e.dataTransfer.files.length) {
			inputElement.files = e.dataTransfer.files;
			updateThumbnail(dropZoneElement, e.dataTransfer.files[0], overwrite);
		}

		dropZoneElement.classList.remove('drop-zone-over');
	});
}



function updateThumbnail(dropZoneElement, file, overwrite) {

	dropZoneElement.classList.add('drop-zone-with-content');

	if (overwrite) {

		setInterval(resultUploadFileSuccess(dropZoneElement.querySelector('.drop-zone-prompt')), 2000);
		
	} else{

		let dropZoneContainer = document.querySelector('.drop-zone-container');

		if (!dropZoneContainer.querySelector('.drop-zone:not(.drop-zone-with-content)')) {
			
			let fileData = addUploadedFileData(file.name);
	
			dropZoneContainer.append(fileData);
		}
	}

}



function addUploadedFileData(name) {

	let row = createNewElement('div', 'js-upload-file-name-row upload-file-name-row d-flex justify-content-between align-items-center py-4'); 

	let colLeft = createNewElement('div', 'd-flex align-items-center');

	let icon = createNewElement('span', 'fi-rr-assept-document lh-1 me-2');
	colLeft.append(icon);

	let nameFile = createNewElement('span', 'text-sm fw-normal upload-file-name', name);
	colLeft.append(nameFile);

	row.append(colLeft);
	
	let removeBtn = createCircleIconBtnAnimation('btn-red', 'wa-wa-remove', 'Remove');
	removeBtn.classList.add('text-xxs');
	removeBtn.onclick = uploadedFileRemove;
	row.append(removeBtn);

	return row;

}




function uploadedFileRemove(event) {

    event.currentTarget.closest('.js-upload-file-name-row').remove(); /* todo add remove input file */
}





function resultUploadFileSuccess(container) {
    
	container.innerHTML = '';

	let uploadingFile = createUploadingFile();
	container.append(uploadingFile);

}




function createUploadingFile() {
	
	let div = createNewElement('div', 'text-center');

	let divImg = createNewElement('div', 'drop-zone-prompt-img');
	divImg.style.backgroundImage = `url('../../assets/img/icons/folder-with-files.svg')`;
	div.append(divImg);

	let title = createNewElement('span', 'drop-zone-prompt-title', 'Uploadin file');
	div.append(title);

	let progress = createNewElement('div', 'progress');
	div.append(progress);

	let progressBar = createNewElement('div', 'progress-bar');
	progressBar.setAttribute('role', 'progressbar');
	progressBar.setAttribute('aria-valuemin', '0');
	progressBar.setAttribute('aria-valuemax', '100');
	progressBar.setAttribute('aria-valuenow', '75');
	progress.append(progressBar);

	let titleProgress = createNewElement('div', 'text-drab text-xs fw-normal text-center mt-1');
	div.append(titleProgress);

	setTimeout(progressBarAnimate(progressBar, titleProgress, div), 4000);

	return div;

}




function progressBarAnimate(progress, title, container) {
	
    let width = 0;
    let increment = 1;
    let duration = 50; 

    let intervalId = setInterval(() => {
        width += increment;
        progress.style.width = `${width}%`;
        progress.setAttribute('aria-valuenow', width);
		title.innerHTML = `${width}%`;

        if (width >= 101) {
          clearInterval(intervalId);
		  uploadingFileDone(container);
        }
    }, duration);
}




function uploadingFileDone(container) {

	container.innerHTML = '';

	let doneIcon = createNewElement('div', 'circle-loader');
	container.append(doneIcon);

	let checkMark = createNewElement('div', 'checkmark draw');
	doneIcon.append(checkMark)

	let title = createNewElement('span', 'drop-zone-prompt-title', 'Upload Complete');
	container.append(title);
	
	setTimeout(showCheckmark(doneIcon), 3000);
	setTimeout(hideUploadFileModal, 2000);

}





let modalUploadFile = document.getElementById('modalUploadFile');

if(modalUploadFile) {

	modalUploadFile.addEventListener('show.bs.modal', function (event) {

		let dropZonePrompt = modalUploadFile.querySelector('.drop-zone-prompt');
		dropZonePrompt.innerHTML = '';
		
		let prompt = createDropZonePrompt();
		dropZonePrompt.append(prompt);

	})
}




function createDropZonePrompt() {
	
	let div = createNewElement('div', 'text-center');

	let promptImg = createNewElement('div', 'drop-zone-prompt-img');
	div.append(promptImg);

	let title = createNewElement('span', 'drop-zone-prompt-title', 'Drag & Drop Your File');
	div.append(title);

	let subtitle = createNewElement('span', 'drop-zone-prompt-subtitle', 'or');
	div.append(subtitle);

	let button = createNewElement('button', 'btn btn-primary d-block m-auto', 'Browse Files');
	button.type = 'button';
	div.append(button);

	return div;
}





function hideUploadFileModal() {
	let bsModalUploadFile = bootstrap.Modal.getInstance(modalUploadFile);
	
	bsModalUploadFile.hide();

  	uploadFileWihtModal(modalUploadFile.closest('.modal'));

}





function showCheckmark(el) {
	el.firstChild.style.display = 'block';
}






/* *********************************************** */
/*********** SAVE FOR LATER BUTTON *****************/
/* *********************************************** */
let savedProductBtn = document.getElementById('js-saved-product-btn');

if(savedProductBtn){

	let heartIconSaved = createNewElement('span', 'heart-icon heart-outline-icon me-2');
	savedProductBtn.append(heartIconSaved);

	let titleSaveProduct = createNewElement('span', '', 'Save For Later');
	savedProductBtn.append(titleSaveProduct);


	savedProductBtn.addEventListener('click', (event) => {

		let btn = event.target.parentElement;

		btn.classList.toggle('active');

		if(btn.classList.contains('active')){

			titleSaveProduct.innerHTML = 'Saved For Later';

			heartIconSaved.classList.remove('heart-outline-icon');
			heartIconSaved.classList.add('heart-black-icon');

		} else {

			titleSaveProduct.innerHTML = 'Save For Later';

			heartIconSaved.classList.add('heart-outline-icon');
			heartIconSaved.classList.remove('heart-black-icon');

		}


	})
}





/* *********************************************** */
/*************** img BACKROUND SRC **************/
/* *********************************************** */
let listimg = document.getElementsByClassName('js-image-src');

if(listimg){
	for (let i = 0; i < listimg.length; i++) {
		let src = listimg[i].getAttribute('data-image-src');
		listimg[i].style.backgroundImage="url('" + src + "')";
	}
}

  


/* *********************************************** */
/***************** CREAT NEW ELEMENT ***************/
/* *********************************************** */
function createNewElement(tag, className='', text=''){
    let el = document.createElement(tag);
    el.className = className;
    el.innerHTML = text;
    return el;
}
 




/* *********************************************** */
/**************** VALIDATION FORMS *****************/
/* *********************************************** */
function onsubmitFormValidate(event) {
	if (!event.currentTarget.checkValidity()) {
	  event.preventDefault()
	  event.stopPropagation()
	}

	event.currentTarget.classList.add('was-validated');
}

/* *********************************************** */
/**************** ACCOUNT MENU TAB *****************/
/* *********************************************** */
if(window.location.hash) { 
	showTabByName(window.location.hash);
}

function showTabByName(tabLink) {
	let tabId = tabLink + '-link';
	let tabEl = document.querySelector(tabId);
	

	if (tabEl && tabEl.getAttribute('role') == 'tab'){
		let tab = new bootstrap.Tab(tabEl);
		tab.show();

		setTimeout(function() {
			let header = document.querySelector('header');
			header.scrollIntoView({block: 'center'});
		  }, 1);
	}
	
}




/* *********************************************** */
/************** CREATE PRODUCT CARD ****************/
/* *********************************************** */
function createProductCard(uuid, product, cardType = ''){

	let productItem = createNewElement('a', 'btn-link card-item');
	productItem.href = product.url;
	productItem.id = uuid;
  
	let productCard = createNewElement('div', 'card-product');
  
	if (cardType == 'product-menu'){
		productCard.classList.add('card-product-menu');
	}
  
	if (product.color == 'grey'){
		productCard.classList.add('grey');
	} else if (product.color == 'yellow'){
		productCard.classList.add('cream');
	} else if (product.color == 'blue'){
		productCard.classList.add('azure');
	} else if (product.color == 'purple'){
		productCard.classList.add('purple');
	} else{
		productCard.classList.add('default-azure-color');
	}
  
	productItem.append(productCard);
  
	let productCardImg = createNewElement('div', 'card-product-image');
	productCardImg.style.backgroundImage = `url('${product.src}')`;
	productCard.append(productCardImg);
  
	let productBody = createNewElement('div', 'card-product-body');
	productCard.append(productBody);
  
	let productBodyBlock = createNewElement('div', 'position-relative');
	productBody.append(productBodyBlock);
  
	let productName = createNewElement('div', 'text-xs mb-3 fw-normal d-block lh-sm product-name', product.name);
	productBodyBlock.append(productName);
  
	let productPrice = createNewElement('div', 'text-xxs lh-sm d-block text-gray fw-light', `Starting at ${product.content}`);
	productBodyBlock.append(productPrice);
  
	return productItem;
}




/* *********************************************** */
/************* CREATE SAVED CREDIT CARDS ***********/
/* *********************************************** */
function createCreditCard(id = '', cardNumberVisa = '4111 1111 1111 1111', cardType = 'mastercard', cardColor = 'orange', cardHolderName = 'JOHN SMITH', expDateMonth = '08', expDateYear = '23', cardCvv = 'XXX') {
    let lastFourNumb = cardNumberVisa.slice(-4);
    let maskedNumb = cardNumberVisa.slice(0,-4).replace(/\d/g,'*');

    let cardItem = createNewElement('div', 'saved-credit-card');
	cardItem.id = id;
	
    /* CARD FRONT */
    let cardFront = createNewElement('div', 'card-front');
    cardItem.append(cardFront);

    let cardBack = createNewElement('div', 'card-back p-0');
    cardItem.append(cardBack);

   
    if (cardColor == 'orange') {
        cardFront.classList.add('saved-credit-card-mastercard-orange');
        cardBack.classList.add('saved-credit-card-mastercard-orange');
    } else if (cardColor == 'blue') {
        cardFront.classList.add('saved-credit-card-mastercard-blue');
        cardBack.classList.add('saved-credit-card-mastercard-blue');
    } else if (cardColor == 'red') {
        cardFront.classList.add('saved-credit-card-mastercard-red');
        cardBack.classList.add('saved-credit-card-mastercard-red');
    }

    let cardLogoDiv = createNewElement('div');
    cardFront.append(cardLogoDiv);

    let cardLogo = createNewElement('span', 'js-image-src saved-card-logo');

    if (cardType == 'mastercard') {
        cardLogo.classList.add('mastercard');
    } else if (cardType == 'visa') {
        cardLogo.classList.add('visa');
    }

    cardLogoDiv.append(cardLogo);

    let numbCardDiv = createNewElement('div', 'card-number-container');
    cardFront.append(numbCardDiv);

    let numbCardTitle = createNewElement('span', 'text-xxs fw-semibold', 'Card number');
    numbCardDiv.append(numbCardTitle);

    let numbCard = createNewElement('p', 'saved-card-number fw-bold', maskedNumb);
    numbCardDiv.append(numbCard);
    
    let lastNumbCard = createNewElement('span', 'last-number-card', lastFourNumb);
    numbCard.append(lastNumbCard);


    let cardInfoContainer = createNewElement('div', 'd-flex justify-content-between');
    cardFront.append(cardInfoContainer);

    let cardInfoLeft = createNewElement('div');
    cardInfoContainer.append(cardInfoLeft);

    let cardInfoLeftTitle = createNewElement('span', 'text-xxs fw-semibold', 'CARDHOLDER NAME');
    cardInfoLeft.append(cardInfoLeftTitle);

    let userName = createNewElement('div', 'saved-card-name fw-bold', cardHolderName);
    cardInfoLeft.append(userName);

    let cardInfoRight = createNewElement('div');
    cardInfoContainer.append(cardInfoRight);

    let cardInfoRightTitle = createNewElement('span', 'text-xxs fw-semibold', 'EXP DATE');
    cardInfoRight.append(cardInfoRightTitle);

    let cardInfoRightValidThru = createNewElement('div', 'd-flex justify-content-center');
    cardInfoRight.append(cardInfoRightValidThru);

    let validThruMonth = createNewElement('div', 'valid-thru valid-thru-month fw-bold', expDateMonth);
    cardInfoRightValidThru.append(validThruMonth);

    let slash = createNewElement('div', 'valid-slash', '/');
    cardInfoRightValidThru.append(slash);


    let validThruYear = createNewElement('div', 'valid-thru valid-thru-year fw-bold', expDateYear);
    cardInfoRightValidThru.append(validThruYear);


    /* CARD BACK */

    let cardBackLineBlack = createNewElement('span', 'card-back-line-black');
    cardBack.append(cardBackLineBlack);

    let cardBackContent = createNewElement('div', 'card-back-content');
    cardBack.append(cardBackContent);

    let cardBackLineWhite = createNewElement('span', 'card-back-line-white');
    cardBackContent.append(cardBackLineWhite);

    let cardBackCvvNum = createNewElement('span', 'card-back-cvv-number');
    cardBackCvvNum.innerHTML = cardCvv;
    cardBackContent.append(cardBackCvvNum);

    return cardItem;
}




/* *********************************************** */
/** SHOW GLOBAL MODAL ARE YOU SURE TO REMOVE ******/
/* *********************************************** */
let bsAreYouSureGlobalModal;
let areYouSureGlobalModal = document.getElementById('areYouSureGlobalModal'); 

if(areYouSureGlobalModal){
	bsAreYouSureGlobalModal = new bootstrap.Modal(areYouSureGlobalModal);

}

function createAreYouSureGlobalModal(title, nameMainBtn, nameCloseBtn){

	let areYouSureGlobalModalTitle = document.getElementById('areYouSureGlobalModalTitle');
	areYouSureGlobalModalTitle.innerHTML = title;

	let areYouSureGlobalModalMainBtn = document.getElementById('areYouSureGlobalModalMainBtn');
	areYouSureGlobalModalMainBtn.innerText = nameMainBtn;

	let areYouSureGlobalModalCloseBtn = document.getElementById('areYouSureGlobalModalCloseBtn');
	areYouSureGlobalModalCloseBtn.innerText = nameCloseBtn;

}





/* *********************************************** */
/**************** FORM MAIN EMAIL ******************/
/* *********************************************** */
var formEmailInput = document.getElementById('formEmailInput');
if(formEmailInput){
	var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	formEmailInput.addEventListener('keydown', ev => {

		if (emailRegex.test(ev.target.value)) {

			document.querySelector('.form-mail-button').addEventListener('click', (ev) => {
				ev.currentTarget.classList.add('active'); /* todo */
			});

			return true;
	  
		  } else {
			return false;
		  }
	})
}


	

/* *********************************************** */
/********************** AOS ************************/
/* *********************************************** */
function initAos() {
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
}







/* *********************************************** */
/**************** GET PAGE CONTENT *****************/
/* *********************************************** */
function getPageContentXhr(url, element){

	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.withCredentials = false;

	xhr.onload = function() {
		element.innerHTML = xhr.responseText; 
		
		if(element.id === 'loginContent' || element.id === 'registerContent'){

			addEventForgotPasswordOpenModal(element);

			var forms = element.querySelectorAll('.needs-validation');

			// Loop over them and prevent submission
			Array.prototype.slice.call(forms)
			.forEach(function (form) {
				form.addEventListener('submit', onsubmitFormValidate, false)
			})
		}
	};
	xhr.send();

	
}




/* *********************************************** */
/************ CLOSE PAGE LOGIN CONTENT *************/
/* *********************************************** */
function closeLoginContentBtn(event){

	let content = event.parentElement.closest('.full-screen-content');
	content.innerHTML = '';
	content.classList.remove('d-block');
	document.body.classList.remove('overflow-hidden');
}





let loginContent = document.getElementById('loginContent');
let registerContent = document.getElementById('registerContent');
let multipleAccountsContent = document.getElementById('multipleAccountsContent');
/* *********************************************** */
/*************** SHOW REGISTER CONTENT *************/
/* *********************************************** */
function showRegisterContent(){

	loginContent.innerHTML = '';
	loginContent.classList.remove('d-block');
	registerContent.classList.add('d-block');
	document.body.classList.add('overflow-hidden');

	getPageContentXhr('/view/modal/register.php', registerContent);

}



/* *********************************************** */
/***************** SHOW LOGIN CONTENT **************/
/* *********************************************** */
function showLoginContent(){

	registerContent.innerHTML = '';
	registerContent.classList.remove('d-block');
	loginContent.classList.add('d-block');
	document.body.classList.add('overflow-hidden');

	getPageContentXhr('/view/modal/login.php', loginContent);





}

function addEventForgotPasswordOpenModal(content){

	let forgotPasswordModal = document.getElementById('forgotPasswordModal');

	if(forgotPasswordModal){
		forgotPasswordModal.addEventListener('show.bs.modal', function (event) {
			content.classList.add('open-modal');
		});
		forgotPasswordModal.addEventListener('hide.bs.modal', function (event) {
			content.classList.remove('open-modal');
		});

	}
}



/* *********************************************** */
/******* SHOW MULTIPLE ACCOUNTSCONTENT *************/
/* *********************************************** */
function showMultipleAccountsContent(){

	loginContent.innerHTML = '';
	registerContent.innerHTML = '';

	registerContent.classList.remove('d-block');
	loginContent.classList.remove('d-block');
	multipleAccountsContent.classList.add('d-block');
	document.body.classList.add('overflow-hidden');

	getPageContentXhr('/view/modal/multiple-accounts.php', multipleAccountsContent);

	API.get('/user/accounts')
    .then(result => {
        createSwitchAccountItems(result);
    })
    .catch(error => {
        console.error(error);
    });

}




/* *********************************************** */
/****************** ON MENU RESIZED ****************/
/* *********************************************** */
let resultsProductsMenu = document.getElementById('resultsProductsMenu');
function onMenuResized() {
	if (mainMenuRow.offsetHeight > window.innerHeight * 0.63)
	{
	  let maxProductsHeight = window.innerHeight * 0.66 - 100;
  
	  if (resultsProductsMenu.style.maxHeight != `${maxProductsHeight}px`)
		resultsProductsMenu.style.maxHeight = `${maxProductsHeight}px`;
	} else {
	  if (resultsProductsMenu.style.maxHeight != 'fit-content')
		resultsProductsMenu.style.maxHeight = 'fit-content'
	}
}

if(resultsProductsMenu){
	new ResizeObserver(onMenuResized).observe(resultsProductsMenu);
}

  
  
  
  
  
/* *********************************************** */
/************* ON NAV CATEGORY RESIZED *************/
/* *********************************************** */
let mainMenuContent;

if(mainMenuNav){
	mainMenuContent = mainMenuNav.querySelector('.main-category-list');
}

function onNavCategoryResized() {
  
	if (mainMenuRow.offsetHeight > window.innerHeight * 0.63){
	  let maxProductsHeight = window.innerHeight * 0.66 - 80;
  
	  if (mainMenuContent.style.maxHeight != `${maxProductsHeight}px`)
		mainMenuContent.style.maxHeight = `${maxProductsHeight}px`;
	} else {
	  if (mainMenuContent.style.maxHeight != 'fit-content')
		mainMenuContent.style.maxHeight = 'fit-content'
	}
  }
  
  if(mainMenuContent){
	new ResizeObserver(onNavCategoryResized).observe(mainMenuContent);
  
  }
  



  

/* *********************************************** */
/************ FOOTER ORDER PROCESS *****************/
/* *********************************************** */
let footerOrderProcess = document.querySelector('footer.footer-order-process');
let previousScrollPosition = window.scrollY;

if(footerOrderProcess){
    window.addEventListener('scroll', function() {
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
            footerOrderProcess.classList.add('active');
        } 
        
        if (window.scrollY < previousScrollPosition) {
            footerOrderProcess.classList.remove('active');
        }
          
        previousScrollPosition = window.scrollY;
    });
}



/* *********************************************** */
/****** CREATE BTN  CIRCLE ICON ANIMATION **********/
/* *********************************************** */
function createCircleIconBtnAnimation(colorBtn, nameIcon, text){

	let button = createNewElement('button', `btn-circle-icon-animation ${colorBtn}`);

	let icon = createNewElement('span', `btn-circle-icon ${nameIcon}`);
	button.append(icon);

	let textEl = createNewElement('span', 'text', text);
	button.append(textEl);


	return button;
}




/* *********************************************** */
/************* CREATE SUCCESS CONTENT **************/
/* *********************************************** */
function showSuccessContent(title, desc, nameBtn, url) {

	let content = createNewElement('div', 'text-center');

	let titleEl = createNewElement('h2', 'mb-4 text-xll', title);
	content.append(titleEl);

	let descEl = createNewElement('p', 'mb-4 px-xl-5', desc);
	content.append(descEl);

	let button = createNewElement('button', 'btn btn-white px-50 mt-4', nameBtn);
	button.type = 'button';
	button.setAttribute('onclick', `location.href='${url}'`);
	content.append(button);

	return content;
}





/* *********************************************** */
/*********** FORGOT PASSWORD SEND EMAIL ************/
/* *********************************************** */
function forgotPasswordSendEmail(btn) {
	let form = btn.closest('form');
	form.addEventListener('submit', onsubmitFormValidate, false);

	let success = true;

	if(success){
		form.innerHTML = '';
		let content = showSuccessContent('sent successfully email!', 'Our system has successfully sent an email to assist you in resetting your password.', 'Back to Login', '/');
		form.append(content);
	}

}





/* *********************************************** */
/******* FORGOT PASSWORD SEND NEW PASSWORD *********/
/* *********************************************** */
function sendNewPassword(btn) {
	let form = btn.closest('form');
	form.addEventListener('submit', onsubmitFormValidate, false);

	let success = true;

	if(success){ 
		form.innerHTML = '';

		let content = showSuccessContent('Successfully Password reset!', 'You can now use your new password to log into your account!', 'Back to Login', '/');
		form.append(content);
	}

}




/* *********************************************** */
/************* SHOW FULL SIZE FILE MODAL ***********/
/* *********************************************** */
function onclickShowFullSizeFileModal(url){
	let modaFullSizeFile = document.getElementById('modaFullSizeFile');
	if(modaFullSizeFile){
		modaFullSizeFile.querySelector('.modal-body').style.backgroundImage = `url(${url})`;
	}
}





/* *********************************************** */
/****************** CREATE COUPON ******************/
/* *********************************************** */
function createCoupon(name, type, price, pro){

    let coupon = createNewElement('div', 'coupon mb-3');

    let wrap = createNewElement('div', 'wrap');
    coupon.append(wrap);

    let titleEl = createNewElement('span', 'title', name);
    wrap.append(titleEl);

    let priceEl = createNewElement('span', 'price', price);
    wrap.append(priceEl);

	if(type){
		let typeEl = createNewElement('span', 'type', type);
		wrap.append(typeEl);
	}
  


    if(pro){
        coupon.classList.add('pro');
    } else{
        coupon.classList.add('base-coupon');
        
    }

    return coupon;
}




/* *********************************************** */
/**************** COPY TO CLIPBOARD  ***************/
/* *********************************************** */
function copyToClipboard(text) {
	navigator.clipboard.writeText(text);
  }
  
  function pasteFromClipboard() {
	return navigator.clipboard.readText()
  }

document.addEventListener('keydown', function(event) {
	if (event.ctrlKey && event.key === 'v') {
	  pasteFromClipboard();
	}
});





/* *********************************************** */
/********** CREATE LATEST TRANSACTIONS ITEM ********/
/* *********************************************** */
function createLatestTransactionsItem(name, type, price, date){

    let item = createNewElement('div', 'latest-transactions-list-item');

    let colOne = createNewElement('span', 'd-flex justify-content-between mb-1');
    item.append(colOne);

    let title = createNewElement('span', 'text-xxs', name);
    colOne.append(title);

    let priceEl = createNewElement('span', 'text-xxs fw-semibold', `${price} Credits`);
    colOne.append(priceEl);

    if(price < 0){
        priceEl.classList.add('text-red');
    } else {
        priceEl.classList.add('text-green');
		priceEl.innerHTML = `+${price} Credits`;
    }


    let colTwo = createNewElement('span', 'd-flex justify-content-between');
    item.append(colTwo);

	let dateEl = createNewElement('span', 'text-xxxs', date);

	if(type){
		let typeEl = createNewElement('span', 'text-xxxs text-primary fw-semibold', type);
		colTwo.append(typeEl);
		colTwo.append(dateEl);
	} else {
		dateEl.classList.add('text-grey');
    	colTwo.append(dateEl);
	}

    return item;

}




/* *********************************************** */
/*********  SHOW ALL LATEST TRANSACTIONS ***********/
/* *********************************************** */
function toggleLatestTransactions(ev){
	let btn = ev.currentTarget;
	let itemsContainer = btn.parentElement.querySelector('.js-toggle-latest-items');

	if (itemsContainer){
		if (btn.innerText == 'Expand Full History') {
			itemsContainer.classList.add('show-all');
	
			btn.innerHTML = 'Hide History';
		} else {
			itemsContainer.classList.remove('show-all');
	
			btn.innerHTML = 'Expand Full History';
		}
	}
}






/* *********************************************** */
/******************** CREATE TITLE *****************/
/* *********************************************** */
function createTitle({title = '', desc = '', line = false}) {

	let wrap = createNewElement('div', 'text-center text-lg-start');

	if(title) {
		let titleEl = createNewElement('h4', 'text-md mb-2', title);
		wrap.append(titleEl);
	}

	if(line) {
		let hr = createNewElement('hr', 'text-drab mt-2');
		wrap.append(hr);
	}

	if(desc) {
		let descEl = createNewElement('p', 'text-xs', desc);
		wrap.append(descEl);
	}

	return wrap;
	
}