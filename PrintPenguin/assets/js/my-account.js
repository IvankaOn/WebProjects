let countries = [
	{
        name: "Canada",
        image: "/assets/img/locale/currency/cad.svg"
	},
	{
        name: "France",
        image: "/assets/img/locale/currency/fr.svg"
	}
];

let customDesignItemCount = 0;

let yourCartHistoryItemCount = 0;



/* *********************************************** */
/***** CREATE CUSTOM DESIGN IN PROGRESS LIST *******/
/* *********************************************** */
/* let customDesignInProgressList2 = document.getElementById('customDesignInProgressList2');

if (customDesignInProgressList2){

    let accordionCustomDesignInProgressItemOne = createCustomDesignItem('assets/img/home-page/img-front.png', 'assets/img/home-page/img-back.png', 'review');
    customDesignInProgressList2.append(accordionCustomDesignInProgressItemOne);

    let accordionCustomDesignInProgressItemTwo = createCustomDesignItem('assets/img/home-page/img-front.png', 'assets/img/home-page/img-back.png', 'review');
    customDesignInProgressList2.append(accordionCustomDesignInProgressItemTwo);
} */




/* *********************************************** */
/******* CREATE CUSTOM DESIGN COMPLETED LIST *******/
/* *********************************************** */
/* let customCompletedDesignList2 = document.getElementById('customCompletedDesignList2');

if (customCompletedDesignList2){

    let accordionCustomDesignInProgressItemOne = createCustomDesignItem('assets/img/home-page/img-front.png', 'assets/img/home-page/img-back.png', 'complete');
    customCompletedDesignList2.append(accordionCustomDesignInProgressItemOne);

} */




/* *********************************************** */
/******** FUNCTION CREATE CUSTOM DESIGN ITEM *******/
/* *********************************************** */
// function createCustomDesignItem( urlFront='', urlBack='', statusDesigns=''){
//     customDesignItemCount++;

//     let customDesignItem = createNewElement('div', 'custom-design-item mb-4 mb-xl-5');
//     customDesignItem.id = `custumDesignItem-${customDesignItemCount}`;

//     /* ROW */
//     let customDesignItemRow = createNewElement('div', 'row align-items-center');
//     customDesignItem.append(customDesignItemRow);

//     /* COLUMN INPUT */
//      let colInput = createNewElement('div', 'col-12 col-md-8');
//      customDesignItemRow.append(colInput);

//      let colInputContainer = createNewElement('div', 'position-relative');
//      colInput.append(colInputContainer);

//      let customDesignNameInput =  createNewElement('input', 'form-control text-xxs input-number-without-arrow custom-designs-name-input');
//      customDesignNameInput.name = 'Custom_Design_Name';
//      customDesignNameInput.type = 'text';
//      customDesignNameInput.value = 'EcoIceGrip Marketing Flyer';
//      customDesignNameInput.placeholder = 'Your custom design name';
//      colInputContainer.append(customDesignNameInput);

//      let editCustomDesignNameBtn = createNewElement('button', 'btn btn-link position-absolute text-drab text-xxs top-50 translate-middle is-disabled end-0 fw-normal p-0 js-custom-design-edit-name-btn', 'Edit Name');
//      editCustomDesignNameBtn.type = 'button';
//      editCustomDesignNameBtn.onclick = function() {

//         showSuccessInfoToast('Saved custom design name!');
//      };

//      colInputContainer.append(editCustomDesignNameBtn);
     

//     /* COLUMN TITLE */
//     let colTitle = createNewElement('div', 'col-12 col-md-4 text-center my-3 my-md-0');
//     customDesignItemRow.append(colTitle);
     
//     let customDesignItemTypeTitle = createNewElement('span', 'fw-semibold status-design-title');

//     if(statusDesigns == 'complete'){

//         customDesignItemTypeTitle.classList.add('text-green')
//         customDesignItemTypeTitle.innerText = 'Complete';
//     }

//     if(statusDesigns == 'review'){

//         customDesignItemTypeTitle.classList.add('text-orang');
//         customDesignItemTypeTitle.innerText = 'In Review';
//     }

//     colTitle.append(customDesignItemTypeTitle);


//     /* COLUMN CUSTOM DESIGN ITEM FRONT */
//     let colCustomDesignItemFront = createNewElement('div', 'col-12 col-md-6 custom-design-item-front mt-md-4');
//     customDesignItemRow.append(colCustomDesignItemFront);

//     let colCustomDesignItemFrontBg = createNewElement('div', 'bg-dark-blue mb-4 rounded-6 overflow-hidden text-white text-center cursor-pointer p-4 p-md-5 js-custom-design-card');
//     colCustomDesignItemFront.append(colCustomDesignItemFrontBg);

//     let colCustomDesignItemFrontBgImg = createNewElement('div', 'custom-design-item-image');
//     colCustomDesignItemFrontBgImg.style.backgroundImage = `url('${urlFront}')`;
//     colCustomDesignItemFrontBg.append(colCustomDesignItemFrontBgImg);

//     let colCustomDesignItemFrontBtnContainer = createNewElement('div', 'text-center text-lg-end d-none d-md-block');
//     colCustomDesignItemFront.append(colCustomDesignItemFrontBtnContainer);
    
//     let colCustomDesignItemFrontBtn = createNewElement('button', 'btn btn-white-with-border w-100 w-sm-75 w-md-100 w-lg-75 btn-request-changes', 'Request Changes');
//     colCustomDesignItemFrontBtn.dataset.bsTarget = '#modalCustomDesignChanges';
//     colCustomDesignItemFrontBtn.dataset.bsToggle = 'modal';
//     colCustomDesignItemFrontBtnContainer.append(colCustomDesignItemFrontBtn);

//     /* COLUMN CUSTOM DESIGN ITEM BACK */
//     let colCustomDesignItemBack = createNewElement('div', 'col-12 col-md-6 custom-design-item-back mt-md-4');
//     customDesignItemRow.append(colCustomDesignItemBack);

//     let colCustomDesignItemBackBg = createNewElement('div', 'bg-dark-blue mb-4 rounded-6 overflow-hidden text-white text-center cursor-pointer p-4 p-md-5 js-custom-design-card');
//     colCustomDesignItemBack.append(colCustomDesignItemBackBg);

//     let colCustomDesignItemBackBgImg = createNewElement('div', 'custom-design-item-image');
//     colCustomDesignItemBackBgImg.style.backgroundImage = `url('${urlBack}')`;
//     colCustomDesignItemBackBg.append(colCustomDesignItemBackBgImg);

//     let colCustomDesignItemBackBtnContainer = createNewElement('div', 'text-center text-lg-start');
//     colCustomDesignItemBack.append(colCustomDesignItemBackBtnContainer);
    
//     let colCustomDesignItemBackMobBtn = createNewElement('button', 'btn btn-white-with-border w-100 w-sm-75 w-md-100 w-lg-75 d-md-none mb-4 btn-request-changes-mob', 'Request Changes');
//     colCustomDesignItemBackMobBtn.dataset.bsTarget = '#modalCustomDesignChanges';
//     colCustomDesignItemBackMobBtn.dataset.bsToggle = 'modal';
//     colCustomDesignItemBackBtnContainer.append(colCustomDesignItemBackMobBtn);

