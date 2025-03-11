let recommendedProductResult = {
    'name': 'Printing Products',
    'img': 'door-hangers.png',
    'products': [
        'prd_uuid_4',
        'prd_uuid_5',
        'prd_uuid_6',
        'prd_uuid_1'
    ]
}


/* *********************************************** */
/************ SHOW RECOMMENDED PRODUCTS ************/
/* *********************************************** */
showRecommendedProducts()
function showRecommendedProducts(){

    let recommendedProductEl = document.querySelector('.js-recommended-products');
    /* TODO api.get(recommended-products) */
    if(recommendedProductEl){
        let recommendedSection = createRecommendedProductsSection(recommendedProductResult.name, recommendedProductResult.img, recommendedProductResult.products);

        recommendedProductEl.append(recommendedSection);
    }

}



/* *********************************************** */
/********** CREATE RECOMMENDED PRODUCTS ************/
/* *********************************************** */
function createRecommendedProductsSection(categoryName, imgName, products){

    let section = createNewElement('section');

    let container = createNewElement('div', 'container-fliud');
    section.append(container);

    let wrap = createNewElement('div', 'd-flex flex-column-reverse flex-lg-row card-gutter col-xxxl-10 offset-xxxl-1 px-3 px-md-4 px-xxl-5 m-auto');
    container.append(wrap);

    let wrapLeft = createNewElement('div', 'flex-grow-1 mt-4 mb-xxl-0');
    wrap.append(wrapLeft);

    let mainCategory = createNewElement('div', 'main-category-card bg-light d-sm-flex justify-content-between flex-column text-center text-sm-start rounded-6');
    wrapLeft.append(mainCategory);

    let mainCategoryDesc = createNewElement('div', 'text-center text-sm-start');

    let mainCategoryDescTop = createNewElement('div');
    mainCategoryDesc.append(mainCategoryDescTop);

    let mainCategoryDescTopSubtitle = createNewElement('span', 'text-light-gray text-xs opacity-50', 'Did you remember');
    mainCategoryDescTop.append(mainCategoryDescTopSubtitle);
    let mainCategoryDescTopTitle = createNewElement('h4', 'mb-2', 'Everything?');
    mainCategoryDescTop.append(mainCategoryDescTopTitle);

    let mainCategoryDescBottom = createNewElement('div');
    mainCategoryDesc.append(mainCategoryDescBottom);

    let mainCategoryDescBottomSubtitle = createNewElement('span', 'text-xs', 'Review all');
    mainCategoryDescBottom.append(mainCategoryDescBottomSubtitle);
    let mainCategoryDescBottomTitle = createNewElement('p', 'fw-normal text-md', categoryName);
    mainCategoryDescBottom.append(mainCategoryDescBottomTitle);

    mainCategory.append(mainCategoryDesc);

    let mainCategoryBtn = createNewElement('button', 'btn btn-azure text-white btn-animation-arrow rounded-sm-circle big-btn-azure-circle big-btn-azure-circle-small p-sm-0 mt-3 mt-sm-0 z-index-plus-1');
    let mainCategoryBtnName = createNewElement('span', 'd-sm-none', 'See More Products');
    mainCategoryBtn.append(mainCategoryBtnName);
    let mainCategoryBtnIcon = createNewElement('span', 'icon-arrow-right-1 ms-2 ms-sm-0 btn-animation-arrow-right d-inline-block');
    mainCategoryBtn.append(mainCategoryBtnIcon);
    mainCategory.append(mainCategoryBtn);

    let mainCategoryImg = createNewElement('div', 'main-category-card-img');
    mainCategoryImg.style.backgroundImage = `url('/assets/img/img-cart/${imgName}')`;
    mainCategory.append(mainCategoryImg);


    let wrapRight = createNewElement('div', 'd-flex flex-wrap card-gutter align-content-end justify-content-center justify-content-lg-start count-products-items');
    wrap.append(wrapRight);
    wrapRight.innerHTML = `
    
    <a href="/printing/business-cards" class="btn-link">
    <div class="card-product grey">
        <div class="card-product-image" style="background-image: url('/assets/img/test-card-img.png')"></div>
        <div class="card-product-body">
            <div class="card-product-body-content">
                <span class="text-xs mb-3 fw-normal d-block lh-sm">Business Card Glossy 4.2” x 3.2”</span>
                <span class="text-xxs lh-sm d-block text-gray fw-light">Starting at $10</span>
            </div>
        </div>
    </div>
</a>
<a href="/printing/business-cards" class="btn-link">
<div class="card-product grey">
    <div class="card-product-image" style="background-image: url('/assets/img/test-card-img.png')"></div>
    <div class="card-product-body">
        <div class="card-product-body-content">
            <span class="text-xs mb-3 fw-normal d-block lh-sm">Business Card Glossy 4.2” x 3.2”</span>
            <span class="text-xxs lh-sm d-block text-gray fw-light">Starting at $10</span>
        </div>
    </div>
</div>
</a>
<a href="/printing/business-cards" class="btn-link">
<div class="card-product grey">
    <div class="card-product-image" style="background-image: url('/assets/img/test-card-img.png')"></div>
    <div class="card-product-body">
        <div class="card-product-body-content">
            <span class="text-xs mb-3 fw-normal d-block lh-sm">Business Card Glossy 4.2” x 3.2”</span>
            <span class="text-xxs lh-sm d-block text-gray fw-light">Starting at $10</span>
        </div>
    </div>
</div>
</a>
<a href="/printing/business-cards" class="btn-link">
<div class="card-product grey">
    <div class="card-product-image" style="background-image: url('/assets/img/test-card-img.png')"></div>
    <div class="card-product-body">
        <div class="card-product-body-content">
            <span class="text-xs mb-3 fw-normal d-block lh-sm">Business Card Glossy 4.2” x 3.2”</span>
            <span class="text-xxs lh-sm d-block text-gray fw-light">Starting at $10</span>
        </div>
    </div>
</div>
</a>
    
    `
    return section;
}