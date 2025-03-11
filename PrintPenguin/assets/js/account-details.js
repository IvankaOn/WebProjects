let accountDetailsItem = document.getElementById('accountDetailsItem');
let accountDetailsGenerateCodeRow = document.getElementById('accountDetailsGenerateCodeRow');
let permissionsTitle = document.getElementById('permissionsTitle');
let permissionsDesc = document.getElementById('permissionsDesc');
let permissionsContent = document.getElementById('permissionsContent');


// let result = API.get('/permissions', {}, false);

// permissionsTitle.innerHTML = result.title;
// permissionsDesc.innerHTML = result.description;
// createPermissionItems(result.permissions);

API.get('/permissions')
.then(result => {
    permissionsTitle.innerHTML = result.title;
    permissionsDesc.innerHTML = result.description;

	createPermissionItems(result.permissions);
})
.catch(error => {
	console.error(error);
});




/* *********************************************** */
/******* CREATE INVITE NEW USER CONTENT ************/
/* *********************************************** */
let inviteNewUserBtn = document.getElementById('inviteNewUserBtn');
let accountDetailsContent = document.getElementById('accountDetailsContent');
let inviteNewUserContent = document.getElementById('inviteNewUserContent');

if(inviteNewUserBtn){
    inviteNewUserBtn.addEventListener('click', () => { /* todo */
        accountDetailsContent.innerHTML = '';
        inviteNewUserContent.classList.remove('d-none');
        document.querySelector('header').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    })
}




/* *********************************************** */
/********* ONCHANGE ALL INPUTS CHECKBOX EVENT ******/
/* *********************************************** */
function onChangePermissionAllInput(event){

    let permissionInput = event.target;

    let permissionsGroup = permissionInput.closest('.permissions-group');

    permissionsGroup.classList.remove('has-selected');

    permissionsGroup.classList.remove('all-selected');

    if(permissionInput.checked == true){
        permissionsGroup.classList.add('all-selected');
    }

    let allInputsGroup = permissionInput.closest('.permissions-group').querySelector('.permissions-group-all-inputs').querySelectorAll('input[type="checkbox"]');

    for (var i = 0; i < allInputsGroup.length; i++) {

        allInputsGroup[i].checked = permissionInput.checked;
    }
}


function onChangePermissionOptionsInputs(event){

    let permissionInput = event.target;
    let permissionsGroup = permissionInput.closest('.permissions-group');
    let groupSummaryCheckboxInput = permissionInput.closest('.permissions-group').querySelector('.permissions-group-all input[type="checkbox"]');
    let groupCheckboxes = permissionInput.closest('.permissions-group-all-inputs').querySelectorAll('input[type="checkbox"]');
    let groupCheckedCheckboxes = permissionInput.closest('.permissions-group-all-inputs').querySelectorAll('input[type="checkbox"]:checked');


    if(permissionInput.checked == false){

        groupSummaryCheckboxInput.checked = false;


        if(!permissionsGroup.classList.contains('has-selected')){
        
            permissionsGroup.classList.add('has-selected');
            permissionsGroup.classList.remove('all-selected');
            
        }

        if(groupCheckboxes.length == groupCheckedCheckboxes.length || groupCheckedCheckboxes.length == 0){

            permissionsGroup.classList.remove('has-selected');

        }
    }

    if(permissionInput.checked == true){

        if(!permissionsGroup.classList.contains('has-selected')){
        
            permissionsGroup.classList.add('has-selected');
            permissionsGroup.classList.remove('all-selected');


        }

        if(groupCheckboxes.length == groupCheckedCheckboxes.length){

            groupSummaryCheckboxInput.checked = true;

            permissionsGroup.classList.remove('has-selected');
            permissionsGroup.classList.add('all-selected');
        }
    }
}


/* *********************************************** */
/************** ADD ITEM PERMISSIONS ***************/
/* *********************************************** */
function createPermissionItems(permissions){
    permissions.forEach(permission => {
    
        let permissionItem =  createPermissionsItem(permission.group.uuid, permission.group.title, permission.permissions);
        permissionsContent.append(permissionItem);
         
     })
}