//     let colCustomDesignItemBackBtn = createNewElement('button', 'btn btn-primary w-100 w-sm-75 w-md-100 w-lg-75 btn-design-approve', 'Approve');
//     colCustomDesignItemBackBtn.dataset.bsTarget = '#modalAreYouSureApproveDesign';
//     colCustomDesignItemBackBtn.dataset.bsToggle = 'modal';
//     colCustomDesignItemBackBtn.dataset.bsCustumDesignId = `custumDesignItem-${customDesignItemCount}`;
//     colCustomDesignItemBackBtn.dataset.bsCustumDesignName = customDesignNameInput.value;
//     colCustomDesignItemBackBtnContainer.append(colCustomDesignItemBackBtn);

//     return customDesignItem;
// }




/* *********************************************** */
/************ CUSTOM DESIGN CHAGNE NAME ************/
/* *********************************************** */
/* let customDesignsNameInput = document.querySelectorAll('.custom-designs-name-input');

if(customDesignsNameInput){
    
    customDesignsNameInput.forEach((input) => {
        input.addEventListener('keyup', () =>{

            let editNameBtn =  input.nextElementSibling;

           if (input.value){

                editNameBtn.innerHTML = 'Save';

                editNameBtn.classList.remove('text-drab');
                editNameBtn.classList.remove('is-disabled');
                editNameBtn.classList.add('text-primary');

           } else{
                editNameBtn.classList.add('text-drab');
                editNameBtn.classList.add('is-disabled');
                editNameBtn.classList.remove('text-primary');

                editNameBtn.innerHTML = 'Edit Name';

           }

        })
    })
}
 */




/* *********************************************** */
/*************** CUSTOM DESIGN APPROVE *************/
/* *********************************************** */
/* let areYouSureApproveDesignBtn = document.getElementById('areYouSureApproveDesignBtn');
let modalAreYouSureApproveDesignLabel = document.getElementById('modalAreYouSureApproveDesignLabel');

let modalAreYouSureApproveDesign = document.getElementById('modalAreYouSureApproveDesign');

if (modalAreYouSureApproveDesign){
    modalAreYouSureApproveDesign.addEventListener('show.bs.modal', function (event) { 

        let customDesignId = event.relatedTarget.getAttribute('data-bs-custum-design-id');
        let customDesignName = event.relatedTarget.getAttribute('data-bs-custum-design-name');

        areYouSureApproveDesignBtn.dataset.bsCustomDesignApproveBtn = customDesignId;

        modalAreYouSureApproveDesignLabel.innerHTML = `Are You sure Approve ${customDesignName}?`;
     
    });
}

if (areYouSureApproveDesignBtn){
    areYouSureApproveDesignBtn.addEventListener('click', customDesignApprove); 
}


function customDesignApprove(event){

    let btnId = event.target.getAttribute('data-bs-custom-design-approve-btn');
    let item = document.getElementById(btnId);

    let approveBtn = item.querySelector('.btn-design-approve');
    approveBtn.innerHTML = 'Print This Design';
    approveBtn.disabled = true;


    let btnRequestMob = item.querySelector('.btn-request-changes-mob');
    btnRequestMob.innerHTML = 'Request Variations';
    btnRequestMob.disabled = true;

    let btnRequest = item.querySelector('.btn-request-changes');
    btnRequest.innerHTML = 'Request Variations';
    btnRequest.disabled = true;

    let nameDesignInput = item.querySelector('.custom-designs-name-input');
    nameDesignInput.disabled = true;
    
    let title = item.querySelector('.status-design-title');
    title.innerHTML = 'Design Approved';
    title.className = 'fw-semibold status-design-title text-primary';


    showSuccessInfoToast('Approve design!');

}
 */




/* *********************************************** */
/******* CUSTOM DESIGN CLICK ITEM SHOW MODAL *******/
/* *********************************************** */
/* let customDesignCards = document.querySelectorAll('.js-custom-design-card');

if(customDesignCards){

    customDesignCards.forEach((btn) => {

        btn.addEventListener('click', () =>{

            let cardType = btn.parentElement.classList;

            for( let className of cardType){

                if(className == 'custom-design-item-front'){
                    createDesignFlyerBodyModal('assets/img/home-page/img-front.png', '', [],
                    'EcoIceGrip Marketing Flyer Front', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
                }

                if(className == 'custom-design-item-back'){
                    createDesignFlyerBodyModal('', 'assets/img/home-page/img-back.png', [],
                    'EcoIceGrip Marketing Flyer Back', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
                }
            }

            modalDesignFlyer.show();

        })

    })
} */




/* *********************************************** */
/********** CREATE ACCOUNT ADDRESS BOOK ITEM *******/
/* *********************************************** */
/* let shippingAddressCount = 0; */

let shippingAddress = {
    id: 'uiasdaw',
    nick_name: 'Home',
    name: 'John',
    email: 'john.smith@gmail.com',
    phone_numb: '1 (613) 444-3212',
    street_address_1: 'Street Address 123',
    street_address_2:'Street Address 456',
    country: 'Canada',
    province: 'Ontario',
    city: 'Ottawa',
    postal_code: '02-1242',
    default_address: true
}
let accountShippingAddressBookList = document.getElementById('accountAddressBookList');

if (accountShippingAddressBookList){

    let accountAddressBookItem = createShippingAddressItem(shippingAddress.id, shippingAddress.nick_name, shippingAddress.name, shippingAddress.email, shippingAddress.phone_numb, shippingAddress.street_address_1, shippingAddress.street_address_2, shippingAddress.country, shippingAddress.province, shippingAddress.city, shippingAddress.postal_code, shippingAddress.default_address);
    accountShippingAddressBookList.append(accountAddressBookItem);

 /*    let shippingAddressTitleInputFocus = accountAddressBookItem.querySelector('.shipping-address-title');
    shippingAddressTitleInputFocus.focus(); */

}




/* *********************************************** */
/************ CREATE SHIPPUNG ADDRESS ITEM *********/
/* *********************************************** */
// function createShippingAddressItem() {

//     if(shippingAddressCount == 0){
        
//         accountShippingAddressBookList.innerHTML = '';
//     }

//     shippingAddressCount++;

    

//     let accountShippingAddressItem = createNewElement('div', 'account-address-item mb-4 mb-lg-5');
//     accountShippingAddressItem.id = `account-address-item-${shippingAddressCount}`;

//     let accountShippingAddressForm = createNewElement('form', 'account-address-form');
//     accountShippingAddressItem.append(accountShippingAddressForm);

//     let row = createNewElement('div', 'row');
//     row.id = `shippingAddressItemRow-${shippingAddressCount}`;
//     accountShippingAddressForm.append(row);

//     let shippingAddressTitleInput = createNewElement('input', 'shipping-address-title text-md mb-2 text-center text-lg-start');
//     shippingAddressTitleInput.type = 'text';
//     shippingAddressTitleInput.placeholder = `Shipping Address-${shippingAddressCount}`;
//     row.append(shippingAddressTitleInput);

   
//     let hrLine = createNewElement('hr', 'text-drab mt-2 mx-3');
//     row.append(hrLine);


//     /* YOUR NAME COLUMN*/
//     let yourAddressNamecol = createNewElement('div', 'col-12 col-sm-6 mb-4');
//     row.append(yourAddressNamecol);

//     let addressNameLabel = createNewElement('label', 'form-label', 'Your Name');
//     addressNameLabel.setAttribute('for', `accountAddressBookName-${shippingAddressCount}`);
//     yourAddressNamecol.append(addressNameLabel);

//     let adressNameInput = createNewElement('input', 'form-control text-xxs');
//     adressNameInput.type = 'text';
//     adressNameInput.name = 'Your_Name';
//     adressNameInput.placeholder = 'John';
//     adressNameInput.id = `accountAddressBookName-${shippingAddressCount}`;
//     yourAddressNamecol.append(adressNameInput);


