let switchAccountModal = document.getElementById('switchAccountModal');
let switchAccountItems = document.getElementById('switchAccountItems');


switchAccountModal.addEventListener('show.bs.modal', function (event) {
    API.get('/user/accounts')
    .then(result => {
        createSwitchAccountItems(result);
    })
    .catch(error => {
        console.error(error);
    });
});



/* *********************************************** */
/*********** CREATE SWITCH ACCOUNT ITEMS ***********/
/* *********************************************** */

function createSwitchAccountItems(accounts){

    switchAccountItems.innerHTML = '';

    accounts.forEach(account => {

        let accountItem = createSwitchAccountItem(account.uuid, account.title, account.description, account.type, account.is_selected);

        switchAccountItems.append(accountItem);
    });
}



/* *********************************************** */
/*********** CREATE SWITCH ACCOUNT ITEM ************/
/* *********************************************** */
function createSwitchAccountItem(id, title, desc, type, checked){

    let label = createNewElement('label', 'switch-account-item switch-account-item-user');
    label.setAttribute('for', id);

    if(type == 'personal')
        label.classList.add('switch-account-item-user');
     else if(type == 'business')
        label.classList.add('switch-account-item-businnes');

    let input = createNewElement('input', 'switch-account-input-check');
    input.type = 'radio';
    input.name = 'Switch_Account_User';
    input.id = id;
    input.value = id;
    input.checked = checked;
    label.append(input);

    let accountName = createNewElement('div', 'switch-account-name ms-3 lh-1');
    label.append(accountName);

    let accountTitle = createNewElement('h4', 'text-xs mb-1', title);
    accountName.append(accountTitle);

    let accountDesc = createNewElement('span', 'text-xs', desc);
    accountName.append(accountDesc);

    return label;
}