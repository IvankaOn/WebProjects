/* *********************************************** */
/************** CREATE YOUR CART ITEM **************/
/* *********************************************** */
let yourCartsTest = document.querySelectorAll('.your-carts');
if (yourCartsTest){

    yourCartsTest.forEach((yourCart) => {

        let yourCartItemOne = createCartItem({
            id: '12waqwsas3423',
            cartPages: [
                {
                    id: '1wwee2323',
                    img_name: '../../assets/img/img-cart/img-cart.png',
                },
                {
                    id: '1wczxcz2323',
                    img_name: '',
                },
                {
                    id: '1xzcqwe2323',
                    img_name: '../../assets/img/img-cart/img-cart.png',
                },
                {
                    id: '1wcz2323',
                    img_name: '',
                },
                {
                    id: '1xae2323',
                    img_name: '',
                }
            ],
            yourProductName: 'Standard Business Card',
            cartOptions: [
                {   
                    id: '21eqzxczxcwe',
                    name: 'Finish',
                    icon: 'wa-wa-question-circle-outilne',
                    info: 'Lorem ipsum dolor sit adipiscing elit aliqua.',
                    options: [
                        {
                            value: 'Option 1',
                            text: 'Option 1',
                        },
                        {
                            value: 'Option 2',
                            text: 'Option 2',
                        }
                    ]
                },
                {   
                    id: '21exczxc22we',
                    name: 'Finish',
                    icon: '',
                    info: '',
                    options: [
                        {
                            value: 'Option 1',
                            text: 'Option 1',
                        },
                        {
                            value: 'Option 2',
                            text: 'Option 2',
                        }
                    ]
                },
                {   
                    id: '212ffffwe',
                    name: 'Finish',
                    icon: '',
                    info: '',
                    options: [
                        {
                            value: 'Option 1',
                            text: 'Option 1',
                        },
                        {
                            value: 'Option 2',
                            text: 'Option 2',
                        }
                    ]
                },
                {   
                    id: '21dddwe',
                    name: 'Finish',
                    icon: '',
                    info: '',
                    options: [
                        {
                            value: 'Option 1',
                            text: 'Option 1',
                        },
                        {
                            value: 'Option 2',
                            text: 'Option 2',
                        }
                    ]
                },
                {   
                    id: 'asd21322we',
                    name: 'Finish',
                    icon: '',
                    info: '',
                    options: [
                        {
                            value: 'Option 1',
                            text: 'Option 1',
                        },
                        {
                            value: 'Option 2',
                            text: 'Option 2',
                        }
                    ]
                },
                {   
                    id: '21adsdw22we',
                    name: 'Quantity',
                    icon: 'wa-wa-question-circle-outilne',
                    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.',
                    options: [
                        {
                            value: 'Option 1',
                            text: 'Option 1',
                        },
                        {
                            value: 'Option 2',
                            text: 'Option 2',
                        }
                    ]
                }
            ],
            total: '10000.00',
            isCartOrderFinished: false
        });
        yourCart.append(yourCartItemOne);


        let yourCartItemTwo = createCartItem({
            id: '12wasadas3423',
            cartPages: [
                {
                    id: '1wwee2323',
                    img_name: '../../assets/img/img-cart/img-cart.png',
                },
                {
                    id: '1wczxcz2323',
                    img_name: '../../assets/img/img-cart/door-hangers.png',
                },
                {
                    id: '1xzcqwe2323',
                    img_name: '../../assets/img/img-cart/img-cart.png',
                },
                {
                    id: '1wcz2323',
                    img_name: '../../assets/img/img-cart/img-cart.png',
                },
                {
                    id: '1xae2323',
                    img_name: '',
                },
                {
                    id: '1wc123',
                    img_name: '../../assets/img/img-cart/img-cart.png',
                }
            ],
            yourProductName: 'Standard Business Card Finished',
            cartOptions: [
                {   
                    id: '21eqzxczxcwe',
                    name: 'Finish',
                    icon: 'wa-wa-question-circle-outilne',
                    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.',
                    options: [
                        {
                            value: 'Option 1',
                            text: 'Option 1',
                        },
                        {
                            value: 'Option 2',
                            text: 'Option 2',
                        }
                    ]
                },
                {   
                    id: '21exczxc22we',
                    name: 'Finish',
                    icon: '',
                    info: '',
                    options: [
                        {
                            value: 'Option 1',
                            text: 'Option 1',
                        },
                        {
                            value: 'Option 2',
                            text: 'Option 2',
                        }
                    ]
                },
                {   
                    id: '212ffffwe',
                    name: 'Finish',
                    icon: '',
                    info: '',
                    options: [
                        {
                            value: 'Option 1',
                            text: 'Option 1',
                        },
                        {
                            value: 'Option 2',
                            text: 'Option 2',
                        }
                    ]
                },
                {   
                    id: '21dddwe',
                    name: 'Finish',
                    icon: '',
                    info: '',
                    options: [
                        {
                            value: 'Option 1',
                            text: 'Option 1',
                        },
                        {
                            value: 'Option 2',
                            text: 'Option 2',
                        }
                    ]
                },
                {   
                    id: 'asd21322we',
                    name: 'Finish',
                    icon: '',
                    info: '',
                    options: [
                        {
                            value: 'Option 1',
                            text: 'Option 1',
                        },
                        {
                            value: 'Option 2',
                            text: 'Option 2',
                        }
                    ]
                },
                {   
                    id: '21adsdw22we',
                    name: 'Quantity',
                    icon: 'wa-wa-question-circle-outilne',
                    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit aliqua.',
                    options: [
                        {
                            value: 'Option 1',
                            text: 'Option 1',
                        },
                        {
                            value: 'Option 2',
                            text: 'Option 2',
                        }
                    ]
                }
            ],
            total: '10000.00',
            isCartOrderFinished: true
        });
        yourCart.append(yourCartItemTwo);
    })
}




