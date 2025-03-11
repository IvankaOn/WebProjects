var yourCredits = {
    summary: {
        credits: 1000.00
    },
    coupons: {
        name: 'Discount Rate',
        value: '15%',
        type: 'Realtor Coupon'
    },
    latest_transactions: [
        {
            name: 'Welcome Bonus',
            credits: 1000,
            date: '08.05.2023',
            type: 'Bonus Points'
        },
        {
            name: 'Business Cards Printing',
            credits: -500,
            date: '07.02.2023',
            type: 'Printing'
        },
        {
            name: 'Business Cards Printing',
            credits: 100,
            date: '07.02.2023',
            type: 'Return'
        }
    ]
};




let creditsCardsSummaryRow = document.getElementById('creditsCardsSummaryRow');
let creditCardsActionBtns = document.getElementById('creditCardsActionBtns');


/* *********************************************** */
/******** CREATE CREDITS CARDS SUMMARY ROW *********/
/* *********************************************** */
if(creditsCardsSummaryRow){
    
    creditsCardsSummaryShow(yourCredits); /*  todo Api.get() credits cards summary */
}

function creditsCardsSummaryShow(result){

    let colLeft = createNewElement('div', 'col-12 col-lg-5 col-xl-4 d-md-flex d-lg-block gap-3');
    creditsCardsSummaryRow.append(colLeft);
    
    let couponBase = createCoupon('Balance', 'Credit', `$${result.summary.credits}`, false);
    colLeft.append(couponBase);

    if(result.coupons){
        let couponPro = createCoupon(result.coupons.name, result.coupons.type, result.coupons.value, true);
        colLeft.append(couponPro);
    }

    let colRight = createNewElement('div', 'col-12 col-lg-7 col-xl-8');
    creditsCardsSummaryRow.append(colRight);

    let latestTransactionsTitle = createNewElement('div', 'fw-semibold text-xs mt-3', 'Latest Transactions');
    colRight.append(latestTransactionsTitle);
    
    let latestTransactionsList = createNewElement('div', 'latest-transactions-list');
    colRight.append(latestTransactionsList);

    
    if(result.latest_transactions){
        result.latest_transactions.forEach(list => {

            let listEl = createLatestTransactionsItem(list.name, list.type, list.credits, list.date);
            latestTransactionsList.append(listEl);
        })
    
    }

    let fullHistoryBtn = createNewElement('a', 'btn btn-link text-grey text-xxs d-block', 'Expand Full History');
    colRight.append(fullHistoryBtn);

}


function createCoupon(name, type, price, pro){

    let coupon = createNewElement('div', 'coupon mb-3');

    let wrap = createNewElement('div', 'wrap');
    coupon.append(wrap);

    let titleEl = createNewElement('span', 'title', name);
    wrap.append(titleEl);

    let priceEl = createNewElement('span', 'price', price);
    wrap.append(priceEl);

    let typeEl = createNewElement('span', 'type', type);
    wrap.append(typeEl);


    if(pro){
        coupon.classList.add('pro');
    } else{
        coupon.classList.add('base-coupon');
        
    }

    return coupon;
}


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
    }


    let colTwo = createNewElement('span', 'd-flex justify-content-between');
    item.append(colTwo);

    let typeEl = createNewElement('span', 'text-xxxs text-primary fw-semibold', type);
    colTwo.append(typeEl);

    let dateEl = createNewElement('span', 'text-xxxs', date);
    colTwo.append(dateEl);


    return item;

}






/* *********************************************** */
/************ CREATE CREDIT CARDS ITEM *************/
/* *********************************************** */
let creditCardItemCount = 0;

