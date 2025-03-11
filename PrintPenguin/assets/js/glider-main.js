/* *********************************************** */
/************** GLIDER SLIDER **********************/
/* *********************************************** */
/* if(document.querySelector('.glider-slider-credits-cards')){

  new Glider(document.querySelector('.glider-slider-credits-cards'), {
      slidesToShow: 3,
      slidesToScroll: 1,
      draggable: true,
      dots: '.dots',
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      },
      itemWidth: 200
  });
  
}
 */

/* *********************************************** */
/************* HEADER MAIN GLIDER ******************/
/* *********************************************** */

if(document.querySelector('.glider-slider-header')){
  
  new Glider(document.querySelector('.glider-slider-header'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: '.slider-dots-header'
    
  });
}





/* *********************************************** */
/************** MAIN SALE GLIDER *******************/
/* *********************************************** */
if(document.querySelector('.glider-slider-sale')){

  new Glider(document.querySelector('.glider-slider-sale'), {
    dots: '.slider-dots-sale',
      responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },{
            breakpoint: 993,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              dots: false,
            }
          }
      ]
    
  });
  
}





/* *********************************************** */
/*************** ALL SLIDER GLIDER *****************/
/* *********************************************** */
let glideSliders = document.querySelectorAll('.glider-slider');

if(glideSliders){
  glideSliders.forEach((elem) =>{
    var dotsContainer = elem.nextElementSibling;

    new Glider(elem, {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: dotsContainer, /* todo */
        responsive: [
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2
              }
            },{
                breakpoint: 1024,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                }
            },{
                breakpoint: 1400,
                settings: {
                  slidesToShow: 6,
                  slidesToScroll: 6,
                }
              }
        ]
        
    })
})
}