let designRevisionMainImg = document.getElementById('designRevisionMainImg');
let designRevisionsDropZone = document.getElementById('designRevisionsDropZone');
let addCommentTextarea = document.getElementById('addCommentTextarea');
let modalAddCommentPosX = document.getElementById('modalAddCommentPosX');
let modalAddCommentPosY = document.getElementById('modalAddCommentPosY');
let modalAddCommentLabel = document.getElementById('modalAddCommentLabel');
let modalAddCommentCancelBtn = document.getElementById('modalAddCommentCancelBtn');
let modalEditCommentDeleteBtn = document.getElementById('modalEditCommentDeleteBtn');
let modalReviewCommentCloseBtn = document.getElementById('modalReviewCommentCloseBtn');
let modalCommentSaveBtn = document.getElementById('modalCommentSaveBtn');


let designRevisionsBtnOpenOffcanvas = document.getElementById('designRevisionsDashboardBtnOpenOffcanvas');

let modalReviewComment = document.getElementById('modalReviewComment');
let bsModalReviewComment = bootstrap.Modal.getOrCreateInstance(modalReviewComment);

let currentVersionSelect = document.getElementById('currentVersionSelect');

let selectedVersionId = 'sada2112dasd';
let selectedVersionName;
let selectedVersionFileName;





/* *********************************** */
/* **** DESIGN REVISIONS VERSION ***** */
/* *********************************** */
let apiDesignRevisionsVersion = {
    'result': [
        {
            'id': 'sada2112dasd',
            'name': 'Current Version',
            'time': '',
            'files': [
                {
                    'file_name': 'P1 - Front',
                    'file_img': 'img-01.png',
                    'comments': [
                        {   'id': 'comm1',
                            'status_resolved': false,
                            'posY': 34.1146,
                            'posX': 43.3007,
                            'desc': 'You trying to approve an older version of design. Go back to dashboard and switch to current version or request edits on older version to print it.',
                            'files': [
                                {
                                    'name': 'File-Name-1.jpg',
                                    'img_url': 'img-03.png',
                                    'type': 'image/jpeg'
                                },
                                {
                                    'name': 'File-Name-2.jpg',
                                    'img_url': 'img-01.png',
                                    'type': 'image/jpeg'

                                },
                                {
                                    'name': 'File-Name-31.jpg',
                                    'img_url': 'img-05.png',
                                    'type': 'image/jpeg'

                                },
                                {
                                    'name': 'File-Name-4.jpg',
                                    'img_url': 'img-07.png',
                                    'type': 'image/jpeg'

                                },
                                {
                                    'name': 'File-Name-5.jpg',
                                    'img_url': 'img-02.png',
                                    'type': 'image/jpeg'

                                },
                                {
                                    'name': 'File-Name-1.jpg',
                                    'img_url': 'img-03.png',
                                    'type': 'image/jpeg'

                                }
                            ]
                        },
                        {   'id': 'comm2',
                            'status_resolved': true,
                            'posY': 10,
                            'posX': 15,
                            'desc': 'You trying to approve an older version of design. Go back to dashboard and switch to current version or request edits on older version to print it.',
                            'files': []
                        }
                    ]
                },
                {
                    'file_name': 'P1 - Back',
                    'file_img': 'img-02.png',
                    'comments': [
                        {   'id': 'comm3',
                            'status_resolved': false,
                            'posY': 12.7604,
                            'posX': 7.51634,
                            'desc': 'You trying to approve an older version of design. Go back to dashboard and switch to current version or request edits on older version to print it.',
                            'files': []
                        },
                        {   'id': 'comm4',
                            'status_resolved': true,
                            'posY': 40,
                            'posX': 34,
                            'desc': 'You trying to approve an older version of design. Go back to dashboard and switch to current version or request edits on older version to print it.',
                            'files': []
                        }
                    ]
                },
                {
                    'file_name': 'P2 - Front',
                    'file_img': 'img-07.png',
                },
                {
                    'file_name': 'P2 - Back',
                    'file_img': 'img-02.png',
                }
            ]
        },
        {
            'id': 'sada2112dasdaww',
            'name': 'Version 01',
            'time': '13-02-28, 1:00 PM',
            'files': [
                {
                    'file_name': 'P1 - Front',
                    'file_img': 'img-03.png',
                    'comments': [
                        {   'id': 'comm5',
                            'status_resolved': true,
                            'posY': 34.1146,
                            'posX': 43.3007,
                            'desc': 'You trying to approve an older version of design. Go back to dashboard and switch to current version or request edits on older version to print it.',
                            'files': []
                        }
                    ]
                },
                {
                    'file_name': 'P1 - Back',
                    'file_img': 'img-02.png',
                    'comments': [
                        {   'id': 'comm6',
                            'status_resolved': true,
                            'posY': 12.7604,
                            'posX': 7.51634,
                            'desc': 'You trying to approve an older version of design. Go back to dashboard and switch to current version or request edits on older version to print it.',
                            'files': []
                        }
                    ]
                },
                {
                    'file_name': 'P2 - Front',
                    'file_img': 'img-07.png',
                },
                {
                    'file_name': 'P2 - Back',
                    'file_img': 'img-02.png',
                }
            ]
        },
        {
            'id': 'sada21asas12dasdaww',
            'name': 'Version 02',
            'time': '23-02-28, 1:00 PM',
            'files': [
                {
                    'file_name': 'P1 - Front',
                    'file_img': 'img-05.png',
                }
            ]
        },
        {
            'id': 'qwqsada2112dasdaww',
            'name': 'Version 03',
            'time': '23-02-28, 1:00 PM',
            'files': [
                {
                    'file_name': 'P1 - Front',
                    'file_img': 'img-02.png',
                },
                {
                    'file_name': 'P1 - Back',
                    'file_img': 'img-01.png',
                },
                {
                    'file_name': 'P2 - Front',
                    'file_img': 'img-05.png',
                },
                {
                    'file_name': 'P2 - Back',
                    'file_img': 'img-07.png',
                },
                {
                    'file_name': 'P3 - Front',
                    'file_img': 'img-01.png',
                },
                {
                    'file_name': 'P3 - Back',
                    'file_img': 'img-02.png',
                },
                {
                    'file_name': 'P4 - Front',
                    'file_img': 'img-03.png',
                },
                {
                    'file_name': 'P4 - Back',
                    'file_img': 'img-02.png',
                },
                {
                    'file_name': 'P5 - Back',
                    'file_img': 'img-02.png',
                }

            ]
        },
        {
            'id': 'sadaass2112dasdaww',
            'name': 'Version 04',
            'time': '23-02-28, 1:00 PM',
            'files': [
                {
                    'file_name': 'P1 - Front',
                    'file_img': 'img-07.png',
                }
            ]
        }
    ]
}