//     /* YOUR SURNAME COLUMN*/
//     let yourSurNameCol = createNewElement('div', 'col-12 col-sm-6 mb-4');
//     row.append(yourSurNameCol);

//     let surNameLabel = createNewElement('label', 'form-label', 'Your Surname');
//     surNameLabel.setAttribute('for', `accountAddressBookSurName-${shippingAddressCount}`);
//     yourSurNameCol.append(surNameLabel);

//     let surNameInput = createNewElement('input', 'form-control text-xxs');
//     surNameInput.type = 'text';
//     surNameInput.name = 'Your_Surname';
//     surNameInput.placeholder = 'Smith';
//     surNameInput.id = `accountAddressBookSurName-${shippingAddressCount}`;
//     yourSurNameCol.append(surNameInput);


//     /* EMAIL ADDRESS COLUMN*/
//     let emailAddressCol = createNewElement('div', 'col-12 col-sm-6 mb-4');
//     row.append(emailAddressCol);

//     let emailAddressLable = createNewElement('label', 'form-label', 'E-Mail Address');
//     emailAddressLable.setAttribute('for', `accountAddressBookEmail-${shippingAddressCount}`);
//     emailAddressCol.append(emailAddressLable);

//     let emailAddressInput = createNewElement('input', 'form-control text-xxs');
//     emailAddressInput.type = 'email';
//     emailAddressInput.name = 'E-Mail_Address';
//     emailAddressInput.placeholder = 'john.smith@gmail.com';
//     emailAddressInput.id = `accountAddressBookEmail-${shippingAddressCount}`;
//     emailAddressCol.append(emailAddressInput);


//     /* PHONE NUMBER COLUMN*/
//     let phoneNumberCol = createNewElement('div', 'col-12 col-sm-6 mb-4');
//     row.append(phoneNumberCol);

//     let phoneNumberLable = createNewElement('label', 'form-label', 'Phone Number');
//     phoneNumberLable.setAttribute('for', `accountAddressBookPhoneNum-${shippingAddressCount}`);
//     phoneNumberCol.append(phoneNumberLable);

//     let phoneNumberInput = createNewElement('input', 'form-control text-xxs input-number-without-arrow');
//     phoneNumberInput.type = 'number';
//     phoneNumberInput.name = 'Phone_Number';
//     phoneNumberInput.placeholder = '1 (613) 444-3212';
//     phoneNumberInput.id = `accountAddressBookPhoneNum-${shippingAddressCount}`;
//     phoneNumberCol.append(phoneNumberInput);


//     /* STREET ONE ADDRESS COLUMN*/
//     let streetAddressOneCol = createNewElement('div', 'col-12 mb-4');
//     row.append(streetAddressOneCol);

//     let streetAddressOneLable = createNewElement('label', 'form-label', 'Street Address 1');
//     streetAddressOneLable.setAttribute('for', `accountAddressBookStreetOne-${shippingAddressCount}`);
//     streetAddressOneCol.append(streetAddressOneLable);

//     let streetAddressOneInput = createNewElement('input', 'form-control text-xxs');
//     streetAddressOneInput.type = 'text';
//     streetAddressOneInput.name = 'Street_Address_1';
//     streetAddressOneInput.placeholder = 'john.smith@gmail.com';
//     streetAddressOneInput.id = `accountAddressBookStreetOne-${shippingAddressCount}`;
//     streetAddressOneCol.append(streetAddressOneInput);


//     /* STREET TWO ADDRESS COLUMN*/
//     let streetAddressTwoCol = createNewElement('div', 'col-12 mb-4');
//     row.append(streetAddressTwoCol);
   
//     let streetAddressTwoLable = createNewElement('label', 'form-label', 'Street Address 2');
//     streetAddressTwoLable.setAttribute('for', `accountAddressBookStreetTwo-${shippingAddressCount}`);
//     streetAddressTwoCol.append(streetAddressTwoLable);
   
//     let streetAddressTwoInput = createNewElement('input', 'form-control text-xxs');
//     streetAddressTwoInput.type = 'text';
//     streetAddressTwoInput.name = 'Street_Address_2';
//     streetAddressTwoInput.placeholder = 'john.smith@gmail.com';
//     streetAddressTwoInput.id = `accountAddressBookStreetTwo-${shippingAddressCount}`;
//     streetAddressTwoCol.append(streetAddressTwoInput);


//     /* SELECT COUNTRY */
//     let countrySelectCol = createNewElement('div', 'col-12 col-sm-6 mb-4');
//     row.append(countrySelectCol);
   
//     let countryLable = createNewElement('label', 'form-label', 'Country');
//     countryLable.setAttribute('for', `accountAddressBookCountry-${shippingAddressCount}`);
//     countrySelectCol.append(countryLable);
   
//     let countrySelect = createNewElement('select');
//     countrySelect.id = `accountAddressBookCountry-${shippingAddressCount}`;
//     countrySelectCol.append(countrySelect);

//     countries.forEach(cntr => {
//         let option = document.createElement('option');
//         option.dataset.icon = cntr.image;
//         option.innerText = cntr.name;
//         countrySelect.append(option);
//     })

//     initTomSelectByEl(countrySelect, tomSelectCountryOptions);


//     /* SELECT PROVINCE */
//     let provinceSelectCol = createNewElement('div', 'col-12 col-sm-6 mb-4');
//     row.append(provinceSelectCol);
//     let provinceLable = createNewElement('label', 'form-label', 'Province');
//     provinceLable.setAttribute('for', `accountAddressBookProvince-${shippingAddressCount}`);
//     provinceSelectCol.append(provinceLable);

//     let provinceSelect = createNewElement('select', 'tom-select');
//     provinceSelect.id = `accountAddressBookProvince-${shippingAddressCount}`;
//     provinceSelectCol.append(provinceSelect);

//     let provinceOption = createNewElement('option');
//     provinceOption.innerText = 'Ontario';
//     provinceOption.value = 'Ontario';

//     provinceSelect.append(provinceOption);

//     initTomSelectByEl(provinceSelect, tomSelectDefaultOptions);



//     /* SELECT CITY */
//     let citySelectCol = createNewElement('div', 'col-12 col-sm-6 mb-4');
//     row.append(citySelectCol);
//     let cityLable = createNewElement('label', 'form-label', 'City');
//     cityLable.setAttribute('for', `accountAddressBookCity-${shippingAddressCount}`);
//     citySelectCol.append(cityLable);
    
//     let citySelect = createNewElement('select', 'tom-select');
//     citySelect.id = `accountAddressBookCity-${shippingAddressCount}`;
//     citySelectCol.append(citySelect);
//     let cityOption = createNewElement('option');
//     cityOption.innerText = 'Ottawa';
//     cityOption.value = 'Ottawa';
//     citySelect.append(cityOption);

//     initTomSelectByEl(citySelect, tomSelectDefaultOptions);


//     /* POSTAL CODE COLUMN*/
//     let postalCodeCol = createNewElement('div', 'col-12 col-sm-6 mb-4');
//     row.append(postalCodeCol);
    
//     let postalCodeLable = createNewElement('label', 'form-label', 'Postal Code');
//     postalCodeLable.setAttribute('for', `accountAddressBookPostalCode-${shippingAddressCount}`);
//     postalCodeCol.append(postalCodeLable);
    
