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
        },
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


let yourCreditCards = {
    result: [
        {
            id: '21eq12weqwe',
            name: 'JOHN SMITH',
            number: '4111 1111 1111 1123',
            month: '08',
            year: '23',
            cvv: '413',
            type: 'mastercard',
            color: 'red'
        },
        {
            id: '21eq2312312eweqwe',
            name: 'JOHN SMITH',
            number: '4111 1111 1111 2323',
            month: '08',
            year: '23',
            cvv: '413',
            type: 'visa',
            color: 'blue'
        },
        {
            id: '2s23213213qwe',
            name: 'JOHN SMITH',
            number: '4111 1111 1111 4444',
            month: '08',
            year: '23',
            cvv: '413',
            type: 'mastercard',
            color: 'blue'
        },
        ,
        {
            id: '2ssadaweqweqwe',
            name: 'JOHN SMITH',
            number: '4111 1111 1111 4444',
            month: '08',
            year: '23',
            cvv: '413',
            type: 'mastercard',
            color: 'red'
        }
    ]
}




let creditsCardsSummaryRow = document.getElementById('creditsCardsSummaryRow');
let creditCardsActionBtns = document.getElementById('creditCardsActionBtns');
let creditCardsGlideSlide = document.getElementById('creditCardsGlideSlide');
let modalAddEditCardAccount = document.getElementById('modalAddEditCardAccount');
let modalAddEditCardAccountLabel = document.getElementById('modalAddEditCardAccountLabel');
let modalAddEditCardBtn = document.getElementById('modalAddEditCardBtn');


/* *********************************************** */
/******** CREATE CREDITS CARDS SUMMARY ROW *********/
/* *********************************************** */
if(creditsCardsSummaryRow){
    
    creditsCardsSummaryShow(yourCredits); /*  todo Api.get() credits cards summary */
}

function creditsCardsSummaryShow(result){

    let colLeft = createNewElement('div', 'col-12 col-lg-5 d-md-flex d-lg-block gap-3');
    creditsCardsSummaryRow.append(colLeft);
    
    let couponBase = createCoupon('Balance', 'Credit', `$${result.summary.credits}`, false);
    colLeft.append(couponBase);

    if(result.coupons){
        let couponPro = createCoupon(result.coupons.name, result.coupons.type, result.coupons.value, true);
        colLeft.append(couponPro);
    }

    let colRight = createNewElement('div', 'col-12 col-lg-7');
    creditsCardsSummaryRow.append(colRight);

    let latestTransactionsTitle = createNewElement('div', 'fw-semibold text-xs mt-3', 'Latest Transactions');
    colRight.append(latestTransactionsTitle);
    
    let latestTransactionsList = createNewElement('div', 'latest-transactions-list js-toggle-latest-items');
    colRight.append(latestTransactionsList);

    
    if(result.latest_transactions){
        result.latest_transactions.forEach(list => {

            let listEl = createLatestTransactionsItem(list.name, list.type, list.credits, list.date);
            latestTransactionsList.append(listEl);
        })
    
    }

    let fullHistoryBtn = createNewElement('a', 'btn btn-link text-grey text-xxs d-block', 'Expand Full History');
    fullHistoryBtn.addEventListener('click', toggleLatestTransactions);
    colRight.append(fullHistoryBtn);

}



/* *********************************************** */
/************ CREATE CREDIT CARDS ITEM *************/
/* *********************************************** */

if(creditCardsGlideSlide){
    createSliderCards();
}

function createSliderCards() {

    if(yourCreditCards.result.length > 0){

        yourCreditCards.result.forEach(item => { /* todo api.get(credit_card) */

            let glideItem  = createNewElement('div', 'glide__slide');
            let card = createCreditCard(item.id,  item.number,  item.type, item.color, item.name, item.month, item.year, item.cvv);
            glideItem.append(card);
    
            creditCardsGlideSlide.append(glideItem);
        });

        if (yourCreditCards.result.length === 1){
            setGlideConfig(glideCreditCards, singleCreditCardsConfig);
        } else {
            setGlideConfig(glideCreditCards, creditCardsConfig);
        }

        createCreditsCardsActionsBtns(true, true, true);

        if(yourCreditCards.result.length > 1){
            let slideArrows = createArrowsGlideBtns(glideCreditCards);
            creditCardsGlideSlide.parentElement.append(slideArrows);
        }

    } else {
        createCreditsCardsActionsBtns(false, true, false);
    }
    
    

    updateSlider(glideCreditCards);
}