function createCartItem({ id = '', cartPages = [], yourProductName = '', cartOptions = [], total = '', isCartOrderFinished = false }) {
    
    let item = createNewElement('div');

    let containerFluid = createNewElement('div', 'container-fluid');
    item.append(containerFluid);

    let row = createNewElement('div', 'row col-xxxl-10 offset-xxxl-1 px-sm-3 px-md-5 justify-content-center');
    containerFluid.append(row);

    let cartName = createNewElement('div', 'your-cart-name fw-semibold text-center text-lg-start mb-3', yourProductName);
    row.append(cartName);

    let colImages = createNewElement('div', 'col-12 col-sm-10 col-lg-3 mb-3 mb-sm-4');
    row.append(colImages);
    

    let cardImagesCollapse = createCardImagesCollapse(id, cartPages);
    colImages.append(cardImagesCollapse);

    let colOptions = createNewElement('div', 'col-12 col-lg-9');
    row.append(colOptions);

    if(isCartOrderFinished){
        colOptions.classList.add('opacity-75');
    }


    let optionsContainer = createNewElement('div', 'text-center px-20 px-sm-0');
    colOptions.append(optionsContainer);

    let form = createNewElement('form', 'your-cart-options text-center text-lg-start flex-fill justify-content-center justify-content-lg-start row row-cols-lg-3 row-cols-xl-4 row-cols-sm-2');
    form.id = id;
    optionsContainer.append(form);


    cartOptions.forEach(option => {

        let collapse = createNewElement('div', 'show-lg collapse cart-options-collapse');
        collapse.id = getCartCollapseId(option.id);
        let label = createNewElement('label', 'inline-label', option.name);
        label.for = option.id;

        if(option.name == 'Quantity'){
            collapse.className = 'mb-0';
        }

        if(option.icon){
            let icon = createNewElement('span', `${option.icon} ms-2 d-inline-block align-middle`);
            label.append(icon);

            if(option.info){
                icon.dataset.bsToggle = 'tooltip';
                icon.dataset.bsPlacement = 'top';
                icon.setAttribute('title', `${option.info}`);

                new bootstrap.Tooltip(icon, {});
            }
        }

        

        collapse.append(label);

        let select = createNewElement('select', 'tom-select');
        select.id = option.id;
        collapse.append(select);

        if(isCartOrderFinished){
            select.classList.add('disabled');
        }

        option.options.forEach(collapseOprion => {
            let option = createNewElement('option', '', collapseOprion.text);
            option.value = collapseOprion.value;
            select.append(option);
            
        });

        addTomSelect(select, tomSelectDefaultOptions);

        form.append(collapse);


        collapse.addEventListener('show.bs.collapse', function () {
            allOptionsBtn.innerText = '- Show Less';
        })
        collapse.addEventListener('hide.bs.collapse', function () {
            allOptionsBtn.innerText = '+ Show More';
        })

    });


    let allOptionsContainerBtn = createNewElement('div', 'd-lg-none mt-3');
    form.append(allOptionsContainerBtn);

    let allOptionsBtn = createNewElement('a', 'btn-link d-block your-cart-image-count text-center text-xxs text-drab mt-3 fw-normal', '+ Show More');
    allOptionsBtn.type = 'button';
    allOptionsBtn.dataset.bsToggle = 'collapse';
    allOptionsBtn.dataset.bsTarget = '.cart-options-collapse';
    allOptionsBtn.classList.add('m-auto', 'm-sm-0');
    

    let collapseIds = cartOptions.map(option => getCartCollapseId(option.id)).join(' ');
    allOptionsBtn.setAttribute('aria-controls', collapseIds);
    allOptionsContainerBtn.append(allOptionsBtn);



    let hrBottom = createNewElement('hr');
    colOptions.append(hrBottom);


    let actionsContainer = createNewElement('div', 'd-sm-flex justify-content-between align-items-center flex-sm-row-reverse mt-4');
    colOptions.append(actionsContainer);

    let totalContainer = createNewElement('div', 'text-center text-sm-end');
    actionsContainer.append(totalContainer);

    let totalName = createNewElement('span', 'text-drab d-block d-lg-inline-block me-lg-3', 'Item Total');
    totalContainer.append(totalName);

    let totalPrice = createNewElement('span', 'js-your-card-total fw-bold', `$${total}`);
    totalContainer.append(totalPrice);

    let btnsContainer = createNewElement('div', 'd-flex justify-content-center justify-content-sm-left mt-3 mt-sm-0');
    actionsContainer.append(btnsContainer);

    if(isCartOrderFinished){

        let saveForLaterBtn = createCircleIconBtnAnimation('btn-pink', 'wa-wa-save', 'Save For Later');
        saveForLaterBtn.classList.add('me-3', 'btn-circle-save');
        saveForLaterBtn.addEventListener('click', onclickSaveOrderBtn);
        btnsContainer.append(saveForLaterBtn);
    } else {
        let editImageBtn = createCircleIconBtnAnimation('btn-blue', 'wa-wa-image-edit', 'Edit <span class="d-none d-sm-inline-block">Images</span>');
        editImageBtn.classList.add('me-3');
        btnsContainer.append(editImageBtn);

        let removeImageBtn = createCircleIconBtnAnimation('btn-red', 'wa-wa-remove', 'Remove');
        btnsContainer.append(removeImageBtn);
    }

    


    return item;

}






function getCartCollapseId(id){
    return `collapse-${id}`;
}





/* *********************************************** */
/**************** ON CLICK SAVE CART ***************/
/* *********************************************** */
function onclickSaveOrderBtn(ev){
    ev.currentTarget.classList.toggle('active'); 
    let modalNameYourProject = new bootstrap.Modal(document.getElementById('modalNameYourProject'), {})
    modalNameYourProject.show();
}


