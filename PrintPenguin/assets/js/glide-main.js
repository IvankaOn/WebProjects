const creditCardsConfig = {
    type: 'slider',
    perView: 2,
    startAt: 1,
    focusAt: 'center',
    breakpoints: {
        766: {
            perView: 1,
        },
        767: {
            perView: 1.25
        },
        992: {
            perView: 1
        },
        1400: {
            perView: 1.25
        }
        
    },
};

const singleCreditCardsConfig = {
    type: 'slider',
    startAt: 0
};

var glideCreditCards = new Glide('.glide-credit-cards', creditCardsConfig);  


function setGlideConfig(glide, conf) {
    glide.update(conf);
}

function showPrevSlide(glide) {
    if (glide.index != 0) {
        glide.go('<');
    }
}


/* *********************************************** */
/****** CREATE NEXT AND PREV BTNS  GLIDE SLIDER ****/
/* *********************************************** */
function createArrowsGlideBtns(glideEl) {

    let wrap = createNewElement('div', 'top-50 w-100 position-absolute z-index-plus-2 js-glide-arrows');
    wrap.dataset.glideEl = 'controls';


    let prevBtn = createNewElement('button', 'glider-prev start-0');
    prevBtn.type = 'button';
    prevBtn.dataset.glideDir = '<';
    prevBtn.addEventListener('click', function (event) {
        event.preventDefault();
        glideEl.go('<');
    });

    wrap.append(prevBtn);

    let prevIcon = createNewElement('span', 'fi-rr-angle-small-left text-lg text-white');
    prevBtn.append(prevIcon);


    let nextBtn = createNewElement('button', 'glider-next end-0');
    nextBtn.type = 'button';
    nextBtn.dataset.glideDir = '>';
    nextBtn.addEventListener('click', function (event) {
        event.preventDefault();
        glideEl.go('>');
    });

    wrap.append(nextBtn);

    let nextIcon = createNewElement('span', 'fi-rr-angle-small-right text-lg text-white');
    nextBtn.append(nextIcon);

    return wrap;
}





/* *********************************************** */
/********* UPDATE GLIDE SLIDER *********************/
/* *********************************************** */
function updateSlider(glideEl){
    updateSliderBullets();
    glideEl.mount();
}



  
function updateSliderBullets() {
    let slides = Array.from(document.querySelectorAll('.glide__slide')).filter(x => !x.classList.contains('glide__slide--clone'));
    let glideBullets = document.querySelector('.glide__bullets');
    glideBullets.innerHTML = '';

    for (let index = 0; index < slides.length; index++) {
        let bullet = createNewElement('button', 'glide__bullet');
        bullet.dataset.glideDir = `=${index}`;
        glideBullets.append(bullet);

        if(slides.length == 1) {
            bullet.classList.add('d-none');
        }
    }

    
    
}