/* *********************************************** */
/***** CREATE DESIGN REVISIONS VERSION SELECT ******/
/* *********************************************** */

if(currentVersionSelect){
    createDesignRevisionsVersionSelect(apiDesignRevisionsVersion.result);

}

function createDesignRevisionsVersionSelect(apiResultVersions) {
    apiResultVersions.forEach((version) => {
        let option = document.createElement('option');
        option.value = version.id;
	    option.innerText = `${version.name}`;

        if(version.time){
	        option.innerText = `${version.name} - ${version.time}`;
        }

        currentVersionSelect.prepend(option);   
    })
    
    new TomSelect(currentVersionSelect, {});

}

currentVersionSelected('sada2112dasd');





/* *********************************************** */
/********** ADD EVENT CHANGE VERSION SELECT ********/
/* *********************************************** */

currentVersionSelect.addEventListener('change', function () {

    selectedVersionId = this.value;

    currentVersionSelected(this.value);

})

function currentVersionSelected(selectedId) {

    for(let i in apiDesignRevisionsVersion.result){

		if(selectedId == apiDesignRevisionsVersion.result[i].id){

            selectedVersionName = apiDesignRevisionsVersion.result[i].name;


            if(apiDesignRevisionsVersion.result[i].files.length > 1){

                designRevisionsBtnOpenOffcanvas.classList.remove('d-none');

            } else {

                designRevisionsBtnOpenOffcanvas.classList.add('d-none');

            }
            
            createPagesOffcanvas(apiDesignRevisionsVersion.result[i].files, apiDesignRevisionsVersion.result[i].files.comments);
	        updateDesignRevisionMainContent(apiDesignRevisionsVersion.result[i].files[0].file_name, apiDesignRevisionsVersion.result[i].files[0].file_img, apiDesignRevisionsVersion.result[i].files[0].comments)
        
		}
	}
}



window.addEventListener('load', (event) => {
    setTimeout(offcanvasDesignRevisionsDashboard.classList.add('show'), 2000);
    
    if(window.innerWidth < 992){
        document.getElementById('designCurrentVersionOptions').classList.remove('show');
    }
});





/* *********************************************** */
/************* CREATE PAGES OFFCANVAS **************/
/* *********************************************** */
function createPagesOffcanvas(versionFiles){
let offcanvasDesignRevisionsDashboardBody = document.getElementById('offcanvasDesignRevisionsDashboardBody');

    offcanvasDesignRevisionsDashboardBody.innerHTML = '';

    versionFiles.forEach(file =>{

        let button = createNewElement('button', 'd-block design-revision-dashboard-pages-link btn btn-link mb-4 p-0');
        button.dataset.fileImg = file.file_img;
        button.dataset.fileName = file.file_name;
        button.type = 'button';
        button.addEventListener('click', e =>{

            offcanvasDesignRevisionsDashboardBody.querySelector('button.active').classList.remove('active');
            e.currentTarget.classList.add('active');

            let fileImgUrl = e.currentTarget.getAttribute('data-file-img');
            let fileName = e.currentTarget.getAttribute('data-file-name');
            updateDesignRevisionMainContent(fileName, fileImgUrl, file.comments);

            /* HIDE OFFCANVAS */
            bsOffcanvasDesignRevisionsDashboard.hide();
        });

        offcanvasDesignRevisionsDashboardBody.append(button);

        let img = createNewElement('div', 'design-revision-dashboard-pages-link-img');
        img.style.backgroundImage = `url('/assets/img/design-revisions-dashboard/${file.file_img}')`;
        button.append(img);

        let name = createNewElement('p', 'design-revision-dashboard-pages-link-name text-xxs text-center text-drab fw-light mb-0', file.file_name);
        button.append(name);

    });

    if (versionFiles.length > 1)
        offcanvasDesignRevisionsDashboardBody.querySelectorAll('button')[0].classList.add('active');
}




