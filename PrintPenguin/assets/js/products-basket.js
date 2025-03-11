/* *********************************************** */
/************* CREATE OFFCANVAS CART ***************/
/* *********************************************** */
let cartSelectOprions = [
	{
		'Slides' : 'Double'
	},
	{
		'Corners' : 'Rounded'
	},
	{
		'Option 3' : 'Option 3'
	},
	{
		'Option 4' : 'Option 4'
	},
	{
		'Option 5' : 'Option 5'
	},
	{
		'Option 6' : 'Option 6'
	}
]

let cartProductCount = 0;
let cartItems = document.getElementById('cartItems');

if (cartItems) {

	let cartItemOne = createBasketProductCart();
	cartItems.append(cartItemOne);

	let cartItemTwo = createBasketProductCart();
	cartItems.append(cartItemTwo);
}





/* *********************************************** */
/************* CREATE PRODUCT CARD *****************/
/* *********************************************** */
function createBasketProductCart(){

	cartProductCount++;

	let urlImg = '/assets/img/img-cart/img-cart.png';
	let productName = 'Standart Business Card';

	let cartItem = createNewElement('div', 'cart-item border-top-bg-light-purple');

	/* CART HEADER */
	let cartItemHeader = createNewElement('div', 'cart-item-header mb-4');
	cartItem.append(cartItemHeader);
	
	/* CART HEADER PRODUCT IMAGE */
	let cartProductImg = createNewElement('div', 'cart-item-header-img me-4');
	cartProductImg.style.backgroundImage = `url('${urlImg}')`;
	cartItemHeader.append(cartProductImg);
	
	let cartItemHeaderDiv = createNewElement('div',);
	cartItemHeader.append(cartItemHeaderDiv);
	
	/* CART HEADER PRODUCT NAME */
	let cartProductName = createNewElement('span', 'text-xs fw-bold cart-item-header-name', productName);
	cartItemHeaderDiv.append(cartProductName);

	/* CART HEADER BTNS*/
	let cartItemHeaderBtns = createNewElement('div', 'cart-item-header-btns');
	cartItemHeaderDiv.append(cartItemHeaderBtns);

	/* BTN EDIT */
	let cartEditBtn = createCircleIconBtnAnimation('btn-blue', 'wa-wa-edit', 'Edit <span class="d-none d-sm-inline-block"> item</span.');
	cartEditBtn.classList.add('me-2', 'text-xxs');
	cartItemHeaderBtns.append(cartEditBtn);

	/* BTN REMOVE */
	let cartRemoveBtn = createCircleIconBtnAnimation('btn-red', 'wa-wa-remove', 'Remove');
	cartRemoveBtn.classList.add('text-xxs');

	cartItemHeaderBtns.append(cartRemoveBtn);




	/* ACCORDION */
	let cartSelectOptionAccordion = createNewElement('div', 'accordion accordion-cart-options mb-4');
	cartSelectOptionAccordion.id = 'accordionCartOptions';
	cartItem.append(cartSelectOptionAccordion);

	let accordionItem = createNewElement('div', 'accordion-item');
	cartSelectOptionAccordion.append(accordionItem);

	let accordionItemHeader = createNewElement('h2', 'accordion-header');
	accordionItemHeader.id = `cartProductHeading-${cartProductCount}`;
	accordionItem.append(accordionItemHeader);

	let accordionItemHeaderBtn = createNewElement('button', 'accordion-button collapsed', 'Selected Options');
	accordionItemHeaderBtn.type = 'button';
	accordionItemHeaderBtn.dataset.bsToggle = 'collapse';
	accordionItemHeaderBtn.dataset.bsTarget = `#collapseCartProduct-${cartProductCount}`;
	accordionItemHeaderBtn.setAttribute('aria-expanded', 'true');
	accordionItemHeaderBtn.setAttribute('aria-controls', `collapseCartProduct-${cartProductCount}`);
	accordionItemHeader.append(accordionItemHeaderBtn);


	/* ACCORDION BODY */
	let accordionCollapse = createNewElement('div', 'accordion-collapse collapse');
	accordionCollapse.id = `collapseCartProduct-${cartProductCount}`;
	accordionCollapse.setAttribute('aria-labelledby', `cartProductHeading-${cartProductCount}`);
	accordionCollapse.dataset.bsParent = 'accordionCartOptions';
	accordionItem.append(accordionCollapse);

	let accordionBody = createNewElement('div', 'accordion-body px-0');
	accordionCollapse.append(accordionBody);


	/* ACCORDION BODY TABLE*/
	let table = createNewElement('table', 'table');
	accordionBody.append(table);

	let tbody = createNewElement('tbody');
	table.append(tbody);


	cartSelectOprions.forEach((option) => {

		for (let [key, value] of Object.entries(option)) {

			let tr = createNewElement('tr');
			tbody.append(tr);

			let tdKey = createNewElement('td', '', key);
			tr.append(tdKey);

			let tdValue = createNewElement('td', 'fw-semibold', value);
			tr.append(tdValue);

		}
	})

	/* CART PRODUCT SELECT */
	let cartProductSelect = createNewElement('select', 'tom-select-cart mb-4');
	cartProductSelect.id = `quantityProductCart-${cartProductCount}`;
	cartItem.append(cartProductSelect);

	[
        {quantity: 200, price: "$11,100.00"},
        {quantity: 12, price: "$65456.00"}
		
    ].forEach(item => {
        let option = document.createElement('option');
        option.dataset.price = item.price;
        option.innerText = item.quantity;
        cartProductSelect.append(option);
    })

	initTomSelectByEl(cartProductSelect, tomSelectProductPriceBasketOptions);

	return cartItem;
}