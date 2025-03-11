let savedJobsContent = document.getElementById('savedJobsContent');

/* *********************************************** */
/************ CREATE SAVED JOBS ITEMS **************/
/* *********************************************** */
if(savedJobsContent) {

    let savedJobsItemOne =  createSavedJobItem(
        {
        'name': 'Business Cards',
        'uuid': 'cat_uuid_1',
        'jobs': [
            {
             'title': 'John Doe Business Cards',
             'uuid': 'sjb_uuid_1',
             'cart_pages': [
               {
                   'id': '1wwzzc3',
                   'img_name': '../../assets/img/img-cart/img-cart.png',
               },
               {
                   'id': '1zxzcxcz2323',
                   'img_name': '',
               },
               {
                   'id': '1xc2323',
                   'img_name': '../../assets/img/img-cart/img-cart.png',
               },
               {
                   'id': '1wc24433',
                   'img_name': '',
               },
               {
                   'id': '1xasfs323',
                   'img_name': '',
               }
           ],
             'properties': [
                  {
                       'uuid': 'prop_1234567890',
                       'label': 'Finish',
                       'selected': '50'
                  },
                  {
                       'uuid': 'prop_1234567891',
                       'label': 'Rounded',
                       'selected': '14pt Gloss'
                  },
                  {
                       'uuid': 'prop_1234567892',
                       'label': 'Rounded',
                       'selected': 'dfgdfg'
                  },
                  {
                       'uuid': 'prop_1234567893',
                       'label': 'Finish',
                       'selected': 'dfg'
                  },
                  {
                       'uuid': 'prop_1234567894',
                       'label': 'Finish',
                       'selected': 'dfgd'
                  },
                  {
                       'uuid': 'prop_1234567895',
                       'label': 'Finish',
                       'selected': '234234'
                  }
            ],
             'buttons': [
                  {
                       'text': 'Remove',
                       'icon': 'wa-wa-remove',
                       'color': 'red',
                       'onclick': 'removeSavedJob(\'sjb_uuid_1\')',
                       'href': null
                  },
                  {
                       'text': 'Add To Cart',
                       'icon': 'wa-wa-shopping-cart',
                       'color': 'blue',
                       'onclick': 'addToCart(\'sjb_uuid_1\')',
                       'href': null
                  },
                  {
                       'text': 'Buy Now',
                       'icon': 'wa-wa-credit-card',
                       'color': 'green',
                       'onclick': 'buyNow(\'sjb_uuid_1\')',
                       'href': null
                  }
               ]
            }
        ]
       }
    );
    savedJobsContent.append(savedJobsItemOne);

    let savedJobsItemTwo =  createSavedJobItem(
        {
        'name': 'Flyers',
        'uuid': 'cat_uuid_q',
        'jobs': [
            {
             'title': 'Marketing Datasheet',
             'uuid': 'sjb_uuid_w',
             'cart_pages': [
               {
                   'id': '1wwzzc3',
                   'img_name': '../../assets/img/img-cart/img-cart.png',
               },
               {
                   'id': '1zxzcxcz2323',
                   'img_name': '',
               },
               {
                   'id': '1xc2323',
                   'img_name': '../../assets/img/img-cart/img-cart.png',
               },
               {
                   'id': '1wc24433',
                   'img_name': '',
               },
               {
                   'id': '1xasfs323',
                   'img_name': '',
               }
           ],
             'properties': [
                  {
                       'uuid': 'prop_1234567890',
                       'label': 'Finish',
                       'selected': '50'
                  },
                  {
                       'uuid': 'prop_1234567891',
                       'label': 'Rounded',
                       'selected': '14pt Gloss'
                  },
                  {
                       'uuid': 'prop_1234567892',
                       'label': 'Rounded',
                       'selected': 'dfgdfg'
                  },
                  {
                       'uuid': 'prop_1234567893',
                       'label': 'Finish',
                       'selected': 'dfg'
                  },
                  {
                       'uuid': 'prop_1234567894',
                       'label': 'Finish',
                       'selected': 'dfgd'
                  },
                  {
                       'uuid': 'prop_1234567895',
                       'label': 'Finish',
                       'selected': '234234'
                  }
            ],
             'buttons': [
                  {
                       'text': 'Remove',
                       'icon': 'wa-wa-remove',
                       'color': 'red',
                       'onclick': 'removeSavedJob(\'sjb_uuid_1\')',
                       'href': null
                  },
                  {
                       'text': 'Add To Cart',
                       'icon': 'wa-wa-shopping-cart',
                       'color': 'blue',
                       'onclick': 'addToCart(\'sjb_uuid_1\')',
                       'href': null
                  },
                  {
                       'text': 'Buy Now',
                       'icon': 'wa-wa-credit-card',
                       'color': 'green',
                       'onclick': 'buyNow(\'sjb_uuid_1\')',
                       'href': null
                  }
               ]
            },
            {
                'title': 'Marketing Datasheet Two',
                'uuid': 'sjb_uuid_qas',
                'cart_pages': [
                    {
                        'id': '1wwzzc3',
                        'img_name': '../../assets/img/img-cart/img-cart.png',
                    },
                    {
                        'id': '1zxzcxcz2323',
                        'img_name': '',
                    },
                    {
                        'id': '1xc2323',
                        'img_name': '../../assets/img/img-cart/img-cart.png',
                    },
                    {
                        'id': '1wc24433',
                        'img_name': '',
                    },
                    {
                        'id': '1xasfs323',
                        'img_name': '',
                    }
                ],
                'properties': [
                     {
                          'uuid': 'prop_1234567890',
                          'label': 'Finish',
                          'selected': '50'
                     },
                     {
                          'uuid': 'prop_1234567891',
                          'label': 'Rounded',
                          'selected': '14pt Gloss'
                     },
                     {
                          'uuid': 'prop_1234567892',
                          'label': 'Rounded',
                          'selected': 'dfgdfg'
                     },
                     {
                          'uuid': 'prop_1234567893',
                          'label': 'Finish',
                          'selected': 'dfg'
                     },
                     {
                          'uuid': 'prop_1234567894',
                          'label': 'Finish',
                          'selected': 'dfgd'
                     },
                     {
                          'uuid': 'prop_1234567895',
                          'label': 'Finish',
                          'selected': '234234'
                     }
               ],
                'buttons': [
                     {
                          'text': 'Remove',
                          'icon': 'wa-wa-remove',
                          'color': 'red',
                          'onclick': 'removeSavedJob(\'sjb_uuid_1\')',
                          'href': null
                     },
                     {
                          'text': 'Add To Cart',
                          'icon': 'wa-wa-shopping-cart',
                          'color': 'blue',
                          'onclick': 'addToCart(\'sjb_uuid_1\')',
                          'href': null
                     },
                     {
                          'text': 'Buy Now',
                          'icon': 'wa-wa-credit-card',
                          'color': 'green',
                          'onclick': 'buyNow(\'sjb_uuid_1\')',
                          'href': null
                     }
                  ]
          }
        ]
       }
    );
    savedJobsContent.append(savedJobsItemTwo);
}




