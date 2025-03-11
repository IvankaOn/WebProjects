/* *********************************************** */
/**************** CREATE ACCOUNT USER **************/
/* *********************************************** */
let offcanvasUserProfile = document.getElementById('offcanvasUserProfile');
let bsOfcanvasUserProfile = new bootstrap.Offcanvas(offcanvasUserProfile);
let userAccountHeader = document.getElementById('userAccountHeader');
let userAccountHeaderTitle = userAccountHeader.querySelector('.user-account-title');
let userAccountHeaderSubTitle = userAccountHeader.querySelector('.user-account-subtitle');
let userAccountBody = offcanvasUserProfile.querySelector('.offcanvas-body');

let userRegistered = true;


let userAccountMenuCount = 16;


function createUserMenu(userRegistered) {

	if(userRegistered){
		createRegisteredUserMenu();
	} else {
		createAnonymousUserMenu();
	}
}



function createRegisteredUserMenu() {

	let userName = 'John Smith';
	let userMail = 'johnny.smith1989@gmail.com';
	userAccountHeaderTitle.innerHTML = userName;
	userAccountHeaderSubTitle.innerHTML = userMail;

	let userProfileList = createNewElement('div', 'offcanvas-body-user-profile-list border-top-bg-light-purple');;
	let userProfileList2 = createNewElement('div', 'offcanvas-body-user-profile-list border-top-bg-light-purple');
	let userProfileList3 = createNewElement('div', 'offcanvas-body-user-profile-list border-top-bg-light-purple');


	for (let index = 0; index < userAccountMenuCount; index++) {

		let indexHref;
		let indexLink;
		let indexName;
		let indexIcon;

		let userMenuDiv = createNewElement('div', 'offcanvas-body-user-profile-list-item');
		let userMenuLink = createNewElement('a'); 
		let userMenuIcon = createNewElement('span', 'me-4 text-md lh-1'); 
		
		

		if(index == 0){
			indexHref = '/account#user-details';
			indexLink = '#user-details';
			indexName = 'User details';
			indexIcon = 'fi-rr-user';
		} else if(index == 1){
			indexHref = '/account/account-details';
			/* indexLink = '#details'; */
			indexName = 'Account Access';
			indexIcon = 'fi-rr-user-add';
		} else if(index == 2){
			indexHref = '/account#company-details';
			indexLink = '#company-details';
			indexName = 'Company details';
			indexIcon = 'fi-rr-briefcase';
		} else if(index == 3){
			indexHref = '/account/shopping-cart';
			indexName = 'Cart';
			indexIcon = 'fi-rr-shopping-cart';
		} else if(index == 4){
			indexHref = '/account#orders';
			indexLink = '#orders';
			indexName = 'My orders';
			indexIcon = 'fi-rr-shopping-bag';
		} else if(index == 5){
			indexHref = '/account#address-book';
			indexLink = '#address-book';
			indexName = 'Address book';
			indexIcon = 'fi-rr-marker';
		} else if(index == 6){
			indexHref = '/account/wallet';
			/* indexLink = '#payment-methods'; */
			indexName = 'Payment Methods';
			indexIcon = 'fi-rr-credit-card';
		} else if(index == 7){
			indexHref = '/account/saved-jobs';
		/* 	indexLink = '#saved-jobs'; */
			indexName = 'Saved Jobs';
			indexIcon = 'fi-rr-label';
		} else if(index == 8){
			indexHref = '/account#favorites';
			indexLink = '#favorites';
			indexName = 'Favorites';
			indexIcon = 'fi-rr-heart';
		} else if(index == 9){
			indexHref = '/account/artwork-library';
			/* indexLink = '#artwork-library'; */
			indexName = 'Artwork Library';
			indexIcon = 'fi-rr-gallery';
		}else if(index == 10){
			indexHref = '/account/discounts';
			indexName = 'Discounts & Affiliates';
			indexIcon = 'fi-rr-users-alt';
		} else if(index == 11){
			indexHref = '/account#custom-designs';
			indexLink = '#custom-designs';
			indexName = 'Custom Design';
			indexIcon = 'fi-rr-edit-alt';
		} else if(index == 12){
			indexHref = '/chat';
			indexName = 'Need help?';
			indexIcon = 'fi-rr-question-square';
		} else if(index == 13){
			indexHref = '/contact';
			indexName = 'Contact us';
			indexIcon = 'fi-rr-envelope';
		} else if(index == 14){
			indexHref = '#switchAccountModal';
			indexName = 'Switch Account';
			indexIcon = 'fi-rr-refresh';
			userMenuLink.role = 'button'; 
			userMenuLink.dataset.bsToggle = 'modal';
		} else if(index == 15){
			indexHref = '/account/register';
			indexName = 'Sign Out';
			indexIcon = 'fi-rr-enter';
		}

		if(indexLink){

			userMenuLink.dataset.accountLink = indexLink;
		}


		userMenuLink.href = indexHref;
		userMenuLink.innerHTML += indexName;
		userMenuIcon.classList.add(indexIcon);

		userMenuDiv.append(userMenuLink);
		userMenuLink.prepend(userMenuIcon);

		userMenuLink.addEventListener('click', onClickUserMenu);


		if(index <= 10){

			userProfileList.append(userMenuDiv);

		} else if(index > 10 && index < 13){
			userProfileList2.append(userMenuDiv);

		} else {
			userProfileList3.append(userMenuDiv);

		}

		userAccountBody.append(userProfileList);
		userAccountBody.append(userProfileList2);
		userAccountBody.append(userProfileList3);

	}
}


function createAnonymousUserMenu() {
	/* todo add anonymous user menu */
}




function onClickUserMenu(event) {
	showTabByName(event.target.getAttribute('data-account-link'));
	bsOfcanvasUserProfile.hide();
}


createUserMenu(userRegistered);