//     let postalCodeInput = createNewElement('input', 'form-control text-xxs');
//     postalCodeInput.type = 'text';
//     postalCodeInput.name = 'Postal_Code';
//     postalCodeInput.placeholder = 'A123';
//     postalCodeInput.id = `accountAddressBookPostalCode-${shippingAddressCount}`;
//     postalCodeCol.append(postalCodeInput);


//     /* FOOTER SHIPPING ADDRESS ITEM */
//     let footerContainer = createNewElement('div', 'd-lg-flex justify-content-between align-items-center mt-lg-4 text-center');
//     accountShippingAddressForm.append(footerContainer);

//     let footerContainerDivLeft = createNewElement('div');
//     footerContainer.append(footerContainerDivLeft);


//     /* DEFAULT SHIPPING ADDRESS INPUT */
//     let defaultShippingFormCheckDiv = createNewElement('div', 'form-check form-check-inline mb-4 mb-lg-0');
//     footerContainerDivLeft.append(defaultShippingFormCheckDiv);

//     let defaultShippingFormCheckInput = createNewElement('input', 'form-check-input form-check-input-circle me-2');
//     defaultShippingFormCheckInput.type = 'checkbox';
//     defaultShippingFormCheckInput.id = `accountAddressBookDefault-${shippingAddressCount}`;
//     defaultShippingFormCheckDiv.append(defaultShippingFormCheckInput);

//     let defaultShippingFormCheckLabel = createNewElement('label', 'form-check-label text-sm text-primary fw-semibold', 'Default Shipping Address');
//     defaultShippingFormCheckLabel.setAttribute('for', `accountAddressBookDefault-${shippingAddressCount}`);
//     defaultShippingFormCheckDiv.append(defaultShippingFormCheckLabel);


//     /* SHIPPING ADDRESS BTNS */
//     let footerContainerDivRight = createNewElement('div');
//     footerContainer.append(footerContainerDivRight);

//     let shippingAddressDeleteBtn = createNewElement('button', 'btn btn-white-with-border mb-2 mb-sm-0 me-2 me-xl-4', 'Delete Address');
//     shippingAddressDeleteBtn.type = 'button';
//     shippingAddressDeleteBtn.addEventListener('click', onclickShippingAddressDelete);
//     shippingAddressDeleteBtn.dataset.bsShippingAddressId = `account-address-item-${shippingAddressCount}`;
//     shippingAddressDeleteBtn.dataset.bsShippingAddressName = `Shipping Address-${shippingAddressCount}`;
//     footerContainerDivRight.append(shippingAddressDeleteBtn);

//     let shippingAddressEditBtn = createNewElement('button', 'btn btn-primary mb-2 mb-sm-0 me-2 me-xl-4 d-none', 'Edit Address');
//     shippingAddressEditBtn.type = 'button';
//     shippingAddressEditBtn.id = `shippingAddressEditBtn-${shippingAddressCount}`;
// /*     shippingAddressEditBtn.dataset.bsTarget = '#modalShippingAddressEdit';
//     shippingAddressEditBtn.dataset.bsToggle = 'modal'; */
//     shippingAddressEditBtn.addEventListener('click', onclickShippingAddressEditBtn);
//     footerContainerDivRight.append(shippingAddressEditBtn);

//     let shippingAddressSaveBtn = createNewElement('button', 'btn btn-primary mb-2 mb-sm-0 me-2 me-xl-4', 'Save Address');
//     shippingAddressSaveBtn.type = 'button';
//     shippingAddressSaveBtn.id = `shippingAddressSaveBtn-${shippingAddressCount}`;
//     shippingAddressSaveBtn.dataset.shippingAddressItem = `shippingAddressItemRow-${shippingAddressCount}`;
//     shippingAddressSaveBtn.addEventListener('click', onclickShippingAddressSave);
//     footerContainerDivRight.append(shippingAddressSaveBtn);


//     return accountShippingAddressItem;
// }


function createShippingAddressItem(id, nickName, name, email, phoneNumb, streetAddressOne, streetAddressTwo, country, province, city, postalCode, defaultAddress){

    let shippingAddressItem = createNewElement('div', 'mb-5 pb-lg-4');
    shippingAddressItem.id = id;

    let addressNickNameEl = createNewElement('h4', 'text-center text-lg-start', nickName);
    shippingAddressItem.append(addressNickNameEl);

    let row = createNewElement('div', 'row border-top-bg-light-purple row-cols-1 row-cols-md-2');
    shippingAddressItem.append(row);

    let colLeft = createNewElement('div', 'col');
    row.append(colLeft);

    let colRight = createNewElement('div', 'col');
    row.append(colRight);

    /* NAME */
    let addressNameEl = createNewElement('div', 'mb-2  d-flex text-sm');
    let addressNameTitle = createNewElement('span', 'fw-light w-25', 'Name:');
    addressNameEl.append(addressNameTitle);
    let addressName = createNewElement('span', 'fw-normal', name);
    addressNameEl.append(addressName);
    colLeft.append(addressNameEl);

    /* EMAIL */
    let addressEmailEl = createNewElement('div', 'mb-2 d-flex text-sm');
    let addressEmailTitle = createNewElement('span', 'fw-light w-25', 'E-Mail:');
    addressEmailEl.append(addressEmailTitle);
    let addressEmail = createNewElement('span', 'fw-normal', email);
    addressEmailEl.append(addressEmail);
    colLeft.append(addressEmailEl);

    /* PHONE NUMBER */
    let addressPhoneNumbEl = createNewElement('div', 'mb-2 d-flex text-sm');
    let addressPhoneNumTitle = createNewElement('span', 'fw-light w-25', 'Phone:');
    addressPhoneNumbEl.append(addressPhoneNumTitle);
    let addressPhoneNumb = createNewElement('span', 'fw-normal', phoneNumb);
    addressPhoneNumbEl.append(addressPhoneNumb);
    colLeft.append(addressPhoneNumbEl);

    /* STREET ADDRESS */
    let addressStreetEl = createNewElement('div', 'mb-2 fw-light d-flex text-sm');
    let addressTitle = createNewElement('span', 'fw-light w-25', 'Address:');
    addressStreetEl.append(addressTitle);
    let addressStreet = createNewElement('span', 'fw-normal ps-3 ps-sm-0 ps-md-4');

    if(streetAddressOne){
        addressStreet.innerHTML = streetAddressOne;
    }

    if(streetAddressTwo){
        addressStreet.innerHTML +=  '<br>' + streetAddressTwo;

    }

    addressStreet.innerHTML += '<br>' + city + ', ' + province + ', ' + country + ', ' + postalCode;

    addressStreetEl.append(addressStreet);
    colRight.append(addressStreetEl);

    // /* COUNTRY */
    // let addressCountryEl = createNewElement('div', 'mb-2 fw-normal d-flex justify-content-between text-sm', 'Country:');
    // let addressCountry = createNewElement('span', 'fw-light', country);
    // addressCountryEl.append(addressCountry);
    // colRight.append(addressCountryEl);

    // /* PROVINCE */
    // let addressProvinceEl = createNewElement('div', 'mb-2 fw-normal d-flex justify-content-between text-sm', 'Province:');
    // let addressProvince = createNewElement('span', 'fw-light', province);
    // addressProvinceEl.append(addressProvince);
    // colRight.append(addressProvinceEl);

    // /* CITY */
    // let addressCityEl = createNewElement('div', 'mb-2 fw-normal d-flex justify-content-between text-sm', 'City:');
    // let addressCity = createNewElement('span', 'fw-light', city);
    // addressCityEl.append(addressCity);
    // colRight.append(addressCityEl);

    // /* POSTAL CODE */
    // let addressPostalCodeEl = createNewElement('div', 'mb-2 fw-normal d-flex justify-content-between text-sm', 'Postal Code:');
    // let addressPostalCode = createNewElement('span', 'fw-light', postalCode);
    // addressPostalCodeEl.append(addressPostalCode);
    // colRight.append(addressPostalCodeEl);

    // /* STREET ADDRESS 2 */
    // let addressStreetTwoEl = createNewElement('div', 'mb-2 fw-normal d-flex justify-content-between text-sm', 'Street Address 2:');
    // let addressStreetTwo = createNewElement('span', 'fw-light', streetAddressTwo);
    // addressStreetTwoEl.append(addressStreetTwo);
    // colRight.append(addressStreetTwoEl);

    let rowBtns = createNewElement('div', 'row row-cols-1 row-cols-lg-2 my-4');
    shippingAddressItem.append(rowBtns);


    /* DEFAULT SHIPPING ADDRESS INPUT */
    let defaultShippingDiv = createNewElement('div', 'form-check form-check-inline d-flex justify-content-center justify-content-lg-start align-items-center ps-lg-5 mb-4 mb-lg-0 me-0');
    rowBtns.append(defaultShippingDiv);

    let defaultShippingInput = createNewElement('input', 'form-check-input form-check-input-circle me-2');
    defaultShippingInput.type = 'checkbox';
    defaultShippingInput.id = `shippingAddressDefault-${id}`;
    defaultShippingInput.checked = defaultAddress;
    defaultShippingDiv.append(defaultShippingInput);

    let defaultShippingLabel = createNewElement('label', 'form-check-label text-sm text-primary fw-semibold', 'Default Shipping Address');
    defaultShippingLabel.setAttribute('for', `shippingAddressDefault-${id}`);
    defaultShippingDiv.append(defaultShippingLabel);


    /* SHIPPING ADDRESS BTNS */
    let shippingAddressBtns = createNewElement('div', 'd-flex justify-content-center justify-content-lg-end');
    rowBtns.append(shippingAddressBtns);

    /* EDIT */
    let shippingAddressEditBtn = createCircleIconBtnAnimation('btn-orang', 'wa-wa-edit', 'Edit');
    shippingAddressEditBtn.classList.add('me-3');
    shippingAddressEditBtn.type = 'button';
    shippingAddressEditBtn.id = `shippingAddressEditBtn-${id}`;
    shippingAddressEditBtn.addEventListener('click', onclickShippingAddressEditBtn);
    shippingAddressEditBtn.dataset.shippingAddressId = id;

    shippingAddressBtns.append(shippingAddressEditBtn);

    /* DELETE */
    let shippingAddressDeleteBtn = createCircleIconBtnAnimation('btn-red', 'wa-wa-remove', 'Delete');
    shippingAddressDeleteBtn.type = 'button';
    shippingAddressDeleteBtn.addEventListener('click', onclickShippingAddressDelete);
    shippingAddressDeleteBtn.dataset.shippingAddressId = id;
    shippingAddressDeleteBtn.dataset.shippingAddressName = `Shipping Address ${nickName}`;

    shippingAddressBtns.append(shippingAddressDeleteBtn);


    

    return shippingAddressItem;

}




