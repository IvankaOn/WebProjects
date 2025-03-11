let idCounter = 0;
let countRow = 0;
/* let getThisProfessionally = true; */

let uploadDesignContainer = document.getElementById('uploadDesignContainer');
let uploadDesignAddNewPageBtn = document.getElementById('uploadDesignAddNewPageBtn');

if(uploadDesignContainer){
    createUploadDesignRow();
}


/* *********************************************** */
/*********  CREATE UPLOAD DESUGN ROW FUNCTION ******/
/* *********************************************** */
function createUploadDesignRow(){

    let countColumn = 2;

    idCounter++;
    countRow++;

    let row = createNewElement('div', 'row justify-content-center my-6');
    if(uploadDesignContainer){
        uploadDesignContainer.append(row);
    }

    /*  COLUMNS */
    for (let col = 0; col < countColumn; col++) {

        let column = createNewElement('div', 'col-12 col-md-10 col-lg-6 col-xxl-5 py-4 py-lg-0');
        row.append(column);
        
        
        let uploadDesignCard = createNewElement('div', 'upload-your-design-card bg-white cursor-pointer-unset mb-3');

        let title = createNewElement('span', 'upload-card-title');
        uploadDesignCard.append(title);


        let svgText;
        if(col == 0){
            svgText = 'Front Side';

            uploadDesignCard.id = `front-upload-card-${idCounter}`;

            
        } else if(col == 1){
            svgText = 'Back Side';

            uploadDesignCard.id = `back-upload-card-${idCounter}`;

        }

        title.innerHTML = `<svg viewBox="0 0 150 35" class="upload-card-title-shadow">
                                <text class="upload-card-title-shadow-txt" text-anchor="middle" x="75" y="25">${svgText}</text>
                            </svg>`;

        column.append(uploadDesignCard);

        
        createDropZoneThumbnail(uploadDesignCard);

        
        let inputFile = createNewElement('input', 'drop-zone-input');
        inputFile.type = 'file';
        inputFile.name = 'File';
        uploadDesignCard.append(inputFile);

        addDropZoneOrderProcessEvents(inputFile);

        let addDesignPrintbtn = createAddDesignPrintBtn();
        
        addDesignPrintbtn.dataset.fromDragZoneId = uploadDesignCard.id;
        uploadDesignCard.parentElement.append(addDesignPrintbtn);



/*         let btnBrowseComputer = createNewElement('button', 'btn btn-primary me-sm-4 mb-2 mb-sm-0 upload-browse-computer-btn', 'Browse Computer');
        btnBrowseComputer.type = 'button';
        btnBrowseComputer.setAttribute('onclick', 'browseComputer(this)');
        columnButtons.append(btnBrowseComputer); */
        
        
      /*   if(col == 1){

            let btnRemove = createNewElement('button', 'btn btn-white-with-border px-40 mb-2 mb-sm-0 uploaded-file-remove-btn d-none', 'Remove');
            btnRemove.type = 'button';
            btnRemove.addEventListener('click', uploadedFileRemove);
            columnButtons.append(btnRemove);
        } */

       /*   else {


            let cardName = createNewElement('span', 'text-xl fw-bold d-block text-center lh-sm');
            uploadDesignCard.append(cardName);

            let projectDescTextarea = createNewElement('textarea', 'form-control text-xxs w-100');
            projectDescTextarea.setAttribute('placeholder', 'Describe Your Project');
            projectDescTextarea.setAttribute('rows', '6');

            if(col == 0){

                uploadDesignCard.classList.add('bg-dark-grey');
            
                let projectDescLabel = createNewElement('label', 'form-label');
                projectDescLabel.innerText = 'Front page project description';
                projectDescLabel.setAttribute('for', `project-front-desc-${idCounter}`);

                projectDescTextarea.id = `project-front-desc-${idCounter}`;
                projectDescTextarea.name = 'Project_Front_Description';

                cardName.innerHTML = 'CUSTOM<br>DESIGN';

                column.append(projectDescLabel);

            } else if (col == 1){

                uploadDesignCard.classList.add('bg-easy-blue');

                let formChekContainer = createNewElement('div', 'form-check d-flex align-items-center mb-3');
                column.append(formChekContainer);

                let inputCheckBox = createNewElement('input', 'form-check-input mb-1 me-3');
                inputCheckBox.type = 'checkbox';
                inputCheckBox.id = `custom-project-back-check-${idCounter}`;

                formChekContainer.append(inputCheckBox);
                inputCheckBox.addEventListener('change', onBackPageChekboxChange);

                let custProjectBackCheckLabel = createNewElement('label', 'form-label mb-0');
                custProjectBackCheckLabel.innerText = 'Back page project description';
                custProjectBackCheckLabel.setAttribute('for', `custom-project-back-check-${idCounter}`);

                formChekContainer.append(custProjectBackCheckLabel);

                projectDescTextarea.id = `project-back-desc-${idCounter}`;
                projectDescTextarea.name = 'Project_Back_Description';

                cardName.classList.add('text-dark-grey');
                cardName.innerText = 'BLANK';

            }

            column.append(projectDescTextarea);

            if (col == 1){

                projectDescTextarea.addEventListener('keyup', onProjectDescKeyup);
            }

        } */
        
    }

    /* COUNT ROW */
    if (countRow >= 2){
        row.className = 'row justify-content-center bg-white-gradient border-light-purple interval-between-rows mt-5';

        

        let headerCountRow = createNewElement('div', 'col-12 col-xxl-10 my-4');
        row.prepend(headerCountRow);

        let titleCountRow = createNewElement('span', 'page-number text-primary text-center d-block', `Page ${countRow}`);
        headerCountRow.append(titleCountRow);

      
        let removeRowBtn = createNewElement('button', 'btn btn-link text-red fw-normal text-xs py-0 d-block m-auto remove-upload-row-btn', 'Remove');
        removeRowBtn.type = 'button';
        removeRowBtn.setAttribute('onclick', 'removeUploadDesignRow(this)');
        headerCountRow.append(removeRowBtn);

  
    }

}