/* *********************************************** */
/***** UPDATE DESIGN REVISION MAIN CONTENT *********/
/* *********************************************** */
function updateDesignRevisionMainContent(selectedFileName, selectedFileImg, comments){

    selectedVersionFileName = selectedFileName;

    designRevisionMainImg.innerHTML = '';

    let img = createNewElement('img');
    img.src = `/assets/img/design-revisions-dashboard/${selectedFileImg}`;
    designRevisionMainImg.append(img);

    if(comments){

        comments.forEach(comment => {
           let posY = comment.posY;
           let posX = comment.posX;
    
           let point = createNewElement('span', 'point');
           point.dataset.pointId = comment.id;
           point.style.top = `${posY}%`;
           point.style.left = `${posX}%`;
           point.style.zIndex = 999;
           designRevisionMainImg.append(point);

           point.addEventListener('click', function (event) {
               event.stopPropagation();
               showEditBsModalAddComment(event.currentTarget.dataset.pointId);
           })
        })
    }


}




/* *********************************************** */
/******** SHOW EDIT BS MODAL ADD COMMENT ***********/
/* *********************************************** */
function showEditBsModalAddComment(commentId) {
    if(commentId) {
        let comment = apiDesignRevisionsVersion.result
                        .find(vers => vers.id == selectedVersionId)
                        .files.find(file => file.file_name == selectedVersionFileName)
                        .comments.find(comment => comment.id == commentId);

        if (comment) {
            showEditCommentModal(comment.id, comment.status_resolved, comment.posX, comment.posY, comment.desc, comment.files);
        }
    }
}





/* *********************************************** */
/******** OffCANVAS DESIGN REVISIONS CHAT **********/
/* *********************************************** */
if(offcanvasDesignRevisionsChat){

    let mainContent = document.getElementById('mainContentDesignRevisions');
    let designRevisionsChatBtn = document.getElementById('designRevisionsChatBtn');
    let designRevisionsChatBtnName = designRevisionsChatBtn.lastElementChild;
    let designRevisionsChatBtnIcon = designRevisionsChatBtn.firstElementChild;
    
    let designCurrentVersionOptionBtn = document.getElementById('designCurrentVersionOptionBtn');

    offcanvasDesignRevisionsChat.addEventListener('show.bs.offcanvas', function () {
        designRevisionsChatBtnName.innerHTML = 'Hide Chat';
        designRevisionsChatBtnIcon.classList.remove('icon-message-text');
        designRevisionsChatBtnIcon.classList.add('icon-message-remove');
        
        
        if(window.innerWidth < 992 && !designCurrentVersionOptionBtn.classList.contains('collapsed')){
            designCurrentVersionOptionBtn.click();
        }

        if(window.innerWidth > 1200){
            let width = offcanvasDesignRevisionsChat.offsetWidth;
            mainContent.style.marginRight = `${width}px`;
        }
        
    })

    offcanvasDesignRevisionsChat.addEventListener('hide.bs.offcanvas', function () {
       designRevisionsChatBtnName.innerHTML = 'Show Chat';
       designRevisionsChatBtnIcon.classList.add('icon-message-text');
       designRevisionsChatBtnIcon.classList.remove('icon-message-remove');

       if(window.innerWidth < 992 && !designCurrentVersionOptionBtn.classList.contains('collapsed')){
            designCurrentVersionOptionBtn.click();
        }

        if(window.innerWidth > 1200){
            mainContent.style.marginRight = '0';
        }
    })
}






/* *********************************************** */
/**** OFFCANVAS HIDE DESIGN REVISIONS DASHBOARD ****/
/* *********************************************** */
let offcanvasDesignRevisionsDashboard = document.getElementById('offcanvasDesignRevisionsDashboard');
let bsOffcanvasDesignRevisionsDashboard = new bootstrap.Offcanvas(offcanvasDesignRevisionsDashboard);


document.addEventListener('click', function (event) {

    if(event.target != offcanvasDesignRevisionsDashboard.querySelector('.offcanvas-body') 
    && event.target != designRevisionsBtnOpenOffcanvas 
    && event.target != designRevisionsBtnOpenOffcanvas.querySelector('span')){
        
        if (offcanvasDesignRevisionsDashboard.classList.contains('show')) {
            offcanvasDesignRevisionsDashboard.classList.remove('show');
			bsOffcanvasDesignRevisionsDashboard.hide();
		}
    }
	
});