/* *********************************************** */
/******** ONCKICK SHIPPING ADDRESS SAVE BTN ********/
/* *********************************************** */
function onclickShippingAddressEditBtn(event) {

    let id = event.target.dataset.shippingAddressId;

    if (id){
        //TODO get api, populate data in modal 
        populateShippingAddressEditModal(shippingAddress);
    } else {
        addNewShippingAddress();
    }


    let modalShippingAddressEdit = new bootstrap.Modal(document.getElementById('modalShippingAddressEdit'), {});

    modalShippingAddressEdit.show();
}

function addNewShippingAddress(){
    document.getElementById('editShippingAddressForm').reset();
    
    let modalShippingAddressEditLabel = document.getElementById('modalShippingAddressEditLabel');
    modalShippingAddressEditLabel.innerHTML = 'Add Shipping Address';

  /*   let shippingAddressSaveBtn = document.getElementById('shippingAddressSaveBtn');

      updateShippingAddressItem()*/ /* TODO add script save shipping address */

}


function updateShippingAddressItem(){

    /* todo call api.put() */

    let accountAddressBookItem = createShippingAddressItem('32133123waw', 'Work Address', shippingAddress.name, shippingAddress.email, shippingAddress.phone_numb, shippingAddress.street_address_1, shippingAddress.street_address_2, shippingAddress.country, shippingAddress.province, shippingAddress.city, shippingAddress.postal_code, shippingAddress.default_address);
    accountShippingAddressBookList.append(accountAddressBookItem);
}


function populateShippingAddressEditModal(shippingAddressData){

    let modalShippingAddressEditLabel = document.getElementById('modalShippingAddressEditLabel');
    modalShippingAddressEditLabel.innerHTML = 'Edit Your Shipping Address';

    let editShippingAddressNickname = document.getElementById('editShippingAddressNickname');
    editShippingAddressNickname.value = shippingAddressData.nick_name;

    let editShippingAddressYourName = document.getElementById('editShippingAddressYourName');
    editShippingAddressYourName.value = shippingAddressData.name;

    let editShippingAddressYourEmail = document.getElementById('editShippingAddressYourEmail');
    editShippingAddressYourEmail.value = shippingAddressData.email;

    let editShippingAddressPhoneNumb = document.getElementById('editShippingAddressPhoneNumb');
    editShippingAddressPhoneNumb.value = shippingAddressData.phone_numb;

    let editShippingAddressStreetOne = document.getElementById('editShippingAddressStreetOne');
    editShippingAddressStreetOne.value = shippingAddressData.street_address_1;

    let editShippingAddressStreetTwo = document.getElementById('editShippingAddressStreetTwo');
    editShippingAddressStreetTwo.value = shippingAddressData.street_address_2;

    let editShippingAddressCountry = document.getElementById('editShippingAddressCountry');
    editShippingAddressCountry.value = shippingAddressData.country;

    let editShippingAddressProvince = document.getElementById('editShippingAddressProvince');
    editShippingAddressProvince.value = shippingAddressData.province;

    let editShippingAddressCity = document.getElementById('editShippingAddressCity');
    editShippingAddressCity.value = shippingAddressData.city;

    let editShippingAddressPostalCode = document.getElementById('editShippingAddressPostalCode');
    editShippingAddressPostalCode.value = shippingAddressData.postal_code;
}



/* *********************************************** */
/******** ONCKICK SHIPPING ADDRESS SAVE BTN ********/
/* *********************************************** */
function onclickShippingAddressSave(event){
    let saveAddressBtn = event.target;
    saveAddressBtn.classList.add('d-none');

    let shippingAddressId = saveAddressBtn.getAttribute('data-shipping-address-item');
    let shippingAddressItem = document.getElementById(shippingAddressId);
    shippingAddressItem.classList.add('js-disabled');

    let defaultShippingAddressInputCheckbox = saveAddressBtn.parentElement.previousElementSibling;
    defaultShippingAddressInputCheckbox.classList.add('js-disabled');

    let editAddressbtn = saveAddressBtn.previousElementSibling;
    editAddressbtn.classList.remove('d-none');

    showSuccessInfoToast('Saved your new Address!');
}   