/* *********************************************** */
/****** CREATE ADD EDIT CREDIT CARD FORM DATA ******/
/* *********************************************** */
function createAddEditCreditCardFormData(id = '', cardNumber = '', cardType = '', cardColor = '', cardName = '', cardThruMonth = '', cardThruYear = '', cardCvv = 'XXX'){
    
    let defaultCardId = 'addNewCardId';
    let defaultCardName = '';
    let defaultCardNumb = '';
    let defaultCardThruMonth = '';
    let defaultCardThruYear = '';
    let defaultCardCvv = 'XXX';
    let defaultCardType = 'mastercard';
    let defaultCardColor = 'red';


    let row = createNewElement('div', 'row justify-content-center');

    let col = createNewElement('div', 'col-12 col-lg-10');
    row.append(col);

    let accountAddYourCardEl = createNewElement('div', 'mb-4');
    accountAddYourCardEl.id = 'accountAddYourCardEl';
    col.append(accountAddYourCardEl); 

    let card = createCreditCard(id ? id : defaultCardId, cardNumber ? cardNumber : defaultCardNumb, cardType ? cardType: defaultCardType, cardColor ? cardColor : defaultCardColor, cardName ? cardName : defaultCardName, cardThruMonth ? cardThruMonth : defaultCardThruMonth, cardThruYear ? cardThruYear : defaultCardThruYear, cardCvv ? cardCvv : defaultCardCvv);
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
    cardNumbInput.placeholder = '**** **** **** ****';
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
    cardNameInput.placeholder = 'Your Name';
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
    cvvNumbInput.setAttribute('maxlength', '3');
    cvvCol.append(cvvNumbInput);


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
/******** CREATE CREDITS CARDS ACTION BTNS *********/
/* *********************************************** */
/**
 * 
 * @param {*boolean} editBtn - credit card edit
 * @param {*boolean} addBtn - credit card add
 * @param {*boolean} removeBtn - credit card remove
 */
function createCreditsCardsActionsBtns(editBtn, addBtn, removeBtn) {
    creditCardsActionBtns.innerHTML = '';

    if(editBtn) {
        let editBtn = createCircleIconBtnAnimation('btn-blue', 'wa-wa-edit', 'Edit');
        editBtn.classList.add('m-auto', 'mb-3', 'm-sm-0');
        editBtn.type = 'button';
        editBtn.addEventListener('click', editCreditCard);
        creditCardsActionBtns.append(editBtn);   
    }

    if(addBtn) {
        let addCardBtn = createCircleIconBtnAnimation('btn-green', 'wa-wa-plus', 'add new card');
        addCardBtn.classList.add('m-auto', 'mb-3', 'mb-sm-0', 'mx-sm-3');
        addCardBtn.type = 'button';
        addCardBtn.addEventListener('click', addCreditCard);
        creditCardsActionBtns.append(addCardBtn);  
    }

    if(removeBtn) {
        let deleteBtn = createCircleIconBtnAnimation('btn-red', 'wa-wa-remove', 'Delete');
        deleteBtn.classList.add('m-auto', 'mb-3', 'm-sm-0');
        deleteBtn.type = 'button';
        deleteBtn.addEventListener('click', deleteCreditCard);
        creditCardsActionBtns.append(deleteBtn);
    }
        
}






/* *********************************************** */
/*********** DELETE CREDIT CARD ACCOUNT ************/
/* *********************************************** */
function deleteCreditCard() {

    let activeCard = creditCardsGlideSlide.querySelector('.glide__slide--active').querySelector('.saved-credit-card');
    let activeCardId = activeCard.id;
    let activeCardName = activeCard.querySelector('.saved-card-number').innerText;

    createAreYouSureGlobalModal(`Are you sure you want to delete card (${activeCardName})?`, 'Delete Card', 'No, Take Me Back');
  
    bsAreYouSureGlobalModal.show();
  
    let deleteBtn = areYouSureGlobalModal.querySelector('#areYouSureGlobalModalMainBtn');
    deleteBtn.dataset.creditCardId = activeCardId;
  
    deleteBtn.onclick = onclickCreditCardDeleteConfirmBtn;
}




function onclickCreditCardDeleteConfirmBtn(ev){

    let el = document.getElementById(ev.target.getAttribute('data-credit-card-id')).parentElement;

    if (creditCardsGlideSlide.querySelectorAll('.glide__slide').length == 2){

        creditCardsGlideSlide.parentElement.querySelector('.js-glide-arrows').remove();
    }

    if (creditCardsGlideSlide.querySelectorAll('.glide__slide').length == 1){

        createCreditsCardsActionsBtns(false, true, false);
   
        el.remove(); 


        return;
    }

    /* TODO api.delete() */
    showPrevSlide(glideCreditCards);

    el.remove(); 



    updateSlider(glideCreditCards);
}





/* *********************************************** */
/************ ADD YOUR CREDIT CARD ACCOUNT *********/
/* *********************************************** */
function addCreditCard(){

    modalAddEditCardAccountLabel.innerHTML = 'Add Your Card';
    modalAddEditCardBtn.innerHTML = 'Add Card';
    modalAddEditCardBtn.onclick = onclickCreditCardAddConfirmBtn;


    let form = document.getElementById('accountAddEditCardForm');

    modalAddEditCardAccount.addEventListener('show.bs.modal', function (event) {
        form.innerHTML = '';
        form.classList.remove('form-validated');

        let content = createAddEditCreditCardFormData();
        form.prepend(content);
    
    });
    

    let bsModalAddEditCardAccount = new bootstrap.Modal(modalAddEditCardAccount, {});

    bsModalAddEditCardAccount.show();
}

function onclickCreditCardAddConfirmBtn() {
    /* todo api.post(new card data) */

 /*    let glideItem  = createNewElement('div', 'glide__slide');
    let card = createCreditCard();
    glideItem.append(card);

    creditCardsGlideSlide.append(glideItem); */
}





/* *********************************************** */
/************ EDIT YOUR CREDIT CARD ACCOUNT *********/
/* *********************************************** */
function editCreditCard(){

    let activeId = creditCardsGlideSlide.querySelector('.glide__slide--active').querySelector('.saved-credit-card').id;

    modalAddEditCardAccountLabel.innerHTML = 'Edit Your Card';
    modalAddEditCardBtn.innerHTML = 'Save Card';
    modalAddEditCardBtn.onclick = onclickCreditCardEditConfirmBtn;

    let form = document.getElementById('accountAddEditCardForm');

    modalAddEditCardAccount.addEventListener('show.bs.modal', function (event) {
        form.innerHTML = '';
        form.classList.remove('form-validated');

        let card = yourCreditCards.result.filter(x => x.id === activeId)[0]; 
        
        let cardData = createAddEditCreditCardFormData(card.id, card.number, card.type, card.color, card.name, card.month, card.year, 'XXX'); /* todo api.get(credit card data) */
        form.prepend(cardData);
    
    });

    let bsModalAddEditCardAccount = new bootstrap.Modal(modalAddEditCardAccount, {});

    bsModalAddEditCardAccount.show();
}

function onclickCreditCardEditConfirmBtn() {
    /* todo api.put(card data) */
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







  
/*   
  var nextButton = document.querySelector('#next');
  var prevButton = document.querySelector('#prev');
  
  nextButton.addEventListener('click', function (event) {
    event.preventDefault();
  
    glide.go('>');
  })
  
  prevButton.addEventListener('click', function (event) {
    event.preventDefault();
  
    glide.go('<');
  }) */