let createAffiliateProgramRow = document.getElementById('createAffiliateProgramRow');

let yourDiscounts = {
    coupons: {
        name: 'Your Code',
        value: '5AB32145',
        type: 'Copy Code'
    },
    latest_transactions: [
        {
            name: 'Someone Used Your Code',
            credits: 1,
            date: 'May 05, 2023',
            type: ''
        },
        {
            name: 'Someone Used Your Code',
            credits: 1,
            date: 'May 05, 2023',
            type: ''
        },
        {
            name: 'Someone Used Your Code',
            credits: 1,
            date: 'May 05, 2023',
            type: ''
        },
        {
            name: 'Someone Used Your Code',
            credits: 1,
            date: 'May 05, 2023',
            type: ''
        },
        {
            name: 'Someone Used Your Code',
            credits: 1,
            date: 'May 05, 2023',
            type: ''
        }
    ]
};

if(createAffiliateProgramRow){
    
    createAffiliateProgram(yourDiscounts);
}

function createAffiliateProgram(result) {
    let colLeft = createNewElement('div', 'col-12 col-lg-5 d-md-flex d-lg-block gap-3');
    createAffiliateProgramRow.append(colLeft);
    
    let couponBase = createCoupon('Your Code', '', `${result.coupons.value}`, false);
    
    let copyCodeBtn = createCircleIconBtnAnimation('btn-white', 'wa-wa-copy', 'Copy Code');
    copyCodeBtn.classList.add('w-auto', 'm-auto');
    copyCodeBtn.addEventListener('click',  onClickCopyToClipboardBtn);
    couponBase.querySelector('.wrap').append(copyCodeBtn);
    couponBase.querySelector('.text').classList.add('text-xxs');

    colLeft.append(couponBase);

    let colRight = createNewElement('div', 'col-12 col-lg-7');
    createAffiliateProgramRow.append(colRight);

    let latestTransactionsTitle = createNewElement('div', 'fw-semibold text-xs mt-3', 'Latest Transactions');
    colRight.append(latestTransactionsTitle);
    
    let latestTransactionsList = createNewElement('div', 'latest-transactions-list js-toggle-latest-items');
    colRight.append(latestTransactionsList);

    
    if(result.latest_transactions){
        result.latest_transactions.forEach(list => {

            let listEl = createLatestTransactionsItem(list.name, '', list.credits, list.date);
            latestTransactionsList.append(listEl);
        })
    }

    let fullHistoryBtn = createNewElement('a', 'btn btn-link text-grey text-xxs d-block', 'Expand Full History');
    fullHistoryBtn.addEventListener('click', toggleLatestTransactions);
    colRight.append(fullHistoryBtn);
}


function onClickCopyToClipboardBtn(ev){
    copyToClipboard(ev.currentTarget.parentElement.querySelector('.price').innerText);
}