/* *********************************************** */
/************* SHIPPING ADDRESS DELETE *************/
/* *********************************************** */
function onclickShippingAddressDelete(){

    let id = this.getAttribute('data-shipping-address-id');
    let name = this.getAttribute('data-shipping-address-name');
  
    createAreYouSureGlobalModal(`Are You sure delete shipping address (${name})?`, 'Delete Address', 'No, Take Me Back');
    bsAreYouSureGlobalModal.show();
  
    let deleteBtn = areYouSureGlobalModal.querySelector('#areYouSureGlobalModalMainBtn');
    deleteBtn.dataset.shippingAddressId = id;

    deleteBtn.onclick = onclickShippingAddressDeleteConfirmBtn;
}

function onclickShippingAddressDeleteConfirmBtn(ev){

    let shippingItem = document.getElementById(ev.target.getAttribute('data-shipping-address-id'));

    if(shippingItem != null){
        shippingItem.remove(); 
    }

    if(!accountShippingAddressBookList.hasChildNodes()){
        accountShippingAddressBookList.innerHTML = '';

        let addAdressTitle = createNewElement('h4','m-auto mt-4 text-center w-sm-75', 'You have no saved addresses. Use the button above to add an address.');
        addAdressTitle.id = 'addShippingAddressTitleInfo';
        accountShippingAddressBookList.append(addAdressTitle);
        document.querySelector('main').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    
    }
}





/* *********************************************** */
/******* ADD  NEW ADDRESS BTN EVENT CLICK **********/
/* *********************************************** */
let addNewAddressBtn = document.getElementById('addNewAddressBtn');

if (addNewAddressBtn) {
    addNewAddressBtn.addEventListener('click', (event) => {

        event.preventDefault();
        onclickShippingAddressEditBtn(event)

        if(document.getElementById('addShippingAddressTitleInfo')){
            document.getElementById('addShippingAddressTitleInfo').remove();
        }
        
    });
}




/* 

function changeElementInnerHtml(uuid, className, newHtml) {
  const parentDiv = document.getElementById(uuid);
  const element = parentDiv.querySelector('.' + className);
  element.innerHTML = newHtml;
}


*/






/* *********************************************** */
/************** CREATE ORDER HISTORY ITEM **********/
/* *********************************************** */
let orderHistoryCount = 0;

let accordionOrdersHistory = document.getElementById('accordionOrdersHistory');

if (accordionOrdersHistory) {

    let accordionOrdersHistoryItemOne = createOrderHistoryItem();
    accordionOrdersHistory.append(accordionOrdersHistoryItemOne);

    let accordionOrdersHistoryItemTwo = createOrderHistoryItem();
    accordionOrdersHistory.append(accordionOrdersHistoryItemTwo);

}