/* *********************************************** */
/************ CREATE PERMISSIONS OPTIONS ***********/
/* *********************************************** */
function createPermissionsItem(id, nameGroup, options) {

    let allChecked;

    let col = createNewElement('div', 'col-12 col-xl-6 mb-4 mb-xl-5');

    let permissionsGroup = createNewElement('div', 'permissions-group');
    col.append(permissionsGroup);

    let permissionsGroupAll = createNewElement('div', 'permissions-group-all .account-details');
    permissionsGroup.append(permissionsGroupAll);

  
    let allGroupInput = createInputCheckboxWithAnimation(id, nameGroup);
    allGroupInput.addEventListener('change', onChangePermissionAllInput);
    permissionsGroupAll.append(allGroupInput);
    

    let hr = createNewElement('hr', 'text-drab mt-2');
    permissionsGroup.append(hr);

    let permissionsGroupAllInputs = createNewElement('div', 'permissions-group-all-inputs ps-md-4 ms-md-2');

    permissionsGroup.append(permissionsGroupAllInputs);


    Array.prototype.forEach.call(options, function(option) {
        
        let permissionOption = createInputCheckboxWithAnimation(option.uuid, option.title, option.default_value, option.tooltip);

        if(option.default_value == false){

            allChecked = false;
        } else {
            allChecked = true;
        }

        permissionOption.addEventListener('change', onChangePermissionOptionsInputs);

        permissionsGroupAllInputs.append(permissionOption);
	});
    

    if(allChecked){
        
        permissionsGroup.classList.add('all-selected');
        allGroupInput.querySelector('input').checked = true;
    }

    return col;

}




/* *********************************************** */
/************* CREATE INPUT CHECKBOX ***************/
/* *********************************************** */
function createInputCheckboxWithAnimation(id, labelName, checked, textInfo){

    let formCheck = createNewElement('div', 'form-check .account-details');

    let input = createNewElement('input', 'form-check-input form-checkbox-input .account-details-input me-2 mb-1');
    input.type = 'checkbox';
    input.id = id;
    input.checked = checked;

    formCheck.append(input);

    let label = createNewElement('label', 'form-check-label text-xs .account-details-label d-flex align-items-center');
    label.setAttribute('for', id);   
    formCheck.append(label);

    var svgIcon = `<svg width="10px" height="9px" viewbox="0 0 12 9">
                    <polyline points="1 5 4 8 11 1"></polyline>
                </svg>`;

    let iconDiv = createNewElement('span', '.account-details-icon');
    label.append(iconDiv);
    iconDiv.innerHTML = svgIcon;

    let nameChekbox = createNewElement('span', 'lh-lg ms-2', labelName);

    if(textInfo){
        nameChekbox.dataset.bsToggle = 'tooltip';
        nameChekbox.setAttribute('title', textInfo);

        new bootstrap.Tooltip(nameChekbox, {});

    }

    label.append(nameChekbox);


    return formCheck;
}





/* *********************************************** */
/************ CREATE ACCOUNT DETAILS ***************/
/* *********************************************** */

showAccountDetailsItem();

function showAccountDetailsItem() {

    /* todo api. */
    let item = createAccountDetailsItem('we34234we', 'John Smith', 'johnsmith@gmial.com', '2023.03.06', true);
    accountDetailsItem.prepend(item);
    
    let item2 = createAccountDetailsItem('we3as4we','John Smith', 'johnsmith@gmial.com', '2023.03.06', false);
    accountDetailsItem.prepend(item2);
    
}

