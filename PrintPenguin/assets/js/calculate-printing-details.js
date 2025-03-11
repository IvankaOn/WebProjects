/* *********************************************** */
/***** CALCULATE SHIPPING & TURNAROUND *************/
/* *********************************************** */
let formPrintDetailsCalculate = document.getElementById('formPrintDetailsCalculate');

if (formPrintDetailsCalculate) {
	let btnShippingCalculate = document.getElementById('btnShippingCalculate');
	let inputCodeShipping = document.getElementById('inputCodeShipping');
	let labelCodeShipping = document.getElementById('labelCodeShipping');
	let btnCodeShippingChange = document.getElementById('codeShippingChange');
	
	let formPrintDetailsCalculateTS = new TomSelect(formPrintDetailsCalculate, {controlInput: null});
	
	
	btnShippingCalculate.addEventListener('click', (e) =>{
		e.preventDefault();
		
		labelCodeShipping.querySelector('span').innerText = 'Shipping to ' + inputCodeShipping.value;
		btnCodeShippingChange.classList.remove('d-none');
	
		inputCodeShipping.closest('div').classList.add('d-none');
		formPrintDetailsCalculateTS.wrapper.classList.remove('d-none');
	});
	
	btnCodeShippingChange.addEventListener('click', (e) =>{
		e.preventDefault();
	
		labelCodeShipping.querySelector('span').innerText = 'Shipping & Turnaround';
		inputCodeShipping.value = '';
		inputCodeShipping.closest('div').classList.remove('d-none');
		btnCodeShippingChange.classList.add('d-none');
		formPrintDetailsCalculateTS.wrapper.classList.add('d-none');
	});
	
	inputCodeShipping.addEventListener('keyup', (e) => {
		if (inputCodeShipping.value.length > 0){
			btnShippingCalculate.classList.remove('text-drab');
			btnShippingCalculate.classList.add('text-primary');
	
		} else {
			btnShippingCalculate.classList.add('text-drab');
			btnShippingCalculate.classList.remove('text-primary');
		}
	});
}