/* *********************************************** */
/**** OFFCANVAS SHOW DESIGN REVISIONS DASHBOARD ****/
/* *********************************************** */


if(offcanvasDesignRevisionsDashboard){
    
    let  designCurrentVersionOptions = document.getElementById('designCurrentVersionOptions');

    offcanvasDesignRevisionsDashboard.addEventListener('show.bs.offcanvas', function (event) {


        if(designCurrentVersionOptions.classList.contains('show') && window.innerWidth < 992){

            designCurrentVersionOptions.classList.remove('show');

        }

       

    })

    designRevisionsBtnOpenOffcanvas.addEventListener('click', () => {

        if(!offcanvasDesignRevisionsDashboard.classList.contains('show')){
            offcanvasDesignRevisionsDashboard.classList.add('show');
        } 
    })

}





/* *********************************** */
/* ******** DESIGN WORK TIMES ******** */
/* *********************************** */
let apiDesignWorkTimes = {
    'result': [

        {
            'type_design': 'Basic Design',
            'time_details': [
                {
                    'time': '30 Minutes',
                    'price': '5'
                },
                {
                    'time': '1 Hour',
                    'price': '10'
                }

            ]
        },
        {
            'type_design': 'Good Design',
            'time_details': [
                {
                    'time': '1.5 Hour',
                    'price': '15'
                },
                {
                    'time': '2 Hour',
                    'price': '20'
                },
                {
                    'time': '2.5 Hour',
                    'price': '25'
                },
                {
                    'time': '3 Hour',
                    'price': '30'
                },
                {
                    'time': '3.5 Hour',
                    'price': '35'
                }

            ]
        },
        {
            'type_design': 'Best Design',
            'time_details': [
                {
                    'time': '4 Hour',
                    'price': '40'
                },
                {
                    'time': '4.5 Hour',
                    'price': '45'
                },
                {
                    'time': '5 Hour',
                    'price': '50'
                },
                {
                    'time': '5.5 Hour',
                    'price': '55'
                }
            ]
        }

    ]
}


let modalTimeOverNeeded = document.getElementById('modalTimeOverNeeded');

modalTimeOverNeeded.addEventListener('show.bs.modal', function () {
    createDesignWorkTimesSelect(apiDesignWorkTimes.result);
})





/* *********************************************** */
/*********** CREATE DESIGN WORK TIMES SELECT *******/
/* *********************************************** */
function createDesignWorkTimesSelect(apiResultWorkTimes){
    
    let bodySelect = modalTimeOverNeeded.querySelector('.select-work-times');
    bodySelect.innerHTML='';

    let designWorkTimesSelect = createNewElement('select', 'tom-select-work-times');
    designWorkTimesSelect.id = 'designWorkTimesSelect';
    designWorkTimesSelect.name = 'Design_Work_Times';

    designWorkTimesSelect.addEventListener('change', function () {

        updateSelectedTimeDesign(this.value, this.selectedOptions[0].getAttribute('data-price'));
    })

    bodySelect.append(designWorkTimesSelect);


    let optionPlaceholder = createNewElement('option', '', 'Select Max Time From list below');
    optionPlaceholder.value = '';
    designWorkTimesSelect.append(optionPlaceholder);

    apiResultWorkTimes.forEach(typeWorkTime => {

        let optgroup = createNewElement('optgroup');
        optgroup.dataset.label = typeWorkTime.type_design;
        designWorkTimesSelect.append(optgroup);


        typeWorkTime.time_details.forEach(timeDetail => {

            let option = createNewElement('option', '', timeDetail.time);
            option.dataset.price = timeDetail.price;
            option.value = timeDetail.time;
            optgroup.append(option);
        })

    })
    initTomSelectByEl(designWorkTimesSelect, tomSelectWorkTimesOptions);
}




/* *********************************************** */
/************ UPDATE SELECTED TIME DESIGN **********/
/* *********************************************** */
function updateSelectedTimeDesign(selectedTime, selectedPrice){
    let approveTimeBtn = modalTimeOverNeeded.querySelector('[data-bs-time-design]');
    approveTimeBtn.setAttribute('data-bs-time-design', selectedTime);
    approveTimeBtn.setAttribute('data-bs-price-design', selectedPrice);
}




/* *********************************************** */
/************** UPDATE ADDITIONAL TIME *************/
/* *********************************************** */
function updateAdditionalTime(btn){
    let proggressCount = Math.floor(Math.random() * 101);

    let designUsageDetails = document.getElementById('designUsageDetails');
    designUsageDetails.innerHTML = `${btn.getAttribute('data-bs-price-design')} / ${btn.getAttribute('data-bs-time-design')} Used(${proggressCount}%)`;

    let progressTimeDesign = document.getElementById('progressTimeDesign');
    let progressBarTimeDesign = progressTimeDesign.querySelector('.progress-bar');
    progressBarTimeDesign.setAttribute('aria-valuenow', proggressCount);
    progressBarTimeDesign.style.width = `${proggressCount.toString() + '%'}`;
}





/* *********************************** */
/* ************ ADD COMMENT ********** */
/* *********************************** */
let nextPointId = 0;