function createAccountDetailsItem(id, name, email, date, primary) {
    
    let item = createNewElement('div', 'account-details d-flex justify-content-between align-items-center flex-column flex-xl-row text-xxs bg-light p-3 px-4 rounded-10 border-light-grey text-center text-xl-start mb-4');
    item.id = id;

    if(primary){
        item.classList.add('active');
    }

    let accountDataDiv = createNewElement('div', 'me-xl-4');
    item.append(accountDataDiv);  

    let accountData = createNewElement('div', 'd-sm-flex justify-content-center justify-content-xl-between');
    accountDataDiv.append(accountData);  

    let accountName = createNewElement('span', 'fw-normal d-block', name);
    accountData.append(accountName);

    let accountEmail = createNewElement('span', 'fw-normal ms-4', email);
    accountData.append(accountEmail);

    let accountDesc = createNewElement('span', 'd-block text-xxxs text-drab', `Invitation has been sent to ${email} on ${date}`);
    accountDataDiv.append(accountDesc);


    let btns = createNewElement('div', 'lh-3 d-sm-flex account-details-btns mt-3 mt-xl-0');
    item.append(btns);


    let primaryBtn;

    if(primary){
        primaryBtn = createCircleIconBtnAnimation('btn-green', 'wa-wa-star', 'Primary');
    } else{
        primaryBtn = createCircleIconBtnAnimation('btn-grey', 'wa-wa-star',`<span class="d-none d-xxl-inline-block">Set As </span>Primary`);
    }

    primaryBtn.classList.add('account-details-btn-primary', 'me-sm-2');
    primaryBtn.addEventListener('click', onclickAccountDetailsPrimaryBtn);
  

    btns.append(primaryBtn);

    let editBtn = createCircleIconBtnAnimation('btn-blue', 'wa-wa-edit', 'edit');
    editBtn.classList.add('me-sm-2', 'mt-2', 'mt-sm-0');
    btns.append(editBtn);

    let removeBtn = createCircleIconBtnAnimation('btn-red', 'wa-wa-remove', 'remove');
    removeBtn.classList.add('account-details-btn-remove', 'mt-2', 'mt-sm-0');
    removeBtn.dataset.accountId = id;
    removeBtn.addEventListener('click', onclickAccountDetailsRemoveBtn);
    btns.append(removeBtn);


    return item;
}





/* *********************************************** */
/************ EVENTS ACCOUNT DETAILS BTNS **********/
/* *********************************************** */
function onclickAccountDetailsPrimaryBtn(ev) {

    let activeEl = accountDetailsItem.querySelector('.account-details.active');
    activeEl.classList.remove('active');

    let notActiveBtn = activeEl.querySelector('.account-details-btn-primary');
    notActiveBtn.classList.remove('btn-green');
    notActiveBtn.classList.add('btn-grey');
    notActiveBtn.querySelector('.text').innerHTML = '<span class="d-none d-xxl-inline-block">Set As </span>Primary';

    let btn = ev.currentTarget;
    btn.classList.remove('btn-grey');
    btn.classList.add('btn-green');
    btn.querySelector('.text').innerHTML = 'Primary';


    let item = btn.closest('.account-details');
    item.classList.add('active');
}





function onclickAccountDetailsRemoveBtn(ev) {
    /* todo api.delete() */
    let id = ev.currentTarget.getAttribute('data-account-id');
    document.getElementById(id).remove();
    
}



/* *********************************************** */
/************ CREARE ACCOUNT DETAILS CODE **********/
/* *********************************************** */

if(accountDetailsGenerateCodeRow){
    
    let row = createAccountDetailsGenerateCodeRow('33A5BQ');
    accountDetailsGenerateCodeRow.append(row);
}


function createAccountDetailsGenerateCodeRow(accountCode) {
    
    let row = createNewElement('div', 'd-xl-flex align-items-center mt-4 mt-xl-0');

    let codeDiv = createNewElement('div', 'account-generate-code m-auto ms-xl-0 me-xl-4', accountCode);
    codeDiv.id = 'accountGenerateCodeItem';
    row.append(codeDiv);

    let btns = createNewElement('div', 'd-flex justify-content-center justify-content-xl-between mt-4 mt-xl-0');
    row.append(btns);

    
    
    let generateCodeBtn = createCircleIconBtnAnimation('btn-blue', 'wa-wa-edit', '<span class="d-none d-sm-inline-block">Generate </span>Code');
    generateCodeBtn.classList.add('me-2');
    generateCodeBtn.addEventListener('click', accountGenerateCode);
    btns.append(generateCodeBtn);

    let savePermanentlyBtn = createCircleIconBtnAnimation('btn-green', 'wa-wa-star', 'Save<span class="d-none d-sm-inline-block"> Permanently</span>');
    savePermanentlyBtn.dataset.bsToggle = 'modal';
    savePermanentlyBtn.dataset.bsTarget = '#supportAccessModal';
    btns.append(savePermanentlyBtn);


    return row;
}




function accountGenerateCode() {
    let item = document.getElementById('accountGenerateCodeItem');
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    let maxLength = 6;

    for (let i = 0; i < maxLength; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        code += characters.charAt(randomIndex);
    }

    item.innerHTML = code;
}

