let favoritesLists = {
    result: [
      {
        id: '1233wqdasdaassd', 
        file_name: 'Business Card Red Design',
        image: 'img-01.png'
      },
      {
        id: '12w3wqdasdasd',  
        file_name: 'Business Card Red Design',
        image: 'img-02.png'
      },
      {
        id: '1233wasasdasd',  
        file_name: 'Business Card Red Design',
        image: 'img-03.png'
      },
      {
        id: '12q3wqdasdasd',  
        file_name: 'Business Card Red Design',
        image: 'img-04.png'
      }
    ]
}




/* *********************************************** */
/************** CREATE FAVORITES LIST **************/
/* *********************************************** */
let accountFavoritesItems = document.getElementById('accountFavoritesItems');

if(accountFavoritesItems){
    favoritesLists.result.forEach((item) => {

        let fileItem = createFavoriteItem(item.id, item.file_name, item.image);
    
        accountFavoritesItems.append(fileItem);
    
    
    });
}
    



/* *********************************************** */
/************** CREATE FAVOTITES FILE **************/
/* *********************************************** */
function createFavoriteItem(id, productName, urlImg){

    let col = createNewElement('div', 'mb-4 draggable-item');
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
  
    let editMenu = createDropDownMenuFavoriteItem(`folder-${id}`, id,productName);
    dropdown.append(editMenu);
  
  
    let icon = createNewElement('span', 'icon-more-circle');
    editBtn.append(icon);
  
    let productNameDiv = createNewElement('span', 'saved-library-item-name saved-design-library-item-name text-center', productName);
    item.append(productNameDiv);
  
    return col;
}



/* *********************************************** */
/******* CREATE DROP DOWN MENU FAVORITE ITEM *******/
/* *********************************************** */
function createDropDownMenuFavoriteItem(id, colId){
    let ul = createNewElement('ul', 'dropdown-menu dropdown-menu-edit-folder');
    ul.setAttribute('aria-labelledby', `${id}`);

    let countEditLinks = 3;

    for(let i = 1; i <= countEditLinks; i++){

        let li = createNewElement('li');
        let link = createNewElement('a', 'dropdown-item d-flex align-items-center');
        let linkName = createNewElement('span', 'lh-1');
        let icon = createNewElement('span', 'text-sm me-2 lh-1');
        
        if( i == 1){
            linkName.innerHTML += 'Order Print';
            icon.classList.add('fi-rr-shopping-cart');
        } else if( i == 2){
            linkName.innerHTML += 'View Details'; 
            icon.classList.add('fi-rr-link');
        } else if( i == 3){
            link.classList.add('text-red');
            linkName.innerHTML += 'Remove';
            icon.classList.add('icon-heart-slash');
        } 
  
        li.append(link);
        link.prepend(icon);
        link.append(linkName);
        ul.append(li);
         
      }
    
    return ul;
}