function createCreditCardItem(cardNumberVisa = '4111 1111 1111 1111', cardType = 'mastercard', cardColor = 'orange', cardHolderName = 'JOHN SMITH', expDateMonth = '08', expDateYear = '23') {
    creditCardItemCount++;

    let creditCardsRow = document.getElementById('creditCardsRow');

    if (creditCardsRow){

        let creditCardCol = createNewElement('div', 'col-12 col-md-10 col-lg-12 col-xl-6 js-credit-card-item');
        creditCardCol.id = `account-credit-card-item-${creditCardItemCount}`
        creditCardsRow.append(creditCardCol);

        let creditCardBlockRow = createNewElement('div', 'row w-xl-100');
        creditCardCol.append(creditCardBlockRow);
        
        let creditCardBlockCol = createNewElement('div', 'col-12 col-lg-7 col-xl-12');
        creditCardBlockRow.append(creditCardBlockCol);

        let creditCard = createCreditCard(cardNumberVisa, cardType, cardColor, cardHolderName, expDateMonth, expDateYear);
        creditCard.classList.add('m-auto');

        creditCardBlockCol.append(creditCard);  

        let creditCardColBts = createNewElement('div', 'col-12 col-lg-5 col-xl-12');
        creditCardBlockRow.append(creditCardColBts);

        let creditCardColBtsBlock = createNewElement('div', 'd-flex flex-lg-column flex-xl-row align-items-center');
        creditCardColBts.append(creditCardColBtsBlock);

        let creditCardDeleteBtn = createNewElement('button', 'btn btn-white-with-border w-50 w-lg-75 w-xl-50 me-2 me-xl-4 mb-lg-4 mb-xl-0', 'Delete Card');
        creditCardDeleteBtn.type = 'button';
        creditCardDeleteBtn.addEventListener('click', creditCardItemDelete);
        creditCardDeleteBtn.dataset.creditCardId = `account-credit-card-item-${creditCardItemCount}`;
        creditCardDeleteBtn.dataset.creditCardName = cardNumberVisa;
        creditCardColBtsBlock.append(creditCardDeleteBtn);

        let creditCardEditBtn = createNewElement('button', 'btn btn-primary w-50 w-lg-75 w-xl-50', 'Edit Card');
        creditCardEditBtn.type = 'button';
        creditCardEditBtn.dataset.bsTarget = '#modalEditYourCardAccount';
        creditCardEditBtn.dataset.bsToggle = 'modal';
        creditCardColBtsBlock.append(creditCardEditBtn);

        let designLine = createNewElement('hr', 'text-drab me-xl-4 my-4');
        creditCardCol.append(designLine);

    }

}




/* *********************************************** */
/*** MODAL SHOW ARE YOU SURE DELETE CREDIT CARD ****/
/* *********************************************** */
function creditCardItemDelete() {
    let name = this.getAttribute('data-credit-card-name');
    let id = this.getAttribute('data-credit-card-id');
  
    createAreYouSureGlobalModal(`Are you sure you want to delete card (${name})?`, 'Delete Card', 'No, Take Me Back');
  
    bsAreYouSureGlobalModal.show();
  
    let deleteBtn = areYouSureGlobalModal.querySelector('#areYouSureGlobalModalMainBtn');
    deleteBtn.dataset.creditCardId = id;
  
    deleteBtn.onclick = onclickCreditCardDeleteConfirmBtn;
}

function onclickCreditCardDeleteConfirmBtn(ev){

    /* TODO api.delete() */
    let el = document.getElementById(ev.target.getAttribute('data-credit-card-id'));
    el.remove(); 
}




