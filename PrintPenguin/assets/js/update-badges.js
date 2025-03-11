setInterval(updateBadgesValues, 6000);

let supportMessages = document.getElementById('supportMessages');
let cartProducts = document.getElementById('cartProducts');

let newMessagesCount = 0;
let cartProductsCount = 0;
let newMessagesChanged = false;
let newCartProductChanged = false;




/* *********************************************** */
/************** UPDATE BADGES VALUES ***************/
/* *********************************************** */
function updateBadgesValues(){
    let number1 = getRandomNumber();
    let number2 = getRandomNumber();
    cartProductsCount = getRandomNumber();

    if (number1 != newMessagesCount) {
        newMessagesCount = number1;
        newMessagesChanged = true;
    }

    if (number2 != cartProductsCount) {
        cartProductsCount = number2;
        newCartProductChanged = true;
    }
    updateBadges()
}





/* *********************************************** */
/***************** UPDATE BADGES *******************/
/* *********************************************** */
function updateBadges(){

    if (!newMessagesChanged && !newCartProductChanged)
        return;
    
    if (newMessagesChanged){
        addBellIcon(supportMessages);

        /* let supportMessagesCountSpan = supportMessages.querySelector('.badges-count');
        supportMessagesCountSpan.innerHTML = ''; */

        if(newMessagesCount < 1){

            supportMessages.classList.add('d-none');
    
        } else if (newMessagesCount >= 1){
    
            supportMessages.classList.remove('d-none');

            setTimeout(() => {

                removeBellIcon(supportMessages)
            
                if (newMessagesCount > 1){
                    supportMessages.style.backgroundImage = "url('/assets/img/icons/notification/+.svg')";
                    
                } else {
                    supportMessages.style.backgroundImage = `url('/assets/img/icons/notification/${newMessagesCount}.svg')`;
                }

            }, 2300);
    
        }
    }

    if (newCartProductChanged){
        addBellIcon(cartProducts);

        let cartProductsCountSpan = cartProducts.querySelector('.badges-count');

        cartProductsCountSpan.innerHTML = '';
        
        if(cartProductsCount < 1){
    
            cartProducts.classList.add('d-none');
    
        } else if (cartProductsCount >= 1){

            cartProducts.classList.remove('d-none');

            setTimeout(() => {

                removeBellIcon(cartProducts)

                if (cartProductsCount > 9){
                    cartProducts.style.backgroundImage = "url('/assets/img/icons/notification/+.svg')";
        
                } else {
                    cartProducts.style.backgroundImage = `url('/assets/img/icons/notification/${cartProductsCount}.svg')`;

                }
            }, 2300);
        }
    }

    newMessagesChanged = false;
    newCartProductChanged = false;
}




/* *********************************************** */
/************* GET RAMDOM NUMBER *******************/
/* *********************************************** */
function getRandomNumber() {
    return Math.floor(Math.random() * 12);
}




/* *********************************************** */
/**************** CHANGE BELL ICON *****************/
/* *********************************************** */
function addBellIcon(el) {
    el.classList.remove('gg-circle');
    el.classList.add('gg-bell');
}

function removeBellIcon(el) {
    el.classList.remove('gg-bell');
    el.classList.add('gg-circle');
    
}

function addBadgesIcon() {
    let badgesIcon = document.querySelector('.badges-icon');
    badgesIcon.classList.remove('d-none');
    
}