/* *********************************************** */
/*************** REMOVE ROW FUNCTION ***************/
/* *********************************************** */
function removeUploadDesignRow(btn) {
    let row = btn.parentElement.parentElement;
    row.remove();
    countRow--;

    let pageNumbers = document.querySelectorAll('.page-number');
    let count = 2;
    pageNumbers.forEach((pageNumb) =>{
        pageNumb.innerText = `Page ${count}`;
        count++;
    })
}



/* *********************************************** */
/****************** CREATE DROP ZONE ***************/
/* *********************************************** */
function createDropZoneThumbnail(dropZoneEl) {

    let row = createNewElement('div', 'row row-cols-2 gx-4 justify-content-around btns-row-upload-files');
    dropZoneEl.append(row);

    let countBtns = 4;
    let nameTypeUploadFile, typeNameModal, bgElClassName;



    for(let btn = 1; btn <= countBtns; btn++){
        let uploadFileOpenModalBtnLink = createNewElement('a', 'btn-link');


        if(btn == 1){
            typeNameModal = 'modalUploadFile';
            nameTypeUploadFile ='Upload A File';
            bgElClassName = 'icon-upload-file';
            uploadFileOpenModalBtnLink.classList.add('pb-3');

            let plusIcon = createNewElement('div', 'plus-icon');
            uploadFileOpenModalBtnLink.append(plusIcon);
 
        } else if(btn == 2){
            typeNameModal = 'modalSavedLibrary';
            nameTypeUploadFile ='Saved From Library';
            bgElClassName = 'icon-selected-library';
            uploadFileOpenModalBtnLink.classList.add('pb-3');


        } else if(btn == 3){
            typeNameModal = null;
            nameTypeUploadFile ='Design Online';
            bgElClassName = 'icon-design-online';
            uploadFileOpenModalBtnLink.classList.add('pt-4');
            uploadFileOpenModalBtnLink.onclick = onclickUploadDesignOnlineBtn;

        } else if(btn == 4){
            typeNameModal = 'modalHireDesigner';
            nameTypeUploadFile ='Work With A Designer';
            bgElClassName = 'icon-work-with-designer';
            uploadFileOpenModalBtnLink.classList.add('pt-4');


        }

        
        /* UPLOAD FILE BTN */

        if(typeNameModal != null){
            uploadFileOpenModalBtnLink.href = `#${typeNameModal}`;
            uploadFileOpenModalBtnLink.dataset.bsTarget = `#${typeNameModal}`;
            uploadFileOpenModalBtnLink.dataset.bsToggle = 'modal';
        }
        
        row.append(uploadFileOpenModalBtnLink);

        let bgItemIcon = createNewElement('div', 'bg-uploaded-design mb-2');
        bgItemIcon.classList.add(bgElClassName);
        uploadFileOpenModalBtnLink.append(bgItemIcon);

        let nameBtn = createNewElement('span', 'd-block text-drab fw-normal upload-card-title-fs text-center mb-0', nameTypeUploadFile);
        uploadFileOpenModalBtnLink.append(nameBtn);

    }

}