/* *********************************************** */
/****** CREATE ADD EDIT CREDIT CARD FORM DATA ******/
/* *********************************************** */
function createAddEditCreditCardFormData(cardNumber = '', cardType = '', cardColor = '', cardName = '', cardThruMonth = '', cardThruYear = '', cardCvv = ''){
    let defaultCardName = 'JOHN SMITH';
    let defaultCardNumb = '4111 1111 1111 1123';
    let defaultCardThruMonth = '08';
    let defaultCardThruYear = '23';
    let defaultCardCvv = '&#8226;&#8226;&#8226;';
    let defaultCardType = 'mastercard';
    let defaultCardColor = 'red';


    let row = createNewElement('div', 'row justify-content-center');

    let col = createNewElement('div', 'col-12 col-lg-10');
    row.append(col);

    let accountAddYourCardEl = createNewElement('div');
    accountAddYourCardEl.id = 'accountAddYourCardEl';
    col.append(accountAddYourCardEl);

    let card = createCreditCard(cardNumber ? cardNumber : defaultCardNumb, cardType ? cardType: defaultCardType, cardColor ? cardColor : defaultCardColor, cardName ? cardName : defaultCardName, cardThruMonth ? cardThruMonth : defaultCardThruMonth, cardThruYear ? cardThruYear : defaultCardThruYear, cardCvv ? cardCvv : defaultCardCvv);
    accountAddYourCardEl.append(card);


    let rowForm = createNewElement('div', 'row align-items-end');
    col.append(rowForm);


    /* NUMBER CARD */
    let cardNumbCol = createNewElement('div', 'col-12 mb-4');
    rowForm.append(cardNumbCol);

    let cardNumbLabel = createNewElement('label', 'form-label', 'Credit Card Number');
    cardNumbLabel.setAttribute('for', 'accountAddEditCardNumb');
    cardNumbCol.append(cardNumbLabel);

    let cardNumbDiv = createNewElement('div', 'position-relative');
    cardNumbCol.append(cardNumbDiv);

    let cardTypeDiv = createNewElement('div','card-type');

    cardTypeDiv.classList.add(cardType == '' ? defaultCardType : cardType);
    
    cardNumbDiv.append(cardTypeDiv);

    let cardNumbInput = createNewElement('input', 'w-100 text-xxs form-control card-type-input credit-card-number');
    cardNumbInput.name = 'Credit_Card_Number';
    cardNumbInput.value = cardNumber;
    cardNumbInput.id = 'accountAddEditCardNumb';
    cardNumbInput.placeholder = '2412 - 2412 - 2412 - 2412';
    cardNumbInput.setAttribute('onkeyup', '$cc.validate(event)');
    cardNumbInput.required = true;
    cardNumbDiv.append(cardNumbInput);

    creditCardNumberMaxLength(cardNumbInput);


    /* NAME CARD */
    let cardNameCol = createNewElement('div', 'col-12 mb-4');
    rowForm.append(cardNameCol);

    let cardNameLabel = createNewElement('label', 'form-label', 'Name on Card');
    cardNameLabel.setAttribute('for', 'accountAddEditCardName');
    cardNameCol.append(cardNameLabel);

    let cardNameInput = createNewElement('input', 'form-control text-xxs');
    cardNameInput.name = 'Name_on_Card';
    cardNameInput.type = 'text';
    cardNameInput.id = 'accountAddEditCardName';
    cardNameInput.value = cardName;
    cardNameInput.placeholder = 'John Smith';
    cardNameInput.required = true;
    cardNameCol.append(cardNameInput);


    /* EXPIRATION DATE CARD */
    let expirationCol = createNewElement('div', 'col-12 mb-4');
    rowForm.append(expirationCol);

    let expirationDiv = createNewElement('div', 'expiration');
    expirationCol.append(expirationDiv);

    let expirationaLabel = createNewElement('label', 'form-label', 'Expiration Date');
    expirationaLabel.setAttribute('for', 'accountAddEditCardValidThru');
    expirationDiv.append(expirationaLabel);

    let expirationDivInputs = createNewElement('div', 'd-flex align-items-center');
    expirationDiv.append(expirationDivInputs);

    let validThruMonthInput = createNewElement('input', 'form-control text-xxs input-number-without-arrow input-focus-blue');
    validThruMonthInput.name = 'Valid_Thru_Month';
    validThruMonthInput.type = 'text';
    validThruMonthInput.id = 'accountAddEditCardValidThruMonthForm';
    validThruMonthInput.placeholder = 'Month';
    validThruMonthInput.required = true;
    validThruMonthInput.value = cardThruMonth;
    validThruMonthInput.setAttribute('maxlength', '2');
    validThruMonthInput.setAttribute('onkeyup', '$cc.expiryMM.call(this,event)');
    expirationDivInputs.append(validThruMonthInput);

    let slash = createNewElement('span', 'd-block mx-3', '/');
    expirationDivInputs.append(slash);

    let validThruYearInput = createNewElement('input', 'form-control text-xxs input-number-without-arrow input-focus-blue');
    validThruYearInput.name = 'Valid_Thru_Year';
    validThruYearInput.type = 'text';
    validThruYearInput.id = 'accountAddEditCardValidThruYearForm';
    validThruYearInput.placeholder = 'Year';
    validThruYearInput.required = true;
    validThruYearInput.value = cardThruYear;
    validThruYearInput.setAttribute('maxlength', '4');
    validThruYearInput.setAttribute('onkeyup', '$cc.expiryYY.call(this,event)');
    expirationDivInputs.append(validThruYearInput);


    /* CVV NUMB CARD */
    let cvvCol = createNewElement('div', 'col-12 mb-4');
    rowForm.append(cvvCol);

    let cvvLabel = createNewElement('label', 'form-label', 'CVV Number');
    cvvLabel.setAttribute('for', 'accountAddEditCardCVVNumbForm');
    cvvCol.append(cvvLabel);

    let cvvNumbInput = createNewElement('input', 'form-control text-xxs input-number-without-arrow cvv-number-container');
    cvvNumbInput.name = 'Cvv_Number';
    cvvNumbInput.type = 'text';
    cvvNumbInput.id = 'accountAddEditCardCvvNumbForm';
    cvvNumbInput.placeholder = 'XXX';
    cvvNumbInput.required = true;
    cvvNumbInput.value = cardCvv;
    cvvNumbInput.setAttribute('maxlength', '3');
    cvvCol.append(cvvNumbInput);

    /* BTN */
    let button = createNewElement('button', 'btn btn-primary fw-normal w-auto m-auto px-40', 'Add Card');
    button.type = 'submit';
/*     button.dataset.bsDismiss = 'modal';
    button.setAttribute('aria-label', 'Close'); */
    button.setAttribute('onclick', 'createCreditCardItem()');
    rowForm.append(button);


    /* EVENTS */
    let cardEl = accountAddYourCardEl.querySelector('.saved-credit-card');

    let inputs = rowForm.querySelectorAll('input:not(.cvv-number-container)');

    inputs.forEach((inputEl)  => {

        inputEl.addEventListener('click', () => {

            cardEl.classList.remove('flipped');

        })

   })

    /* ADD EDIT CARD KEYUP EVENT*/

   /* CARD NUMBER */
   let cardNumbEl = cardEl.querySelector('.saved-card-number');
   onEditCreditCardKeyup(cardNumbInput, cardNumbEl, cardEl);

   /* NAME */
   let cardNameEl = cardEl.querySelector('.saved-card-name');
   onEditCreditCardKeyup(cardNameInput, cardNameEl, cardEl);

   /* MONTH */
   let validThruMonthEl = cardEl.querySelector('.valid-thru-month');
   onEditCreditCardKeyup(validThruMonthInput, validThruMonthEl, cardEl);

   /* YEAR */
   let validThruYearEl = cardEl.querySelector('.valid-thru-year');
   onEditCreditCardKeyup(validThruYearInput, validThruYearEl, cardEl);

   /* CVV */
   let cardCvvNumbEl = cardEl.querySelector('.card-back-cvv-number');
   onEditCreditCardKeyup(cvvNumbInput, cardCvvNumbEl, cardEl);

    cvvNumbInput.addEventListener('click', () => {

        cardEl.classList.add('flipped');
    })


    return row;
}





