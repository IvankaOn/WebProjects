/* let allPromotionsProducts = menu.getPromotions(); */

let promotionsRows = document.querySelectorAll('.promotions-row');



/* *********************************************** */
/********** ADD PROMOTIONS PRODUCTS ****************/
/* *********************************************** */
/* createPromotionsProducts(allPromotionsProducts); */




/* *********************************************** */
/******* CREATE PROMOTIONS PRODUCTS ****************/
/* *********************************************** */
function createPromotionsProducts(products) {
   
    if(promotionsRows){

        promotionsRows.forEach(promotionsRow => {

            for (const [key, prd] of Object.entries(products)) {
  
                let product = createProductCard(key, prd);
         
                promotionsRow.append(product);
            }
            
            var dotsContainer = promotionsRow.nextElementSibling;

            new Glider(promotionsRow, {
                draggable: true,
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

}