/* *********************************************** */
/************ CREATE ADD DESIGN PRINT BTN **********/
/* *********************************************** */
function createAddDesignPrintBtn(){

    let btn = createCircleIconBtnAnimation('btn-green', 'wa-wa-more', 'Select Media');
    btn.classList.add('m-auto', 'btn-add-design-print');
    btn.href = '#modalAddDesign';
    btn.dataset.bsTarget = '#modalAddDesign';
    btn.dataset.bsToggle = 'modal';
    btn.type = 'button';

    btn.addEventListener('click', e => {
        uploadFileModalEl.dataset.fromDragZoneId = btn.dataset.fromDragZoneId;
        modalSavedLibrary.dataset.fromDragZoneId = btn.dataset.fromDragZoneId;
    })


    return btn;

}



/* *********************************************** */
/******** CREATE REPLACE UPLOAD FILE BTN  **********/
/* *********************************************** */
function createReplaceUploadedFileBtn(inputFile){

    let btn = createCircleIconBtnAnimation('btn-orang', 'wa-wa-reload', 'Replace');
    btn.classList.add('m-auto', 'mb-3', 'ms-sm-0', 'mb-sm-0', 'me-sm-3');
    btn.type = 'button';
    btn.addEventListener('click', event => {

        inputFile.click();
        
    })

    return btn;

}




/* *********************************************** */
/******** CREATE DELETE UPLOADED FILE BTN **********/
/* *********************************************** */
function createDeleteUploadedFileBtn(thumbnailElement, editingBtns, dropZoneEl){

    let btn = createCircleIconBtnAnimation('btn-red', 'wa-wa-remove', 'Delete');
    btn.classList.add('m-auto', 'm-sm-0');
    btn.addEventListener('click', event => {

        thumbnailElement.remove();
        editingBtns.remove();

        createDropZoneThumbnail(dropZoneEl);
        event.stopImmediatePropagation();

        let btnAddDesignPrint = createAddDesignPrintBtn();
        dropZoneEl.parentElement.append(btnAddDesignPrint);
        
    })

    return btn;

}


/* *********************************************** */
/******** CREATE EDIT UPLOADED FILE BTN **********/
/* *********************************************** */
function createEditUploadedFileBtn(dropZoneEl){

    let btn = createCircleIconBtnAnimation('btn-blue', 'wa-wa-edit', 'Edit');
    btn.classList.add('m-auto', 'mb-3', 'ms-sm-0', 'mb-sm-0', 'me-sm-3');
    
    /* click on it, it would send the uuid of the design to the app and they can edit the design instead of starting over from a blank screen */

    return btn;

}





/* *********************************************** */
/***************** UPLOAD FILE MODAL ***************/
/* *********************************************** */
let uploadFileModalEl;

if(document.getElementById('modalUploadFile')){
    uploadFileModalEl = document.getElementById('modalUploadFile');

    uploadFileModalEl.addEventListener('show.bs.modal', function () {

        uploadFileModalEl.querySelector('.drop-zone-input').value = '';
        
        uploadFileModalEl.querySelector('.drop-zone-prompt').classList.remove('d-none');
    
        if(uploadFileModalEl.querySelector('.drop-zone-thumb')){
            uploadFileModalEl.querySelector('.drop-zone-thumb').remove();
        }
        
    })
}





/* *********************************************** */
/******* ADD DROP ZONE ORDER PROCESS EVENTS ********/
/* *********************************************** */
function addDropZoneOrderProcessEvents(inputElement) {
	const dropZoneElement = inputElement.closest('.upload-your-design-card');

	dropZoneElement.addEventListener('click', (e) => {
        uploadFileModalEl.dataset.fromDragZoneId = e.currentTarget.id;
        modalSavedLibrary.dataset.fromDragZoneId = e.currentTarget.id;
	});

	inputElement.addEventListener('change', (e) => {
		if (inputElement.files.length) {
			updateThumbnailUploadDesign(dropZoneElement, inputElement.files[0], false);
		}
	});

}