/* *********************************************** */
/***** SHOW HIDDEN MODAL ADD YOUR CARD ACCOUNT *****/
/* *********************************************** */
var modalAddYourCardAccount = document.getElementById('modalAddYourCardAccount');

if(modalAddYourCardAccount){

    let form = document.getElementById('accountAddYourCardForm');

    modalAddYourCardAccount.addEventListener('show.bs.modal', function (event) {
    
        let content = createAddEditCreditCardFormData();
    
        form.append(content);
    
    });
    
    modalAddYourCardAccount.addEventListener('hidden.bs.modal', function (event) {
      
    
        form.innerHTML = '';
    
        form.classList.remove('form-validated');
    
    });

}




/* *********************************************** */
/**** SHOW HIDDEN MODAL EDIT YOUR CARD ACCOUNT *****/
/* *********************************************** */
var modalEditYourCardAccount = document.getElementById('modalEditYourCardAccount');

if(modalEditYourCardAccount){

    let form = document.getElementById('accountEditYourCardForm');

    modalEditYourCardAccount.addEventListener('show.bs.modal', function (event) {
  
        let content = createAddEditCreditCardFormData('5283 1323 2133 1233', 'mastercard', 'blue', 'Test Name', '02', '27');
    
        form.append(content);
    
    });
    
    modalEditYourCardAccount.addEventListener('hidden.bs.modal', function (event) {
      
        form.innerHTML = '';
    
        form.classList.remove('form-validated');
    
    });
}





