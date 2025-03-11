// /* *********************************************** */
// /**************** UPDATE MENU RESULTS **************/
// /* *********************************************** */
function updateMenuResults(products, title){

  let mainMenuResultsName = document.getElementById('mainMenuResultsName');

  mainMenuResultsName.innerHTML = title;

    resultsProductsMenu.innerHTML = '';
  
    products.forEach(productId => {
  
      let product = menu.getProduct(productId);
  
      let productItem = createProductCard(product.uuid, product, 'product-menu');
      resultsProductsMenu.append(productItem);
  
  
    });
  
}



// /* *********************************************** */
// /************ CREATE MENU CATEGORIES ***************/
// /* *********************************************** */
let categories = false; //menu.getCategories();

if(categories) {

  categories.forEach(categoryId => {

    let categoryName = menu.getCategoryName(categoryId);
    let categoryMenu = createCategoryMenu(categoryId, categoryName);
    mainMenuNav.querySelector('.main-category-list').append(categoryMenu);

    let categoryGroups = menu.getCategoryGroups(categoryId);

    categoryGroups.forEach(categoryGroupId => {

      let groupName = menu.getGroupName(categoryGroupId);
      let groupProducts = menu.getGroupProducts(categoryGroupId);

      let groupBtn = createGroupMenuBtn(groupName, groupProducts, categoryId);
      categoryMenu.querySelector('.main-menu-nav-category').append(groupBtn);

    });

  });
}




function createCategoryMenu(categoryId, categoryName) {

  let categoryItem = createNewElement('div', 'mb-4');

  let collapseCategoryName = createNewElement('button', 'btn btn-link mb-0 p-0 pe-2 text-dark text-uppercase mb-0 menu-category menu-category-collapse collapsed collapse', '&nbsp;');
  collapseCategoryName.type = 'button';
  collapseCategoryName.dataset.bsToggle = 'collapse';
  collapseCategoryName.dataset.bsTarget = `#${categoryId}`;
  collapseCategoryName.setAttribute('aria-expanded', 'false');
  collapseCategoryName.id = categoryId;
  categoryItem.append(collapseCategoryName);
  

/*   let categoryDiv = createNewElement('div', 'main-category');
  categoryItem.append(categoryDiv); */


  let groupDiv = createNewElement('div', 'main-menu-nav menu-category-collapse collapse show');
  groupDiv.id = categoryId;
  categoryItem.append(groupDiv);

  let groupDivNav = createNewElement('div', 'main-menu-nav-category main-menu-nav-category-marketing-materials');
  groupDiv.append(groupDivNav);

  let groupBtn = createNewElement('button', 'btn btn-link p-0 pe-2 text-dark text-uppercase', categoryName);
  groupBtn.type = 'button';
    /*   groupBtn.addEventListener('click', () => {
    window.location.href= category_url;
  }) */
  

  groupDivNav.append(groupBtn);

  return categoryItem;

}
  
  

/* *********************************************** */
/************* CREATE MAIN MENU GROUP BTN **********/
/* *********************************************** */
function createGroupMenuBtn(groupName, groupProducts, categoryId){

  let btn = createNewElement('button', 'btn btn-link p-0 main-menu-nav-category-link hidden visible-xs main-category-btn', groupName);
  btn.type = 'button';
  btn.dataset.bsToggle = 'collapse';
  btn.dataset.bsTarget = `#${categoryId}`;
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-controls', 'mainNameGroupCollapse mainNameGroup');
  btn.addEventListener('click', (event) => {


    let dataCategoryId =  event.currentTarget.getAttribute('data-bs-target');

    document.querySelector(dataCategoryId).innerText = event.target.innerHTML;
    
    resultsProductsMenu.innerHTML = '';

    updateMenuResults(groupProducts);
   
    

  });

  return btn;
}