/**
 * 
 * This script is for the Your Cart and for pages Account Saved Jobs
 * 
 * @param {*string} id 
 * @param {*array} cardPages 
 * @returns 
 */
function createCardImagesCollapse(id, cardPages) {

    let divCardImages = createNewElement('div', 'your-cart-image');

    let containerCardImages = createNewElement('div', 'd-flex');
    divCardImages.append(containerCardImages);

    let firstTwoCardPages = cardPages.filter((page, id) => id < 2);
    firstTwoCardPages.forEach(page => {

        let btn = createCardImageBtn(page.id, page.img_name);
        containerCardImages.append(btn);

        if(firstTwoCardPages[0].id == page.id){
            btn.classList.add('me-4', 'me-lg-2', 'me-xl-4');
        }

       
    })

    if(cardPages.length > 2){

        let cardPagesCollapse = createNewElement('div', 'collapse');
        cardPagesCollapse.id = `cardPagesCollapse-${id}`;
        divCardImages.append(cardPagesCollapse);

        let containerCardImagesCollapse = createNewElement('div', 'row row-cols-2 gx-4 gx-lg-2 gx-xl-4 gy-3 gy-lg-1 gy-xl-3 mt-2');
        cardPagesCollapse.append(containerCardImagesCollapse);

        cardPages.filter(page => !firstTwoCardPages.some(firstPage => firstPage.id === page.id)).forEach(page => {

           let span = createNewElement('span');
           let btn = createCardImageBtn(page.id, page.img_name);
           span.append(btn);
           containerCardImagesCollapse.append(span);
        })

        let showAllPagesBtn = createNewElement('a', 'btn-link d-block your-cart-image-count text-center text-xxs text-drab mt-3 fw-normal', `+ ${cardPages.length} Pages`);
        showAllPagesBtn.href = `#cardPagesCollapse-${id}`;
        showAllPagesBtn.dataset.bsToggle = 'collapse';
        showAllPagesBtn.role = 'button';
        showAllPagesBtn.setAttribute('aria-expanded', 'false');
        showAllPagesBtn.setAttribute('aria-controls', `cardPagesCollapse-${id}`);

        divCardImages.append(showAllPagesBtn);


        cardPagesCollapse.addEventListener('show.bs.collapse', function () {
            showAllPagesBtn.innerText = '- Show Less';
        })
        cardPagesCollapse.addEventListener('hide.bs.collapse', function () {
            showAllPagesBtn.innerText = `+ ${cardPages.length} Pages`;
        })
    }

    return divCardImages;

}



function createCardImageBtn(id, url) {

    let cartImageBtn = createNewElement('a', 'your-cart-img-link');

    if(url){

        cartImageBtn.classList.add('glightbox');
        cartImageBtn.href = url;
        cartImageBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const lightbox = GLightbox();
            lightbox.open(); 
        });

        let cartImage = createNewElement('span', 'your-cart-img');
        cartImage.style.backgroundImage = `url('${url}')`;

        cartImageBtn.append(cartImage);

        let carIconExpand = createNewElement('span', 'your-cart-img-icon wa-wa-expand');
        cartImageBtn.prepend(carIconExpand);
    } else {
        cartImageBtn.classList.add('cart-without-img');
    }

    return cartImageBtn;
    
}