/* *********************************************** */
/************** CREATE ORDER HISTORY ITEM **********/
/* *********************************************** */
function createOrderHistoryItem() {

    let orderNumb = '#0072ab12';
    let orderDate = 'January, 23, 2023';
    let orderStatus = 'Finished';
    let orderTotal = '$350.00';
    let orderBy = 'John Smith';


    let shipToContactData = 'John Smith, Company Name john.smith@gmail.com';
    let shipToAddress = 'Street Address 123, A123 Ottawa, Canada';

    let accountCreditTotal = '$100';
    let creditCardPaidTotal = '$150';

    let typeCreditCardPaid = 'Mastercard (**** **** **** 1234)';

    let itemsTotal = '$190.50';
    let turnaroundTotal = '$30.30';
    let shippingTotal = '$20.00';
    let taxTotal = '$5.00';
    let paidTotalSum = '$255.00';

    orderHistoryCount++;

    let accordionOrdersHistoryItem = createNewElement('div', 'accordion-item');

    /* ACCORDION HEADER */
    let accordionHeader = createNewElement('h2', 'accordion-header');
    accordionHeader.id = `accordionOrdersHistoryHeading-${orderHistoryCount}`;
    accordionOrdersHistoryItem.append(accordionHeader);

    /* ACCORDION HEADER BTN */
    let accordionHeaderBtn = createNewElement('button', 'accordion-button accordion-order-history-btn collapsed row-cols-2 row-cols-md-4 flex-wrap flex-lg-row');
    accordionHeaderBtn.type = 'button';
    accordionHeaderBtn.dataset.bsToggle = 'collapse';
    accordionHeaderBtn.dataset.bsTarget = `#accordionOrdersHistoryCollapse-${orderHistoryCount}`;
    accordionHeaderBtn.setAttribute('aria-expanded', 'true');
    accordionHeaderBtn.setAttribute('aria-controls', `accordionOrdersHistoryCollapse-${orderHistoryCount}`);
    accordionHeader.append(accordionHeaderBtn);

    /* ACCORDION HEADER SUMMARY */
    /* ORDER HISTORY NUMBER */
    let orderHistoryNumb = createNewElement('div', 'col pe-3 mb-3 mb-lg-0');
    let orderHistoryNumbTitle = createNewElement('span', 'text-xxxs text-grey d-block mb-1', 'Order Number');
    orderHistoryNumb.append(orderHistoryNumbTitle);
    let orderNumbEl = createNewElement('span', 'fw-normal d-block break-word', `Order ${orderNumb}`);
    orderHistoryNumb.append(orderNumbEl);
    accordionHeaderBtn.append(orderHistoryNumb);

    /* ORDER HISTORY DATE */
    let orderHistoryDate = createNewElement('div', 'col pe-3 mb-3 mb-lg-0');
    let orderHistoryDateTitle = createNewElement('span', 'text-xxxs text-grey d-block mb-1', 'Order Date');
    orderHistoryDate.append(orderHistoryDateTitle);
    let orderDateEl = createNewElement('span', 'fw-normal d-block break-word', `${orderDate}`);
    orderHistoryDate.append(orderDateEl);
    accordionHeaderBtn.append(orderHistoryDate);

    /* ORDER HISTORY STATUS */
    let orderHistoryStatus = createNewElement('div', 'col pe-3');
    let orderHistoryStatusTitle = createNewElement('span', 'text-xxxs text-grey d-block mb-1', 'Status');
    orderHistoryStatus.append(orderHistoryStatusTitle);
    let orderStatusEl = createNewElement('span', 'fw-normal d-block break-word text-green', `${orderStatus}`);
    orderHistoryStatus.append(orderStatusEl);
    accordionHeaderBtn.append(orderHistoryStatus);

    /* ORDER HISTORY TOTAL */
    let orderHistoryTotal = createNewElement('div', 'col pe-5');
    let orderHistoryTotalTitle = createNewElement('span', 'text-xxxs text-grey d-block mb-1', 'Total');
    orderHistoryTotal.append(orderHistoryTotalTitle);
    let orderTotalEl = createNewElement('span', 'fw-normal d-block break-word', `${orderTotal}`);
    orderHistoryTotal.append(orderTotalEl);
    accordionHeaderBtn.append(orderHistoryTotal);


    /* ACCORDION COLLAPSE */
    let accordionCollapse = createNewElement('div', 'accordion-collapse collapse');
    accordionCollapse.id = `accordionOrdersHistoryCollapse-${orderHistoryCount}`;
    accordionCollapse.setAttribute('aria-labelledby', `accordionOrdersHistoryCollapse-${orderHistoryCount}`);
    accordionCollapse.dataset.bsParent = '#accordionOrdersHistory';
    accordionOrdersHistoryItem.append(accordionCollapse);
    
    /* ACCORDION BODY */
    let accordionBody = createNewElement('div', 'accordion-body');
    accordionCollapse.append(accordionBody);


   /* ACCORDION ORDER SUMMARY */
    let rowOne = createNewElement('div', 'row px-4 row-cols-1 row-cols-md-2');
    accordionBody.append(rowOne);

    /* ORDER NUMBER */
    let accordionOrderNumberDiv = createNewElement('div', 'col d-flex justify-content-between mb-4');
    let accordionOrderNumberTitle = createNewElement('div', 'fw-semibold', 'Order Number:'); 
    let accordionOrderNumberEl = createNewElement('div', '', orderNumb); 
    accordionOrderNumberDiv.append(accordionOrderNumberTitle);
    accordionOrderNumberDiv.append(accordionOrderNumberEl);
    rowOne.append(accordionOrderNumberDiv);

    /* ORDER DATE */
    let accordionOrderDateDiv = createNewElement('div', 'col d-flex justify-content-between mb-4');
    let accordionOrderDateTitle = createNewElement('div', 'fw-semibold', 'Order Date:'); 
    let accordionOrderDateEl = createNewElement('div', '', orderDate); 
    accordionOrderDateDiv.append(accordionOrderDateTitle);
    accordionOrderDateDiv.append(accordionOrderDateEl);
    rowOne.append(accordionOrderDateDiv);

    /* ORDER BY */
    let accordionOrderByDiv = createNewElement('div', 'col d-flex justify-content-between mb-4');
    let accordionOrderByTitle = createNewElement('div', 'fw-semibold', 'Order By:'); 
    let accordionOrderByEl = createNewElement('div', '', orderBy); 
    accordionOrderByDiv.append(accordionOrderByTitle);
    accordionOrderByDiv.append(accordionOrderByEl);
    rowOne.append(accordionOrderByDiv);

    /* ORDER STATUS */
    let accordionOrderStatusDiv = createNewElement('div', 'col d-flex justify-content-between mb-4');
    let accordionOrderStatusTitle = createNewElement('div', 'fw-semibold', 'Order Status:'); 
    let accordionOrderStatusEl = createNewElement('div', '', orderStatus); 
    accordionOrderStatusDiv.append(accordionOrderStatusTitle);
    accordionOrderStatusDiv.append(accordionOrderStatusEl);
    rowOne.append(accordionOrderStatusDiv);

    let hr = createNewElement('hr', 'text-drab mt-0 mb-4');
    accordionBody.append(hr);

    
    /* ORDER HISTORY DATA */
    let rowTwo = createNewElement('div', 'row px-4');
    accordionBody.append(rowTwo);

    for (let orderHistoryData = 0; orderHistoryData < 2; orderHistoryData++) {

        let orderHistoryDataCol = createNewElement('div', 'col-12 col-xl-6 mb-4');
        rowTwo.append(orderHistoryDataCol);

        let orderHistoryDataTitle = createNewElement('h3', 'text-sm mb-3 fw-semibold', 'Ship To: ');

        if (orderHistoryData == 1){

            orderHistoryDataTitle.innerHTML = 'Bill To: ';

        }

        orderHistoryDataCol.append(orderHistoryDataTitle);

        let orderHistoryDataColRow = createNewElement('div', 'row row-cols-1 row-cols-sm-2');
        orderHistoryDataCol.append(orderHistoryDataColRow);

        let orderHistoryDataContactDataDiv = createNewElement('div');
        orderHistoryDataColRow.append(orderHistoryDataContactDataDiv);

        let orderHistoryDataEl = createNewElement('p', 'text-xs lh-sm pe-xxl-5', shipToContactData);
        orderHistoryDataContactDataDiv.append(orderHistoryDataEl);

        let orderHistoryDataAddressDiv = createNewElement('div');
        orderHistoryDataColRow.append(orderHistoryDataAddressDiv);

        let orderHistoryDataAddressEl = createNewElement('p', 'text-xs lh-sm', shipToAddress);
        orderHistoryDataAddressDiv.append(orderHistoryDataAddressEl);
    }
    

    /* ORDER HISTORY PAY DATA*/
    let rowThree = createNewElement('div', 'row px-4');
    accordionBody.append(rowThree);

    /* ORDER HISTORY PAY DATA CARD*/
    let orderHistoryPayDataCardCol = createNewElement('div', 'col-12 col-xl-6 mb-4');
    rowThree.append(orderHistoryPayDataCardCol);

    let orderHistoryPayDataCardTitle = createNewElement('h3', 'text-sm mb-3 fw-semibold', 'Paid by:');
    orderHistoryPayDataCardCol.append(orderHistoryPayDataCardTitle);

    let orderHistoryAccountCreditCardDiv = createNewElement('div', '', 'Account Credit');
    orderHistoryPayDataCardCol.append(orderHistoryAccountCreditCardDiv);

    let orderHistoryAccountCreditCardTotal = createNewElement('span', 'me-2', accountCreditTotal);
    orderHistoryAccountCreditCardDiv.prepend(orderHistoryAccountCreditCardTotal);

    let orderHistoryCreditCardDiv = createNewElement('div', '', `Credit Card - ${typeCreditCardPaid}`);
    orderHistoryPayDataCardCol.append(orderHistoryCreditCardDiv);

    let orderHistoryCreditCardTotal = createNewElement('span', 'me-2', creditCardPaidTotal);
    orderHistoryCreditCardDiv.prepend(orderHistoryCreditCardTotal);


    /* ORDER HISTORY PAY TOTAL*/
    let orderHistoryPayTotalCol = createNewElement('div', 'col-12 col-xl-6 mb-4');
    rowThree.append(orderHistoryPayTotalCol);

    let orderHistoryPayTotalTitle = createNewElement('h3', 'text-sm mb-3 fw-semibold', 'Paid by:');
    orderHistoryPayTotalCol.append(orderHistoryPayTotalTitle);

    orderHistoryPayTotalColDiv = createNewElement('div');
    orderHistoryPayTotalCol.append(orderHistoryPayTotalColDiv);

    for (let totalItem = 1; totalItem <= 4; totalItem++) {

        let totalItemDiv = createNewElement('div', 'd-flex justify-content-between');
        orderHistoryPayTotalColDiv.append(totalItemDiv);

        let totalItemTitle = createNewElement('span');
        totalItemDiv.append(totalItemTitle);

        let totalItemSum = createNewElement('span', 'fw-bold text-end');
        totalItemDiv.append(totalItemSum);


        if (totalItem == 1){

            totalItemTitle.innerText = 'Items Total';
            totalItemSum.innerText = itemsTotal;

        } else if (totalItem == 2){

            totalItemTitle.innerText = 'Turnaround Total';
            totalItemSum.innerText = turnaroundTotal;

        } else if (totalItem == 3){

            totalItemTitle.innerText = 'Shipping';
            totalItemSum.innerText = shippingTotal;

        } else if (totalItem == 4){

            totalItemTitle.innerText = 'Tax';
            totalItemSum.innerText = taxTotal;

        }

    }

    let designLine = createNewElement('hr', 'text-drab my-2');
    orderHistoryPayTotalCol.append(designLine);

    let orderSummaryPaidDiv = createNewElement('div', 'd-flex justify-content-between align-items-center');
    orderHistoryPayTotalCol.append(orderSummaryPaidDiv);

    let orderSummaryPaidTitle = createNewElement('h4', 'fw-bold text-xs mb-0', 'Grand Total');
    orderSummaryPaidDiv.append(orderSummaryPaidTitle);

    let orderSummaryPaidTotalSum = createNewElement('span', 'fw-bold text-xs text-primary', paidTotalSum);
    orderSummaryPaidDiv.append(orderSummaryPaidTotalSum);


    /* ITEMS ORDERED */

    let itemsOrderedTitle = createNewElement('h3', 'text-sm mb-3 fw-semibold text-center text-md-start px-4', 'Items Ordered:');
    accordionBody.append(itemsOrderedTitle);

    let yourCartsHistory = createNewElement('div', 'your-carts-history');
    accordionBody.append(yourCartsHistory);
    

    let countCartItem = 2;

    for (let index = 0; index < countCartItem; index++) {

        let cartItem = createOrderHistoryCartItem();
        yourCartsHistory.append(cartItem);
        
    }

    yourCartsHistory.querySelectorAll('.glightbox').forEach((el) => el.addEventListener('click', (e) => {
        e.preventDefault();
        const lightbox = GLightbox();
        lightbox.open(); 
    }));

    return accordionOrdersHistoryItem;
    
}





