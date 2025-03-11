
let customDesignsList = {
    result: [
      {
        id: '1233wqdasdaassd', 
        file_name: 'Business Card Red Design',
        image: 'img-05.png',
        file_completed: true
      },
      {
        id: '12w3wqdasdasd',  
        file_name: 'Business Card Red Design',
        image: 'img-05.png',
        file_completed: false
      },
      {
        id: '1233wasasdasd',  
        file_name: 'Business Card Red Design',
        image: 'img-05.png',
        file_completed: true
      },
      {
        id: '12q3wqdasdasd',  
        file_name: 'Business Card Red Design',
        image: 'img-05.png',
        file_completed: true
      },
      {
        id: '12q3wqdasdasd',  
        file_name: 'Business Card Red Design',
        image: 'img-05.png',
        file_completed: true
      },
      {
        id: '12qwwqqdasdasd',  
        file_name: 'Business Card Red Design',
        image: 'img-05.png',
        file_completed: false
      }
    ]
}



/* *********************************************** */
/***** CREATE CUSTOM DESIGN IN PROGRESS LIST *******/
/* *********************************************** */
let customDesignInProgressList = document.getElementById('customDesignInProgressList');




/* *********************************************** */
/******* CREATE CUSTOM DESIGN COMPLETED LIST *******/
/* *********************************************** */
let customCompletedDesignList = document.getElementById('customCompletedDesignList');


customDesignsList.result.forEach((item) => {

    let fileItem = createFileCustomDesign(item.id, item.file_name, item.image);

    if(item.file_completed){

        customCompletedDesignList.append(fileItem);
    } else {
        customDesignInProgressList.append(fileItem);

    }

})






/* *********************************************** */
/*********** CREATE FILE CUSTOM DESIGNS ************/
/* *********************************************** */
function createFileCustomDesign(id, productName, urlImg){

    let col = createNewElement('div', 'mb-4');
    col.id = id;
  
    let item = createNewElement('div', 'saved-design-library-item');
    col.append(item);
  
    let img = createNewElement('div', 'saved-design-library-item-img position-relative');
    img.style.backgroundImage = `url('assets/img/saved-library/${urlImg}')`;
    item.append(img);
  
    let dropdown = createNewElement('div', 'dropdown');
    img.append(dropdown);
  
    let editBtn = createNewElement('button', 'btn btn-link btn-edit-saved-library dropdown-toggle');
    editBtn.id = `folder-${id}`;
    editBtn.type = 'button';
    editBtn.dataset.bsToggle = 'dropdown';
    editBtn.dataset.bsAutoClose = 'outside';
    editBtn.setAttribute('aria-expanded', 'false'); 
    dropdown.append(editBtn);
  
    let editMenu = createDropDownMenuCustomDesignFile(`folder-${id}`, id,productName);
    dropdown.append(editMenu);
  
  
    let icon = createNewElement('span', 'icon-more-circle');
    editBtn.append(icon);
  
    let productNameDiv = createNewElement('span', 'saved-library-item-name saved-design-library-item-name text-center', productName);
    item.append(productNameDiv);
  
    return col;
}




/* *********************************************** */
/**** CREATE DROP DOWN MENU CUSTOM DESIGN FILE *****/
/* *********************************************** */
function createDropDownMenuCustomDesignFile(id, colId){
    let ul = createNewElement('ul', 'dropdown-menu dropdown-menu-edit-folder');
    ul.setAttribute('aria-labelledby', `${id}`);

    let countEditLinks = 4;

    for(let i = 1; i <= countEditLinks; i++){

        let li = createNewElement('li');
        let link = createNewElement('a', 'dropdown-item d-flex align-items-center');
        let linkName = createNewElement('span', 'lh-1');
        let icon = createNewElement('span', 'text-sm me-2 lh-1');
        
        if( i == 1){
            linkName.innerHTML += 'Order Print';
            icon.classList.add('fi-rr-shopping-cart');
        } else if( i == 2){
          linkName.innerHTML += 'Rename';
          link.classList.add('pt-3');
          icon.classList.add('fi-rr-pencil');
          link.dataset.bsToggle = 'modal';
          link.dataset.bsTarget = '#renameFolderModal';
          link.dataset.bsFolderId = colId;

        } else if( i == 3){
          linkName.innerHTML += 'Request Variations'; 
          link.classList.add('pb-3');
          icon.classList.add('fi-rr-duplicate');
        } else if( i == 4){
          linkName.innerHTML += 'Request Changes';
          icon.classList.add('fi-rr-refresh');
        } 
  
        li.append(link);
        link.prepend(icon);
        link.append(linkName);
        ul.append(li);
         
      }
    
    return ul;
}