if(designRevisionMainImg){
    
    let modalAddComment = document.getElementById('modalAddComment');
    let bsModalAddComment = bootstrap.Modal.getOrCreateInstance(modalAddComment);

    let positionModal = modalAddComment.querySelector('.js-modal-position');

    let pointWidth = 12;
    let pointHeight = 12;

    designRevisionMainImg.addEventListener('click', event => {

        let designRevisionImgHeight = designRevisionMainImg.offsetHeight;
        let designRevisionImgWidth = designRevisionMainImg.offsetWidth;

        let point = createNewElement('span', 'point');
        point.dataset.pointId = `commentt${++nextPointId}`;
        point.style.top = (((event.layerY - pointHeight) / (designRevisionImgHeight)) * 100) + '%';
        point.style.left = (((event.layerX - pointWidth) / (designRevisionImgWidth)) * 100) + '%';

        point.addEventListener('click', () => {
            showEditBsModalAddComment(`commentt${++nextPointId}`);
        });

        designRevisionMainImg.append(point);

        let windowHeight = window.innerHeight;
        let windowWidth = window.innerWidth;

        let clientX = ((event.clientX / windowWidth) * 100);
        let clientY = ((event.clientY / windowHeight) * 100);

        modalAddComment.dataset.pointId = point.dataset.pointId;

        showAddCommentModal(clientX, clientY);
    })



    function showEditCommentModal(commId, statusResolved, xPerc, yPerc, desc, files) {  
        
        let posLeftPerc = ((xPerc / 100) * designRevisionMainImg.clientWidth + (designRevisionMainImg.getBoundingClientRect().left + window.scrollX)) / window.innerWidth * 100;
        let posTopPerc = ((yPerc / 100) * designRevisionMainImg.clientHeight + (designRevisionMainImg.getBoundingClientRect().top + window.scrollY)) / window.innerHeight * 100;

                
        modalAddCommentPosX.value = xPerc;
        modalAddCommentPosY.value = yPerc;
        addCommentTextarea.value = desc;
        designRevisionsDropZone.innerHTML = '';

        /* UPDATE MODAL */
        modalAddComment.dataset.pointId = commId;

        if(statusResolved){

            modalAddCommentLabel.innerHTML = 'Review Comment';
            
            /* ADD DISABLED */
            addCommentTextarea.classList.add('disabled');

            let dropZone = createDropZoneDesignRevisions();
            dropZone.classList.add('disabled');
            designRevisionsDropZone.append(dropZone);  
            
            let text = createNewElement('p', 'text-center text-green text-xs fw-normal', 'This task has been resolved');
            designRevisionsDropZone.append(text);

            modalCommentSaveBtn.classList.add('d-none');
            modalAddCommentCancelBtn.classList.add('d-none');
            modalEditCommentDeleteBtn.classList.add('d-none');
            modalReviewCommentCloseBtn.classList.remove('d-none');

           

        } else{
            modalAddCommentLabel.innerHTML = 'Edit Comment';
            addCommentTextarea.classList.remove('disabled');

            modalEditCommentDeleteBtn.classList.remove('d-none');

            let dropZone = createDropZoneDesignRevisions();
            designRevisionsDropZone.append(dropZone);

            modalCommentSaveBtn.classList.remove('d-none');
            modalAddCommentCancelBtn.classList.remove('d-none');
            modalEditCommentDeleteBtn.classList.remove('d-none');
            modalReviewCommentCloseBtn.classList.add('d-none');
        }
        

        if (files) {

            files.forEach(file => {

                let dropZoneElement = createNewElement('div', 'design-revisions-drop-zone');
                let dropZoneElementPromt = createNewElement('div', 'design-revisions-drop-zone-prompt');
                dropZoneElement.append(dropZoneElementPromt);

                updateThumbnailDesignRevision(dropZoneElement, file);
                designRevisionsDropZone.append(dropZoneElement);

            });
        }

        showCommentModal(posLeftPerc, posTopPerc);
    }

    
    function showAddCommentModal(xPerc, yPerc) {      
                
        /* UPDATE MODAL */
        modalAddCommentLabel.innerHTML = 'Add Comment';
        modalAddCommentPosX.value = xPerc;
        modalAddCommentPosY.value = yPerc;
        addCommentTextarea.value = '';
        designRevisionsDropZone.innerHTML = '';

        modalReviewCommentCloseBtn.classList.add('d-none');
        modalEditCommentDeleteBtn.classList.add('d-none');
        modalCommentSaveBtn.classList.remove('d-none');
        modalAddCommentCancelBtn.classList.remove('d-none');

        

        let dropZone = createDropZoneDesignRevisions();
        designRevisionsDropZone.append(dropZone);

        showCommentModal(xPerc, yPerc);
    }

    function showCommentModal(xPerc, yPerc) {
        
        if(window.innerWidth < 600 && xPerc > 25){

            positionModal.style.top = yPerc + '%';
            positionModal.style.left = 'auto';
            positionModal.style.right = '10%';


        } else if(window.innerWidth < 1300 && xPerc > 50){

            positionModal.style.top = yPerc + '%';
            positionModal.style.left = 'auto';
            positionModal.style.right = '10%';


        } else {
            positionModal.style.top = yPerc + '%';
            positionModal.style.left = xPerc + '%';
            positionModal.style.right = 'auto';
        }
        
        bsModalAddComment.show();
    }


    modalAddComment.addEventListener('shown.bs.modal', function (event) { 
        var modalBackdrop = document.querySelectorAll('.modal-backdrop'); 
        modalBackdrop.forEach(item => {

            if(!item.classList.contains('d-none'))
            item.remove(); 
        })
    })
  
}