/* *********************************************** */
/*************** CREATE YOUR CART ITEM *************/
/* *********************************************** */

function createOrderHistoryCartItem(){

    yourCartHistoryItemCount++;

    let urlFrontImg = '/assets/img/img-cart/img-cart.png';
    let yourProductName = 'Standard Business Card';
    let expectedProduct = 'Standard Production (expected nov. 28, 2202 - dec. 1, 2022)';
    
    let productAmount = '3';
    let productPrice = '$33.00';

    let yourCartItem = createNewElement('div');

    let yourCartContainer = createNewElement('div', 'your-cart-container your-cart-history-container p-4');
    yourCartItem.append(yourCartContainer);


    /* YOUR CART img  */
    let yourCartImageContainer = createNewElement('div', 'your-cart-image');
    yourCartContainer.append(yourCartImageContainer);


    /* YOUR CART img */
    let yourCartImageDiv = createNewElement('div');
    yourCartImageContainer.append(yourCartImageDiv);

    let yourCartImage = createNewElement('div', 'your-cart-img m-auto');
    yourCartImage.style.backgroundImage = `url('${urlFrontImg}')`;
    yourCartImageDiv.append(yourCartImage);

    let yourCartImageBtn = createNewElement('a', 'btn-link text-drab text-xs fw-normal text-center d-none mt-3 d-lg-block glightbox', 'Front/Back');
    yourCartImageBtn.href = urlFrontImg;
    yourCartImageDiv.append(yourCartImageBtn);

    let yourCartImageBtnIcon = createNewElement('span', 'fi-rr-zoom-in me-1');
    yourCartImageBtn.prepend(yourCartImageBtnIcon);

    let yourCartImageBtnMobile = createNewElement('a', 'btn-link text-drab text-xs fw-normal text-center d-block mt-3 d-lg-none glightbox', 'Front / Back');
    yourCartImageBtnMobile.href = urlFrontImg;
    yourCartImageDiv.append(yourCartImageBtnMobile);


    /* YOUR CART NAME */
    let yourCartNameContainer = createNewElement('div', 'your-cart-name d-xl-flex justify-content-between align-items-lg-center text-center text-sm-start my-3 my-sm-0');
    yourCartContainer.append(yourCartNameContainer);

    let yourCartProductName = createNewElement('div', 'fw-semibold d-flex align-items-center justify-content-between justify-content-lg-start mb-3 mb-xl-0', yourProductName);
    yourCartNameContainer.append(yourCartProductName);


    /* ORDER HISTORY OPTIONS BTN */

    let dropdown = createNewElement('div', 'dropdown');
    yourCartProductName.append(dropdown);


    let optionBtn = createNewElement('button', 'btn btn-link p-0 ms-3 text-black text-md');
    optionBtn.type = 'button';
    optionBtn.id = `order-history-options-${yourCartHistoryItemCount}`;
    optionBtn.dataset.bsToggle = 'dropdown';
    optionBtn.setAttribute('aria-expanded', 'false');
    dropdown.append(optionBtn);

    let moreCircleIcon = createNewElement('span', 'icon-more-circle');
    optionBtn.append(moreCircleIcon);

    let dropMenu = createNewElement('ul', 'dropdown-menu dropdown-menu-order-history');
    dropMenu.setAttribute('aria-labelledby', `order-history-options-${yourCartHistoryItemCount}`);

    let titleOption = createNewElement('h4', 'text-sm title', 'Options');
    dropMenu.append(titleOption);


    let addToSavedJobsList = createNewElement('li','', '<a class="dropdown-item text-sm">Add to Saved Jobs</a>')
    dropMenu.append(addToSavedJobsList);

    let addToCardList = createNewElement('li','', '<a class="dropdown-item text-sm">Add to Card</a>')
    dropMenu.append(addToCardList);

    optionBtn.append(dropMenu);
   

    let quantityCartPriceDiv =  createNewElement('div', 'input-group input-with-link w-xl-50 d-flex justify-content-between');
    yourCartNameContainer.append(quantityCartPriceDiv);

    let quantityCartAmount =  createNewElement('span', 'fw-bold ms-1 me-3', 'Quantity:');
    quantityCartAmount.innerHTML += productAmount;
    quantityCartPriceDiv.append(quantityCartAmount);

    let quantityCartPrice =  createNewElement('span', 'me-4 text-drab');
    quantityCartPrice.innerHTML += productPrice;
    quantityCartPriceDiv.append(quantityCartPrice);


    /* YOUR CART EXPECTED DESC */
    let yourCartExpectedDescContainer = createNewElement('div', 'your-cart-expected-desc my-3 my-sm-0 text-center text-sm-start');
    yourCartContainer.append(yourCartExpectedDescContainer);

    let yourCartExpectedDesc = createNewElement('span', 'expected-desc text-grey text-xs fst-italic lh-sm', expectedProduct);
    yourCartExpectedDescContainer.append(yourCartExpectedDesc);
    


    /* YOUR CART DESC */
    let yourCartDesc = createNewElement('div', 'your-cart-desc text-center text-lg-start');
    yourCartContainer.append(yourCartDesc);

    let yourCartDescRow = createNewElement('div', 'row row-cols-2 row-cols-sm-3 row-cols-xl-4 gy-4 align-self-start');
    yourCartDesc.append(yourCartDescRow);

    for (let index = 1; index <= 8; index++) {

        let cartDescCol = createNewElement('span', 'text-xs');
        let cartDescProductType = createNewElement('span', 'fw-semibold');

        if (index == 1) {
            cartDescCol.innerText = 'Sided ';
            cartDescProductType.innerText = 'Double';

        } else  if (index == 2) {
            cartDescCol.innerText = 'Finish ';
            cartDescProductType.innerText = 'Matte';
        } else  if (index == 3) {
            cartDescCol.innerText = 'Card Stock ';
            cartDescProductType.innerText = '14pt';
        } else  if (index == 4) {
            cartDescCol.innerText = 'Corners ';
            cartDescProductType.innerText = 'Rounded';
        } else  if (index == 5) {
            cartDescCol.innerText = 'Corners ';
            cartDescProductType.innerText = 'Rounded';
        } else  if (index == 6) {
            cartDescCol.innerText = 'Corners ';
            cartDescProductType.innerText = 'Rounded';
        } else  if (index == 7) {
            cartDescCol.innerText = 'Corners ';
            cartDescProductType.innerText = 'Rounded';
        } else  if (index == 8) {
            cartDescCol.innerText = 'Corners ';
            cartDescProductType.innerText = 'Rounded';
        }

        yourCartDescRow.append(cartDescCol);
        cartDescCol.append(cartDescProductType);
        
    }

    return yourCartItem;
}