function createSavedJobItem({ name = '', uuid = '', jobs = []}) {

    let item = createNewElement('div', 'mb-5');

    let title = createTitle({title: name, line: true});
    item.append(title);

    let container = createNewElement('div', 'container mt-4');
    item.append(container);

    jobs.forEach(item => {

        let row = createNewElement('div', 'row justify-content-center');
        container.append(row);

        let jobsImagesCol = createNewElement('div', 'col-12 col-lg-4 mb-4 mb-lg-0 ps-lg-0');
        row.append(jobsImagesCol);


        let cardImagesCollapse = createCardImagesCollapse(item.uuid, item.cart_pages);
        jobsImagesCol.append(cardImagesCollapse);


        let jobsActionsCol = createNewElement('div', 'col-11 col-sm-10 col-lg-8');
        row.append(jobsActionsCol);

        let jobsActionsRow = createNewElement('div', 'row align-items-center');
        jobsActionsCol.append(jobsActionsRow);

        let name = createNewElement('h5', 'text-capitalize text-center text-lg-start text-sm mb-4 mb-lg-2', item.title);
        jobsActionsRow.append(name);

        let jobsPropertiesCol = createNewElement('div', 'col-12 col-xxl-10');
        jobsActionsRow.append(jobsPropertiesCol);

      

        let propertiesContainer = createNewElement('div', 'row row-cols-sm-2');
        jobsPropertiesCol.append(propertiesContainer);

        item.properties.forEach(propertie => {

            let wrap = createNewElement('div', 'text-xs mb-2');
            propertiesContainer.append(wrap);

            let label = createNewElement('span', 'text-drab pe-2', `${propertie.label}: `);
            wrap.append(label);

            let selected = createNewElement('span', 'float-end fw-normal text-end text-ellipsis w-50', propertie.selected);
            wrap.append(selected);
            
        });


        let jobsButtonsCol = createNewElement('div', 'col-12 col-xxl-10');
        jobsActionsRow.append(jobsButtonsCol);

        let wrapBtns = createNewElement('div', 'd-md-flex justify-content-around mt-4 mt-lg-2');
        jobsButtonsCol.append(wrapBtns);

        item.buttons.forEach(btn => {

          let btnEl =  createCircleIconBtnAnimation(`btn-${btn.color}`, `${btn.icon}`, `${btn.text}`);
          btnEl.classList.add('mb-3', 'mb-md-0', 'mb-xxl-2', 'm-auto', 'mx-lg-0', 'text-xxs');
          wrapBtns.prepend(btnEl);
            
        });

        if(jobs[jobs.length - 1].uuid != item.uuid){
            let hr = createNewElement('hr', 'text-drab my-4');
            row.append(hr);
        }

    });

    return item;
    
}