/* *********************************************** */
/************* UPLOAD FILE MODAL BTN ***************/
/* *********************************************** */
let uploadFileModalBtn = document.getElementById('uploadFileModalBtn');
if(uploadFileModalBtn){
    uploadFileModalBtn.addEventListener('click', event =>{
        uploadFileWihtModal(uploadFileModalBtn.closest('.modal'));
    })
}




function uploadFileWihtModal(modal) {

    let uploadFileModalInput = document.getElementById('uploadFileModalInput');

    if(uploadFileModalInput.files.length == 0){
        return;
    }

    let fromDragZoneId = modal.dataset.fromDragZoneId;

    let fromDragZone = document.getElementById(fromDragZoneId);

    let fromDragZoneInput = fromDragZone.querySelector('.drop-zone-input');

    fromDragZoneInput.files = uploadFileModalInput.files;


    updateThumbnailUploadDesign(fromDragZone, fromDragZoneInput.files[0], false);
}






/* *********************************************** */
/********* UPDATE THUMBNAIL UPLOAD DESIGN **********/
/* *********************************************** */
function updateThumbnailUploadDesign(dropZoneEl, file, fileFromLibrary){

    let thumbnailElement = dropZoneEl.querySelector('.drop-zone-thumb');

    if(!thumbnailElement){
        thumbnailElement = createNewElement('div', 'drop-zone-thumb');
        dropZoneEl.appendChild(thumbnailElement);	
    }


    if(fileFromLibrary){
        thumbnailElement.style.backgroundImage = `${fileFromLibrary.backgroundImage}`;
    }


    if(file){
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
    
            reader.readAsDataURL(file);
            reader.onload = () => {
                thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
            }
        } else if (file.name.split('.').pop() == 'pdf') {
            thumbnailElement.style.backgroundImage = 'url(assets/img/icons/type-file/PDF.svg)';
            thumbnailElement.classList.add('uploaded-file-not-image');
    
        } else if (file.name.split('.').pop() == 'docx' || file.name.split('.').pop() == 'doc') {
            thumbnailElement.style.backgroundImage = 'url(assets/img/icons/type-file/DOC.svg)';
            thumbnailElement.classList.add('uploaded-file-not-image');
           
    
        } else if (file.name.split('.').pop() == 'psd') {
            thumbnailElement.style.backgroundImage = 'url(assets/img/icons/type-file/PSD.svg)';
            thumbnailElement.classList.add('uploaded-file-not-image');
           
        } 
        else {
            thumbnailElement.style.backgroundImage = null;
        }
    }


    let btnsRowUploadFiles = dropZoneEl.querySelector('.btns-row-upload-files');
    if(btnsRowUploadFiles){
        btnsRowUploadFiles.remove();
    }

    dropZoneEl.parentElement.querySelector('.btn-add-design-print')?.remove();

    let inputFile = dropZoneEl.querySelector('input.drop-zone-input');

    
    if(!dropZoneEl.parentElement.querySelector('.action-upload-file-btns')){
        let editingBtns = createNewElement('div', 'd-flex justify-content-center flex-column flex-sm-row action-upload-file-btns');

        dropZoneEl.parentElement.append(editingBtns);
    
    
        let btnEdit = dropZoneEl.parentElement.querySelector('.btn-edit-uploaded-file');
        if (!btnEdit) {
            btnEdit = createEditUploadedFileBtn(dropZoneEl);
            editingBtns.append(btnEdit);
        }
    
        let btnReplace = dropZoneEl.parentElement.querySelector('.btn-replace-uploaded-file');
        if (!btnReplace) {
            btnReplace = createReplaceUploadedFileBtn(inputFile, thumbnailElement);
            editingBtns.append(btnReplace);
        }
        
        let btnDelete = dropZoneEl.parentElement.querySelector('.btn-delete-uploaded-file');
        if (!btnDelete) {
            btnDelete = createDeleteUploadedFileBtn(thumbnailElement, editingBtns, dropZoneEl);
            editingBtns.append(btnDelete);
        }
    }
  
}





