/* *********************************************** */
/**************** CREATE ACCOUNT MENU **************/
/* *********************************************** */
let accountNav = document.getElementById('accountNav');

let accountMenuCount = 13;
let userAccountRegistered = true;

function createAccountMenu(userAccountRegistered) {

    if(userAccountRegistered){
        createRegisteredAccountMenu();
    } else{
        createAnonymousAccountMenu();
    }
    
}



function createRegisteredAccountMenu(){
    for (let index = 0; index < accountMenuCount; index++) {
    
        let indexName;
        let indexIcon;
        let indexId;
        let indexDataTarget;
        let indexAriaControls;

        let list = createNewElement('li');
        let link = createNewElement('a');
        link.href = '#';
        

        let icon = createNewElement('span', 'me-3 me-xl-4 text-xs lh-1 align-middle');


        if(index == 0){
            indexName = 'User details';
            indexIcon = 'fi-rr-user';
            indexId = 'user-details-link';
            indexDataTarget = '#account-user-details';
            indexAriaControls = 'account-user-details';
        } else if(index == 1){
            indexName = 'Account Access';
            indexIcon = 'fi-rr-user-add';
            link.href = '/account/account-details';
            /* indexId = 'details-link';
            indexDataTarget = '#account-details';
            indexAriaControls = 'account-details'; */
        } else if(index == 2){
            indexName = 'Company details';
            indexIcon = 'fi-rr-briefcase';
            indexId = 'company-details-link';
            indexDataTarget = '#account-company-details';
            indexAriaControls = 'account-company-details';
        } else if(index == 3){
            indexName = 'Cart';
            indexIcon = 'fi-rr-shopping-cart';
            link.href = '/account/shopping-cart';
        } else if(index == 4){
            indexName = 'My orders';
            indexIcon = 'fi-rr-shopping-bag';
            indexId = 'orders-link';
            indexDataTarget = '#account-orders';
            indexAriaControls = 'account-orders';
        } else if(index == 5){
            indexName = 'Address book';
            indexIcon = 'fi-rr-marker';
            indexId = 'address-book-link';
            indexDataTarget = '#account-address-book';
            indexAriaControls = 'account-address-book';
        } else if(index == 6){
            indexName = 'Payment Methods';
            indexIcon = 'fi-rr-credit-card';
            link.href = '/account/wallet';
           /*  indexId = 'payment-methods-link';
            indexDataTarget = '#account-payment-methods';
            indexAriaControls = 'account-payment-methods'; */
        }else if(index == 7){
            indexName = '<span class="ps-1">Saved Jobs</span>';
            icon.className = 'me-3 me-xl-4 text-xs lh-1 align-middle';
            indexIcon = 'fi-rr-label';
            link.href = '/account/saved-jobs';
         /*    indexId = 'saved-jobs-link';
            indexDataTarget = '#account-saved-jobs';
            indexAriaControls = 'account-saved-jobs'; */
        } else if(index == 8){
            indexName = '<span class="ps-1">Favorites</span>';
            indexIcon = 'fi-rr-heart';
            indexId = 'favorites-link';
            indexDataTarget = '#account-favorites';
            indexAriaControls = 'account-favorites';
        } else if(index == 9){
            indexName = '<span class="ps-1">Artwork Library</span></a>';
            indexIcon = 'fi-rr-gallery';
            link.href = '/account/artwork-library';
           /*  indexId = 'artwork-library-link';
            indexDataTarget = '#account-artwork-library';
            indexAriaControls = 'account-artwork-library'; */
        } else if(index == 10){
            indexName = 'Custom Designs';
            indexIcon = 'fi-rr-edit-alt';
            indexId = 'custom-designs-link';
            indexDataTarget = '#account-custom-designs';
            indexAriaControls = 'account-custom-designs';
        } else if(index == 11){
            indexName = 'Support History';
            indexIcon = 'fi-rr-comment';
            link.href = '#offcanvasHelpCenter';
            link.dataset.bsToggle = 'offcanvas';
        } else if(index == 12){
            indexName = 'Discounts & Affiliates';
            indexIcon = 'fi-rr-users-alt';
            link.href = '/account/discounts';
            
        }

        icon.classList.add(indexIcon);
        link.innerHTML += indexName;

        if(indexId){
            link.id = indexId;
            link.role = 'tab';
            link.dataset.bsToggle = 'pill';
            link.dataset.bsTarget = indexDataTarget;
            link.setAttribute('aria-controls', `${indexAriaControls}`);
        }

        link.addEventListener('shown.bs.tab', onClickAccountMenuTab);

        list.append(link);
        link.prepend(icon);

        accountNav.append(list);
        
    }
}


function createAnonymousAccountMenu(){
    /* add  anonymous account menu */
}




function onClickAccountMenuTab(event) {
    event.preventDefault();
    window.location.hash = event.target.id.replace('-link', '');

    let header = document.querySelector('header');
    header.scrollIntoView({block: 'center'});
}



createAccountMenu(userAccountRegistered);