/* *********************************************** */
/*************** MODAL REVIEW COMMENT  *************/
/* *********************************************** */
let viewCommentLinks = document.querySelectorAll('.review-comment-open-modal-link');

if(viewCommentLinks){
    viewCommentLinks.forEach(link => {
        link.addEventListener('click', () => {

            let id = link.getAttribute('data-review-comment-id');
            modalReviewComment.dataset.reviewCommentModalId = id;

            bsModalReviewComment.show();

        });
    })
}





/* *********************************************** */
/************* SHOW MODAL REVIEW COMMENT ***********/
/* *********************************************** */
modalReviewComment.addEventListener('show.bs.modal', function (event) {
    
    let modal = event.target;

    let id = modal.getAttribute('data-review-comment-modal-id');

    let versionName, versionImg, fileName, statusResolved, desc, files, posX, posY;
    
    /* todo api get() */
    apiDesignRevisionsVersion.result.forEach(vers => { 
       
        if(vers.id == selectedVersionId){

            versionName = vers.name;

            vers.files.forEach(file => {

            versionImg = file.file_img;

                if(file.file_name == selectedVersionFileName){
                    
                    fileName = selectedVersionFileName;

                    file.comments.forEach(comment => {
                        if(comment.id == id){

                            statusResolved = comment.status_resolved;
                            desc = comment.desc;
                            files = comment.files;
                            posX = comment.posX;
                            posY = comment.posY;
                        }
                    })
                }
            })
        }
    })

    updateReviewCommentModal(id, versionName, fileName, versionImg, statusResolved, desc, files, posX, posY);
})




/* *********************************************** */
/********** UODATE REVIEW COOMMENT MODAL ***********/
/* *********************************************** */
function updateReviewCommentModal(id, versionName, commentName, versionImg, statusResolved, desc, files, posX, posY) {

    let modalReviewCommentNameVersion = document.getElementById('modalReviewCommentNameVersion');
    let modalReviewCommentDesc = document.getElementById('modalReviewCommentDesc');
    let modalReviewCommentImg = document.getElementById('modalReviewCommentImg');
    let modalReviewCommentFiles = document.getElementById('modalReviewCommentFiles');

    modalReviewCommentNameVersion.innerHTML = versionName + ', ' + commentName;
    modalReviewCommentDesc.innerHTML = desc;
    modalReviewCommentImg.style.backgroundImage = `url('/assets/img/design-revisions-dashboard/${versionImg}')`;

    let point = createNewElement('span', 'point');
    point.style.top = `${posY}%`;
    point.style.left = `${posX}%`;
    modalReviewCommentImg.append(point);

    files.forEach(file => {

        let fileDropZone = createDropZoneWithContentDesignRevisions(file.img_url, file.name);

        modalReviewCommentFiles.append(fileDropZone)
    })

}




/* *********************************************** */
/***************** SAVE COMMENT BTN ****************/
/* *********************************************** */
function saveComment(btn){

    let modal = btn.closest('.modal');
    let commentDesc = modal.querySelector('#addCommentTextarea').value;
    let fileInputs = modal.querySelectorAll('input[type="file"]');

    let countId = 1;

    apiDesignRevisionsVersion.result.forEach(findVersion => {

        if (findVersion.id == selectedVersionId){

            findVersion.files.forEach(file => {

                countId++

                let id = selectedVersionId + countId.toString();

                if(file.file_name == selectedVersionFileName){

                    file.comments.push({
                        'id': `${id}`,
                        'status_resolved': true,
                        'posY': modalAddCommentPosY.value,
                        'posX': modalAddCommentPosX.value,
                        'desc': commentDesc,
                        'files': fileInputs.forEach(file => {
                            file.files[0];
                        })
                    })
                    console.log(file.comments);

                }
            })
        }
    })
}


modalAddCommentCancelBtn.addEventListener('click', function (event) {
    let modal = event.currentTarget.closest('.modal');
    let pointId = modal?.dataset.pointId;

    if(modalEditCommentDeleteBtn.classList.contains('d-none') && pointId){

        document.querySelector(`[data-point-id="${pointId}"]`).remove();
    }
    
});



/* *********************************************** */
/**************** DELETE COMMENT BTN ***************/
/* *********************************************** */
function deleteComment(btn) {
    let modal = btn.closest('.modal'); 
    let pointId = modal?.dataset.pointId;

    if (pointId) {
        document.querySelector(`[data-point-id="${pointId}"]`).remove();
        /* todo API DELETE */
    }

}




