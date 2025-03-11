let autocompleteValue =  document.getElementById('autocomplete-value');
let autocompleteSuggestion =  document.getElementById('autocomplete-suggestion');

let btnBurgerMenu = document.getElementById('btnBurger');
let searchHelp = document.getElementById('searchHelp');

const inputSearch = document.getElementById('search-input');

let suggestion = '';




/* *********************************************** */
/************* GET API RESULT ON SEARCH ************/
/* *********************************************** */
function apiGetResultOnSearch(searchValue) {
  const query = searchValue.toLowerCase();
  let queryArray = query.split(' ');
  let queryLastWord = queryArray.length > 1 ? queryArray[queryArray.length - 1] : queryArray[0];

  let apiKeywords = menu.getKeywords();
  let apiSuggestions = [];
  let apiSuggestion = '';

  apiKeywords.forEach(kword => {
    
    if (kword.toLowerCase().startsWith(queryLastWord)){

        if (!apiSuggestions.includes(kword)) {

          apiSuggestions.push(kword);

          /* return; */
        }
    }

  });

  if (apiSuggestions.length == 1){
    apiSuggestion = apiSuggestions[0].slice(queryLastWord.length);
  }



 let resultSearch = menu.search(searchValue);

  let result = {
    result: {
      searchQuery: searchValue,
      suggestion: apiSuggestion,
      products: resultSearch.products,
      title: resultSearch.title
    }
  };

  return result;
}






/* *********************************************** */
/************** EVENTS SEARCH PRODUCTS *************/
/* *********************************************** */
let inputSearchValue; 
let timerId;

inputSearch.addEventListener('input', () => {

  updateSearchData(inputSearch.value);
});

inputSearch.addEventListener('focus', triggerSearchTimer);
inputSearch.addEventListener('blur', clearSearchTimer);


function triggerSearchTimer() {
  clearInterval(timerId);

  timerId = setInterval(function() {

    checkInputSearchApi(inputSearchValue);
  
  }, 1000);
}


function clearSearchTimer() {

  clearInterval(timerId);
}


inputSearch.addEventListener('keydown', (e) => {
  
  if(e.keyCode == 32 || e.keyCode == 13){
    
    if(e.keyCode == 13){
      e.preventDefault();
    }

    checkInputSearchApi();
  }

  if (e.keyCode == 9 || e.keyCode == 39) {
    e.preventDefault();
    inputSearch.value += suggestion;

    suggestion = '';
    
    autocompleteValue.innerHTML = '';
    autocompleteSuggestion.innerHTML = '';
   
  }

});




/* *********************************************** */
/**************** UPDATE SEARCH DATA ***************/
/* *********************************************** */

function checkInputSearchApi(){
  if(inputSearchValue != inputSearch.value){
    inputSearchValue = inputSearch.value;
   /* add function apiGetSearchResultProduct();  REMOVE!!!*/ 
    console.log(inputSearchValue);
  }
}



function updateSearchData(searchValue) {
  let resultProducts;
  let resultTitle;

  if(searchValue){
    
    let apiResult = apiGetResultOnSearch(searchValue);

    suggestion = apiResult.result.suggestion;
    resultProducts = apiResult.result.products;
    lresultTitle = apiResult.result.title;
  
  
    autocompleteValue.innerHTML = searchValue;
    autocompleteSuggestion.innerHTML = suggestion;

    mainMenu.classList.add('show');
    btnBurgerMenu.classList.add('active');
    btnBurgerMenu.classList.remove('collapsed');
		document.body.classList.add('body-backdrop');
		modalBackdrop.classList.remove('d-none');

    
    searchHelp.classList.remove('d-none');
    mainMenuNav.classList.add('d-none');
    mainMenuRow.classList.add('flex-column-reverse');

  } else {
    mainMenu.classList.remove('show');
    btnBurgerMenu.classList.remove('active');
		document.body.classList.remove('body-backdrop');
		modalBackdrop.classList.add('d-none');

    searchHelp.classList.add('d-none');
    mainMenuNav.classList.remove('d-none');
    mainMenuRow.classList.remove('flex-column-reverse');
  } 

  updateMenuResults(resultProducts, resultTitle);

}