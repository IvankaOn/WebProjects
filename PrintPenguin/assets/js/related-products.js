let relatedProductsRow = document.querySelector('.related-products-row');

if(relatedProductsRow){

  API.get('/product/item/%7BPRODUCT_UUID_HERE%7D/related')
  .then(result => {
    createRelatedProducts(result, relatedProductsRow);
  })
  .catch(error => {
      console.error(error);
  });

}




/* *********************************************** */
/************* CREATE RELATED PRODUCTS *************/
/* *********************************************** */
function createRelatedProducts(result, relatedProductsRow){

    result.forEach(relatedProductId => {

      let product = menu.getProduct(relatedProductId);

      let productItem = createProductCard(relatedProductId, product);
      relatedProductsRow.append(productItem);

    })
 
    var dotsContainer = relatedProductsRow.nextElementSibling;

    new Glider(relatedProductsRow, {
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
        
}