/* *********************************** */
/* ************** DROP ZONE ********** */
/* *********************************** */

document.querySelectorAll('.design-revisions-drop-zone-input').forEach((inputElement) => {
	addDropZoneEventsDesignRevisions(inputElement);
});

function addDropZoneEventsDesignRevisions(input) {

	const dropZoneElement = input.closest('.design-revisions-drop-zone');

	dropZoneElement.addEventListener('click', (e) => {

        if(!dropZoneElement.classList.contains('drop-zone-with-content')){
            input.click();
        }
	});

    input.addEventListener('change', (e) => {
		if (input.files.length) {
            addFileItemToDropZone(dropZoneElement, input.files[0]);
		}
	});

}




function addFileItemToDropZone(dropZoneElement, file) {
    updateThumbnailDesignRevision(dropZoneElement, file);

    let newDropZone = createDropZoneDesignRevisions();
    designRevisionsDropZone.prepend(newDropZone);
}





function updateThumbnailDesignRevision(dropZoneElement, file) {

	dropZoneElement.classList.add('drop-zone-with-content')

	let dropZonePrompt = dropZoneElement.querySelector('.design-revisions-drop-zone-prompt');

    let thumbnailElement = createNewElement('div', 'design-revisions-drop-zone-thumbnail');

	if (dropZonePrompt) {
		dropZonePrompt.classList.add('d-none');
        dropZoneElement.append(thumbnailElement);
	}	

	let dropZoneElementName = dropZoneElement.querySelector('.drop-zone-thumb-name');

    let thumbnailDivImg = createNewElement('div','design-revisions-drop-zone-img');

	if (!dropZoneElementName) {

		dropZoneElementName = createNewElement('div', 'design-revisions-drop-zone-thumb-name');

		let nameSpan = createNewElement('span', 'js-file-name');
		nameSpan.innerText = file.name;

		dropZoneElementName.appendChild(nameSpan);
		thumbnailElement.append(dropZoneElementName);	


		let deleteThumbnailBtn = createNewElement('button', 'btn btn-link p-0 icon-close-circle text-drab design-revisions-drop-zone-delete-thumbnail');
		thumbnailElement.append(deleteThumbnailBtn); 
		
		deleteThumbnailBtn.addEventListener('click', (e) => {
			uploadedFileDesignRevisionRemove(e);
			e.stopImmediatePropagation();
		});

	} else {
		dropZoneElementName.querySelector('span.js-file-name').innerText = file.name;
	}

	if (file.type.startsWith('image/')) {


        if(file.lastModified){
		const reader = new FileReader();

            reader.readAsDataURL(file);
            reader.onload = () => {
                
                thumbnailDivImg.style.backgroundImage = `url('${reader.result}')`;
                thumbnailElement.prepend(thumbnailDivImg);
            };

        } else {

                thumbnailDivImg.style.backgroundImage = `url('/assets/img/design-revisions-dashboard/${file.img_url}')`;
                thumbnailElement.prepend(thumbnailDivImg);
        }
		
	} else if (file.name.split('.').pop() == 'pdf') {
		thumbnailDivImg.style.backgroundImage = 'url(/assets/img/icons/type-file/PDF.svg)';
        thumbnailDivImg.classList.add('uploaded-file-not-image');
        thumbnailElement.prepend(thumbnailDivImg);


	} else if (file.name.split('.').pop() == 'docx' || file.name.split('.').pop() == 'doc') {
		thumbnailDivImg.style.backgroundImage = 'url(/assets/img/icons/type-file/DOC.svg)';
        thumbnailDivImg.classList.add('uploaded-file-not-image');
        thumbnailElement.prepend(thumbnailDivImg);


	} else if (file.name.split('.').pop() == 'psd') {
		thumbnailDivImg.style.backgroundImage = 'url(/assets/img/icons/type-file/PSD.svg)';
        thumbnailDivImg.classList.add('uploaded-file-not-image');
        thumbnailElement.prepend(thumbnailDivImg);

	} 
	else {
		thumbnailDivImg.style.backgroundImage = null;
	}
}




/* *********************************************** */
/****** UPLOADED FILE DESIGN REVISION REMOVE *******/
/* *********************************************** */
function uploadedFileDesignRevisionRemove(event){

   event.target.parentElement.parentElement.remove();

}




/* *********************************************** */
/********* CREATE DROP ZONE DESIGN REVISIONS *******/
/* *********************************************** */
function createDropZoneDesignRevisions(){

    let dropZone = createNewElement('div', 'design-revisions-drop-zone');

    let input = createNewElement('input', 'design-revisions-drop-zone-input');
    input.type = 'file';
    input.name = 'Revision_Design_File[]';
    dropZone.append(input);

    let prompt = createNewElement('span', 'design-revisions-drop-zone-prompt', 'Add Attachments');

    let icon = createNewElement('span', 'icon-export-1 fw-semibold text-sm me-2');
    prompt.prepend(icon);

    dropZone.prepend(prompt);

    addDropZoneEventsDesignRevisions(input);


    return dropZone;

}