/* *********************************************** */
/************** EVENT BTN ADD NEW PAGE *************/
/* *********************************************** */
function onclickUploadDesignOnlineBtn(ev){
/*     let btn = ev.currentTarget;

    let btnsContainer = btn.parentElement.parentElement.nextSibling;
    let btnEdit = createEditUploadedFileBtn(btn);
    btnsContainer.append(btnEdit); */

}



/* *********************************************** */
/************** EVENT BTN ADD NEW PAGE *************/
/* *********************************************** */
if(uploadDesignAddNewPageBtn){
    uploadDesignAddNewPageBtn.addEventListener('click', function(){
        createUploadDesignRow();
    });
}




/* *********************************************** */
/*************** MODAL HIRE DESIGNER  **************/
/* *********************************************** */
let modalHireDesigner = document.getElementById('modalHireDesigner');
if(modalHireDesigner){
    modalHireDesigner.addEventListener('hidden.bs.modal', function (event) {

        modalHireDesigner.querySelector('#hireDesignerForm').reset();
        modalHireDesigner.querySelectorAll('.js-upload-file-name-row').forEach(el => el.remove());
       
    })
}

/* *********************************************** */
/****** CREATE ORDER PROCESS SHIPPING ADRESS  ******/
/* *********************************************** */
let orderProcessShippingAddressContainer = document.getElementById('orderProcessShippingAddressContainer');

if(orderProcessShippingAddressContainer){

    let addressOne = createOrderProcessShippingAddressItem('shippingAddress-01', 'John Smith', 'Company Name', 'john.smith@gmail.com', '(123) 123-1234', 'Street Name One 1234 Street Name Two 1234 Canada, Ontario, City, Postal Code', true);
    orderProcessShippingAddressContainer.append(addressOne);
    let addressTwo = createOrderProcessShippingAddressItem('shippingAddress-02', 'John Smith 2', 'Company Name', 'john.smith@gmail.com', '(123) 123-1234', 'Street Name One 1234 Street Name Two 1234 Canada, Ontario, City, Postal Code', false);
    orderProcessShippingAddressContainer.append(addressTwo);

}

function createOrderProcessShippingAddressItem(id, addressUserName, addressCompanyName, email, phone, desc, checked){

    let label = createNewElement('label', 'd-flex align-items-center position-relative mb-3');
    label.for = id;

    let input = createNewElement('input', 'form-check-input form-check-input-circle shipping-addresses-card-input-radio');
    input.id = id;
    input.type = 'radio';
    input.name = 'Saved_Shipping_Address';
    input.checked = checked;
    label.append(input);

    let addressBlock = createNewElement('span', 'd-sm-flex align-items-baseline shipping-addresses-card');
    label.append(addressBlock);

    let addressBlockLeft = createNewElement('span', 'w-sm-50');
    addressBlock.append(addressBlockLeft);

    let userName = createNewElement('span', 'd-block text-xs fw-semibold', addressUserName);
    addressBlockLeft.append(userName);
    let companyName = createNewElement('span', 'd-block text-xs fw-semibold', addressCompanyName);
    addressBlockLeft.append(companyName);
    let addressEmail = createNewElement('span', 'd-block text-xs fw-semibold', email);
    addressBlockLeft.append(addressEmail);
    let addressPhone = createNewElement('span', 'd-block text-xs fw-semibold', phone);
    addressBlockLeft.append(addressPhone);


    let addressBlockRight = createNewElement('span', 'w-sm-50');
    addressBlock.append(addressBlockRight);

    let addressDesc = createNewElement('span', 'd-block text-xs fw-semibold pe-2 pe-xxl-5', desc)
    addressBlockRight.append(addressDesc);

    return label;

}





/* *********************************************** */
/****** EVENT ON SAVE ADDRESS CHECKBOX CHANGE ******/
/* *********************************************** */
let shippingAddressesCardInputRadio = document.querySelectorAll('.shipping-addresses-card-input-radio');
let shippingSaveAddressInput = document.getElementById('shippingSaveAddressCheckboxForm');
let newAddressCheckboxInputCheckbox = document.getElementById('newAddressCheckbox');

if(shippingAddressesCardInputRadio){
    shippingAddressesCardInputRadio.forEach((input) =>{

        if (input.checked){
            onSaveAddressChekboxChange();
        }
        input.addEventListener('change', onSaveAddressChekboxChange);
    })
}





