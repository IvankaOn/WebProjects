let containerOurDesignProject = document.getElementById('containerOurDesignProject');
let designCards;

if(containerOurDesignProject){

    designCards = containerOurDesignProject.querySelectorAll('.design-card');
    
    /* CLICK DESIGN CARD */
    designCards.forEach(designCard =>{
        designCard.addEventListener('click',function(){
            createDesignFlyerBodyModal('assets/img/home-page/img-front.png', 'assets/img/home-page/img-back.png', ['Straight Corners', 'Flyer 4.5x6 in', 'Dobule Sided', 'Custom Made'],
             'Flyer Design For Architecture Studio', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
            modalDesignFlyer.show();
        })
    })
}

let modalDesignFlyerBody = document.getElementById('modalDesignFlyerBody');
let modalDesignFlyerContaniner = document.getElementById('modalDesignFlyer');
let modalDesignFlyer = new bootstrap.Modal(modalDesignFlyerContaniner, {});


/* *********************************************** */
/************** CREATE DESIGN MODAL BODY ***********/
/* *********************************************** */
function createDesignFlyerBodyModal(urlFront='', urlBack='', options='', productTitle='', productDesc=''){

    modalDesignFlyerBody.innerHTML = '';

    let row = createNewElement('div', 'row');

    modalDesignFlyerBody.append(row);

    /* FRONT && BACK */
    if(urlFront) {
        let columnFront = createNewElement('div', 'col-12');
        row.append(columnFront);

        if(urlFront && urlBack) {
            columnFront.className = 'col-12 col-sm-6';
        }
    
        let columnFrontImgContainer = createNewElement('div', 'bg-dark-blue mb-5 rounded-6 overflow-hidden text-white text-center p-4');
        columnFront.append(columnFrontImgContainer);
    
        let columnFrontHeading = createNewElement('p', 'mb-4', 'Front');
        columnFrontImgContainer.append(columnFrontHeading);
        
        let columnFrontImgWrap = createNewElement('div', 'modal-design-flyer-img');
        columnFrontImgContainer.append(columnFrontImgWrap);
    
        let columnFrontImg = createNewElement('img');
        columnFrontImg.src = urlFront;
        columnFrontImg.alt = 'Image Front';
        columnFrontImgWrap.append(columnFrontImg);
    } 


    /* BACK && FRONT */
    if(urlBack){

        let columnBack = createNewElement('div', 'col-12');
        row.append(columnBack);

        if(urlBack && urlFront){
            columnBack.className = 'col-12 col-sm-6';
        }
    
        let columnBackImgContainer = createNewElement('div', 'bg-dark-blue mb-5 rounded-6 overflow-hidden text-white text-center p-4');
        columnBack.append(columnBackImgContainer);
    
        let columnBackHeading = createNewElement('p', 'mb-4', 'Back');
        columnBackImgContainer.append(columnBackHeading);
        
        let columnBackImgWrap = createNewElement('div', 'modal-design-flyer-img');
        columnBackImgContainer.append(columnBackImgWrap);
    
        let columnBackImg = createNewElement('img');
        columnBackImg.src = urlBack;
        columnBackImg.alt = 'Image Back';
        columnBackImgWrap.append(columnBackImg);
    }

    /* DESCRIPTION  */
    
    let columnDescription = createNewElement('div', 'col-12 col-md-10 m-auto mb-3');
    row.append(columnDescription);

    let divDescription = createNewElement('div', 'text-center');
    columnDescription.append(divDescription);

    let title = createNewElement('h4', 'text-xll', productTitle);
    divDescription.append(title);

    let descText = createNewElement('p', '', productDesc);
    divDescription.append(descText);


    /*  OPTION  LIST*/
    if(options != 0){
        let optionList = createNewElement('div', 'row row-cols-1 row-cols-sm-2 row-cols-xl-4 flex-xl-nowrap');
        modalDesignFlyerBody.append(optionList);
    
        for( let i in options){
            let optionItem = createNewElement('div', 'd-flex align-items-center justify-content-center justify-content-xl-start text-primary fw-normal me-xl-3 mb-2 mb-xl-0');
            optionList.append(optionItem);
    
            let iconCheck = createNewElement('span', 'icon-tick-circle fw-normal me-2');
            optionItem.append(iconCheck);
            optionItem.innerHTML += options[i];
        }
    }


}