/* *********************************************** */
/* CREATE DROP ZONE WHITH CONTENT DESIGN REVISIONS */
/* *********************************************** */
function createDropZoneWithContentDesignRevisions(imgUrl, name){

    let dropZone = createNewElement('div', 'design-revisions-drop-zone drop-zone-with-content mb-3 mb-lg-4');

    let thumbnail = createNewElement('div', 'design-revisions-drop-zone-thumbnail');
    dropZone.append(thumbnail);

    let img = createNewElement('div', 'design-revisions-drop-zone-img');
    img.style.backgroundImage = `url('/assets/img/design-revisions-dashboard/${imgUrl}')`;
    thumbnail.append(img);

    let thumbName = createNewElement('div', 'design-revisions-drop-zone-thumb-name', name);
    thumbnail.append(thumbName);


    let buttonDownload = createNewElement('button', 'icon-import-1 btn btn-link p-0 fw-light text-drab text-md flex-fill text-end design-revisions-drop-zone-download-thumbnail');
    thumbnail.append(buttonDownload);


    return dropZone;

}




/* *********************************************** */
/********** MODAL APPROVE DESIGN REVISION **********/
/* *********************************************** */
let modalApproveDesignRevisions = document.getElementById('modalApproveDesignRevisions');

if(modalApproveDesignRevisions){
    
    let modalApproveDesignRevisionsLabel = document.getElementById('modalApproveDesignRevisionsLabel');
    let modalApproveDesignRevisionsDesc = document.getElementById('modalApproveDesignRevisionsDesc');
    let approveDesignRevisionsCheckboxContainer = document.getElementById('approveDesignRevisionsCheckboxContainer');
    let switchCurrentVersionBtn = document.getElementById('switchCurrentVersionBtn');
    let approveDesignRevisionsBtn = document.getElementById('approveDesignRevisionsBtn');

    modalApproveDesignRevisions.addEventListener('show.bs.modal', function () {

        if(selectedVersionName == 'Current Version'){

            modalApproveDesignRevisionsLabel.innerHTML = 'Confirm Design';
            modalApproveDesignRevisionsDesc.innerHTML = 'You trying to approve an older version of design. Go back to dashboard and switch to current version or request edits on older version to print it.';
            switchCurrentVersionBtn.classList.add('d-none');
            
            approveDesignRevisionsCheckboxContainer.classList.remove('d-none');
            approveDesignRevisionsBtn.classList.remove('d-none');


        } else {

            modalApproveDesignRevisionsLabel.innerHTML = 'Switch to Current Version';
            modalApproveDesignRevisionsDesc.innerHTML = 'You trying to approve an older version of design. Go back to dashboard and switch to current version or request edits on older version to print it.';
            approveDesignRevisionsCheckboxContainer.classList.add('d-none');
            approveDesignRevisionsBtn.classList.add('d-none');
            
            switchCurrentVersionBtn.classList.remove('d-none');
        }

      })

}





/* *********************************************** */
/********************* SELECT ZOOM *****************/
/* *********************************************** */
let originalImgWidth;

let designRevisionMainImgZoomSelect = document.getElementById('designRevisionMainImgZoomSelect');

if(designRevisionMainImgZoomSelect){
    designRevisionMainImgZoomSelect.addEventListener('change', event => {
       
        let zoomValue =  Number(event.target.value);

        if (!originalImgWidth){
            originalImgWidth = designRevisionMainImg.offsetWidth;
        }
     
        let width = (originalImgWidth * zoomValue) / 16;
 
        designRevisionMainImg.style.maxWidth = `${width}rem`;
   
    })

}

document.onkeydown = function(e) {
    if (e.ctrlKey && e.keyCode === 107 || e.keyCode === 187 ) {
        zoomInSelect();
        return false;
    }
    if (e.ctrlKey && e.keyCode === 109 || e.keyCode === 189 ) {
        zoomOutSelect();
        return false;
    }
};

function zoomInSelect() {

    if (tomSelectZoom){
        var selectedValue = tomSelectZoom.getValue();
        var nextZoomValue = getPrevZoomValue(selectedValue);
        tomSelectZoom.setValue(nextZoomValue);
    }
}

function zoomOutSelect() {
    if (tomSelectZoom){
        var selectedValue = tomSelectZoom.getValue();
        var nextZoomValue = getNextZoomValue(selectedValue);
        tomSelectZoom.setValue(nextZoomValue);
    }
}

var zoomItems = [ '4', '2', '1.5', '1', '.75', '.5', '.25' ];

function getNextZoomValue(currentValue) {
    const index = zoomItems.indexOf(currentValue);
    if (index === -1 || index === zoomItems.length - 1) {
      return currentValue;
    }
    return zoomItems[index + 1];
  }
  
function getPrevZoomValue(currentValue) {
  const index = zoomItems.indexOf(currentValue);
  if (index === -1 || index === 0) {
    return currentValue;
  }
  return zoomItems[index - 1];
}