/* *********************************************** */
/********** ON SAVE ADDRESS CHEKBOX CHANGE *********/
/* *********************************************** */
function onSaveAddressChekboxChange(){
    let shippingSaveAddresslabel = shippingSaveAddressInput.nextElementSibling;

    newAddressCheckboxInputCheckbox.checked = false;

    shippingSaveAddressInput.checked = true;
    shippingSaveAddressInput.className = 'form-check-input bg-drab border-drab';
    shippingSaveAddressInput.setAttribute('disabled', true);

    shippingSaveAddresslabel.classList.remove('text-primary');
    shippingSaveAddresslabel.classList.add('text-drab');
    shippingSaveAddresslabel.innerText = 'Saved Addres';
}





/* *********************************************** */
/*** EVENT ON NOT SAVE ADDRESS CHECKBOX CHANGE *****/
/* *********************************************** */
let checkOrNotSaveAddress = document.querySelectorAll('.check-or-not-save-address');

if(checkOrNotSaveAddress){
    checkOrNotSaveAddress.forEach((input) =>{
        input.addEventListener('keyup', onNotSaveAddressChekboxChange);
    })
}


function onNotSaveAddressChekboxChange(){

    let shippingSaveAddresslabel = shippingSaveAddressInput.nextElementSibling;

    newAddressCheckboxInputCheckbox.checked = true;

    shippingAddressesCardInputRadio.forEach((input) =>{
        input.checked = false;
    })
    
    shippingSaveAddressInput.checked = false;
    shippingSaveAddressInput.className = 'form-check-input';
    shippingSaveAddressInput.disabled = false;

    shippingSaveAddresslabel.classList.remove('text-drab');
    shippingSaveAddresslabel.classList.add('text-primary');
    shippingSaveAddresslabel.innerText = 'Save this address for later';
}




/* *********************************************** */
/********** EVENT ON NEW ADDRESS CHECKBOX  *********/
/* *********************************************** */
if (newAddressCheckboxInputCheckbox){
    
    newAddressCheckboxInputCheckbox.addEventListener('input', () =>{
        onNotSaveAddressChekboxChange();
    })
}





/* *********************************************** */
/*** EVENT ON NOT SAVED CREDIT CARD RADIO CHANGE ***/
/* *********************************************** */
function onPaySavedCreditCardRadioChange() {
    payWhihtCreditCardCheckbox.checked = false;
}




/* *********************************************** */
/** EVENT ON PAY NEW CREDIT CARD CHECKBOX CHANGE ***/
/* *********************************************** */
let payWhihtCreditCardCheckbox = document.getElementById('payWhihtCreditCardCheckbox');

if (payWhihtCreditCardCheckbox){
    payWhihtCreditCardCheckbox.addEventListener('change', (event) => {
        let savedCreditCardsInput = savedCreditCards.querySelectorAll('input[type="radio"]');
        savedCreditCardsInput.forEach((input) =>{
            if(input.checked){
                input.checked = false;
            }
        })
    });
}




/* *********************************************** */
/********** EVENT CLICK BTN SEND PAYMENT FORM ******/
/* *********************************************** */
let btnSendPaymentForm = document.getElementById('btnSendPaymentForm');

if (btnSendPaymentForm){

    btnSendPaymentForm.addEventListener('click', (event) =>{

        let savedCreditCardsInput = savedCreditCards.querySelectorAll('input[type="radio"]');
        
        savedCreditCardsInput.forEach((input) =>{
            if(input.checked){
                let bsModalConfirmYourCard = new bootstrap.Modal(document.getElementById('modalConfirmYourCard'), {})
                bsModalConfirmYourCard.show();
            }
        })
    
        if(payWhihtCreditCardCheckbox.checked){
            paymentOptionsForm.dispatchEvent(new Event('submit'));
        }
    });
}