/* *********************************************** */
/**** EVENT FUNCTION ON EDIT CREDIT CARD KEYUP *****/
/* *********************************************** */
function onEditCreditCardKeyup(elInput, elCard, card) {

    elInput.addEventListener('keyup', function() {

        let inputValue = elInput.value;

        if(elCard.classList.contains('saved-card-number')){

            inputValue = '';

            let cleanNumber = '';

            for (let i = 0; i<elInput.value.length; i++){

                if (/^[0-9]+$/.test(elInput.value.charAt(i))){

                    cleanNumber += elInput.value.charAt(i);
                }
            }

            for (let i = 0; i < cleanNumber.length; i++){
                
                if (i == 3 || i == 7 || i == 11 ){

                    inputValue = inputValue + cleanNumber.charAt(i) + ' ';

                }else{
                    inputValue += cleanNumber.charAt(i);
                }

            }


            let cardType = elInput.previousElementSibling;
            let cardTypeLogo = card.querySelector('.saved-card-logo');

            cardTypeLogo.className = `js-image-src saved-card-logo ${cardType.classList[1] ?? ''}`;
        }

        if(elCard.classList.contains('valid-thru-year')){

            inputValue  =  inputValue.slice(-2);

        }
    
        if(inputValue){
    
            elCard.innerText = inputValue;
           
        } else {

            elCard.innerText = '';
        }
    });
}








/* createCreditCardItem();
createCreditCardItem('4111 1111 1111 1678', 'visa', 'blue', 'JOHN SMITH', '08', '23'); */



/* *********************************************** */
/******** CREATE CREDITS CARDS ACTION BTNS *********/
/* *********************************************** */
if(creditCardsActionBtns){

    let editBtn = createCircleIconBtnAnimation('btn-blue', 'wa-wa-edit', 'Edit');
    editBtn.classList.add('m-auto', 'mb-3', 'm-sm-0');
    creditCardsActionBtns.append(editBtn);

    let addCardBtn = createCircleIconBtnAnimation('btn-green', 'wa-wa-plus', 'add new card');
    addCardBtn.classList.add('m-auto', 'mb-3', 'mb-sm-0', 'mx-sm-3');
    addCardBtn.type = 'button';
    addCardBtn.dataset.bsTarget = '#modalAddYourCardAccount';
    addCardBtn.dataset.bsToggle = 'modal';
    creditCardsActionBtns.append(addCardBtn);

    let deleteBtn = createCircleIconBtnAnimation('btn-red', 'wa-wa-remove', 'Delete');
    deleteBtn.classList.add('m-auto', 'mb-3', 'm-sm-0');
    creditCardsActionBtns.append(deleteBtn);

}






const config = {
    type: 'carousel',
    perView: 2,
    startAt: 1,
    gap: -70,
   /*  animationDuration: 1000, */
    focusAt: 'center',
   /*  autoplay: 5000, */
    breakpoints: {
        767: {
              perView: 1,
              gap: 0,
          },
        // 992: {
        //       perView: 2.2,
        //       /* gap: 28, */
        // },
        // 1200: {
        //     perView:2.75,
        //    /*  gap: 46, */
        // }
         
    },
  };
  
  var glide = new Glide('.glide', config);
  
  
  glide.mount();
  
  
  var nextButton = document.querySelector('#next');
  var prevButton = document.querySelector('#prev');
  
  nextButton.addEventListener('click', function (event) {
    event.preventDefault();
  
    glide.go('>');
  })
  
  prevButton.addEventListener('click', function (event) {
    event.preventDefault();
  
    glide.go('<');
  })