/* *********************************************** */
/*********** CREATE SAVED CART CONTAINER ***********/
/* *********************************************** */
function createCreditCardContainer() {
    idCounter++;

    let cardContainer = createNewElement('div', 'saved-credit-card-item');

     let cardItem = createCreditCard();
    cardContainer.append(cardItem);

    /* CHECKBOX PAY WITH CREDIT CARD */
    let payCardCheckboxContainer = createNewElement('div', 'text-center');
    cardContainer.append(payCardCheckboxContainer);

    let checkboxContainer = createNewElement('div', 'form-check form-check-inline my-4 mx-auto');
    payCardCheckboxContainer.append(checkboxContainer);

    let checkBoxInput = createNewElement('input', 'form-check-input form-check-input-circle mt-lg-2');
    checkBoxInput.type = 'radio';
    checkBoxInput.name = 'Pay_Saved_Credit_Card';
    checkBoxInput.id = `savedCreditCardCheckbox-${idCounter}`;
    checkBoxInput.addEventListener('change', onPaySavedCreditCardRadioChange);
    checkboxContainer.append(checkBoxInput);

    let checkBoxLabel = createNewElement('label', 'form-check-label text-sm text-primary fw-semibold', 'Pay with this Credit card');
    checkBoxLabel.setAttribute('for', `savedCreditCardCheckbox-${idCounter}`);
    checkboxContainer.append(checkBoxLabel);

    let designLine = createNewElement('hr', 'text-drab mt-0 saved-credit-card-item-border');
    cardContainer.append(designLine);

    return cardContainer;
}





let savedCreditCards = document.getElementById('savedCreditCards');

if (savedCreditCards) {
    let card1 = createCreditCardContainer();
    savedCreditCards.append(card1);
    
    let card2 = createCreditCardContainer();
    savedCreditCards.append(card2);
}





/* *********************************************** */
/************** MODAL CONFIRM YOUR CARD ************/
/* *********************************************** */
let modalConfirmYourCardEl = document.getElementById('modalConfirmYourCard');

if (modalConfirmYourCardEl) {
    modalConfirmYourCardEl.addEventListener('show.bs.modal', function (event) {
        let cardContainer = document.querySelector('#confirmYourCardForm .card-container');
        let selectedCard = createCreditCard();
        cardContainer.append(selectedCard);
      })
      
      modalConfirmYourCardEl.addEventListener('hidden.bs.modal', function (event) {
        let cardContainer = document.querySelector('#confirmYourCardForm .card-container');
        cardContainer.innerHTML = '';
      })
}




/* *********************************************** */
/************* MODAL PROCESSING PAYMENT ************/
/* *********************************************** */
let resultPayment = true;

let processingPayContent = document.getElementById('processingPayContent');

let modalProcessingPayment = document.getElementById('modalProcessingPayment');

if (modalProcessingPayment) {
    modalProcessingPayment.addEventListener('show.bs.modal', function (event) {

        if (resultPayment){
            setInterval(resultPaymentSuccess, 2000);
        } else {
            setInterval(resultPaymentError, 2000);
        }
    
    })
}

function hideBsModalProcessingPayment() {
    let bsModalProcessingPayment = bootstrap.Modal.getInstance(modalProcessingPayment);
    bsModalProcessingPayment.hide();
}

function resultPaymentSuccess() {
    let processingPaymentSuccess = document.getElementById('processingPaymentSuccess');
    processingPayContent.classList.add('d-none');
    processingPaymentSuccess.classList.remove('d-none');

    setInterval(hideBsModalProcessingPayment, 3000);

}

function resultPaymentError() {
    let processingPaymentError = document.getElementById('processingPaymentError');
    processingPayContent.classList.add('d-none');
    processingPaymentError.classList.remove('d-none');
}




/* *********************************************** */
/************** ON CHECK COUPONE CODE **************/
/* *********************************************** */
let resultCouponIcon = document.getElementById('resultCouponIcon');

function onCheckCouponCode(btn){

    let inputValue = btn.previousElementSibling.value;
   
    if (inputValue == 'test'){
        resultCouponIcon.className = 'fi-rr-badge-check text-green text-sm';
        showSuccessInfoToast('Saved your coupon!');

    } else {
        resultCouponIcon.className = 'fi-rr-cross-circle text-red text-sm';
        showErrorInfoToast('Your coupon has not been saved!');
    }

}

let paymentCouponCodeFormInput = document.getElementById('paymentCouponCodeForm');

if (paymentCouponCodeFormInput){
    
    paymentCouponCodeFormInput.addEventListener('keyup', () => {

        resultCouponIcon.className = 'fi-rr-plus-small text-primary text-sm';

    })
}
