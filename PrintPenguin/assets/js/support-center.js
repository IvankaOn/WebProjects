/* *********************************************** */
/****** CREATE OFFCANVAS HELP CENTER TICKET ********/
/* *********************************************** */
let previousTicketItems = document.getElementById('previousTicketItem');

if (previousTicketItems){

	let cartTicketOne = createTicketItem('new', '#pp152355b', '2022-11-18');
	previousTicketItems.append(cartTicketOne);

	let cartTicketTwo = createTicketItem('open', '#pp152355b', '2022-11-18');
	previousTicketItems.append(cartTicketTwo);

	let cartTicketTree = createTicketItem('closed', '#pp152355b', '2022-11-18');
	previousTicketItems.append(cartTicketTree);

	let cartTicket4 = createTicketItem('sent', '#pp152355b', '2022-11-18');
	previousTicketItems.append(cartTicket4);

	let cartTicket5 = createTicketItem('open', '#pp152355b', '2022-11-18');
	previousTicketItems.append(cartTicket5);

	let cartTicket6 = createTicketItem('closed', '#pp152355b', '2022-11-18');
	previousTicketItems.append(cartTicket6);

	let cartTicket7 = createTicketItem('sent', '#pp152355b', '2022-11-18');
	previousTicketItems.append(cartTicket7);

	let cartTicket8 = createTicketItem('sent', '#pp152355b', '2022-11-18');
	previousTicketItems.append(cartTicket8);
	
	
}





/* *********************************************** */
/********* CREATE PREVIOUS TICKET CARD *************/
/* *********************************************** */
function createTicketItem(tiketType, ticketNumb, ticketClosed){

	let ticketItem = createNewElement('a', 'previous-ticket-item btn-animation-arrow');
	ticketItem.href = '#';

	let ticketDiv = createNewElement('div', 'd-flex align-items-center');
	ticketItem.append(ticketDiv);

	let ticketTypeIcon = createNewElement('span', 'support-center-icon me-3');

	if(tiketType == 'new'){
		ticketTypeIcon.classList.add('new-message-icon');
	} else if(tiketType == 'open'){
		ticketTypeIcon.classList.add('open-message-icon', 'text-blue');
	} else if(tiketType == 'closed'){
		ticketTypeIcon.classList.add('closed-message-icon', 'text-drab');
	} else if(tiketType == 'sent'){
		ticketTypeIcon.classList.add('sent-message-icon', 'text-drab');
	}

	ticketDiv.append(ticketTypeIcon);

	let ticketDescDiv = createNewElement('div');
	ticketDiv.append(ticketDescDiv);

	let ticketNumbEl = createNewElement('span', 'text-xxs d-block fw-semibold lh-1', `Ticket ${ticketNumb}`);
	ticketDescDiv.append(ticketNumbEl);

	let ticketClosedEl = createNewElement('span', 'text-xxs d-flex align-items-center', `Closed: ${ticketClosed}`);
	ticketDescDiv.append(ticketClosedEl);

	let arrowRightIcon = createNewElement('span', 'icon-arrow-right-3 text-drab btn-animation-arrow-right d-inline-block');
	ticketItem.append(arrowRightIcon);


	return ticketItem;
}





/* *********************************************** */
/***************** SHOW ALL TICKETS ****************/
/* *********************************************** */
function showAllTickets(btn){
	let previousTicketItem = document.querySelectorAll('.previous-ticket-item');

	previousTicketItem.forEach((item) => {
		item.classList.add('d-flex');
	})

	btn.classList.add('d-none');
}





/* *********************************************** */
/******************* SUPPORT CHAT ******************/
/* *********************************************** */
let supportChatBody = document.getElementById('supportChatBody');
let messageSupportChatTextarea = document.getElementById('yourMessageSupportChat');
let sendSupportMessageBtn = document.getElementById('sendSupportMessageBtn');
let supportChatForm = document.getElementById('supportChatForm');

let newMessagesArr = [];

let chatId = '';
let lastMessageId = '';
let typingState = false;

let offcanvasHelpCenterChat = document.getElementById('offcanvasHelpCenterChat');
if(offcanvasHelpCenterChat){
	offcanvasHelpCenterChat.addEventListener('show.bs.offcanvas', function () {
		let chatData = getChatData();
		createSupportChat(chatData);
		// document.getElementById('btnBurger').click();

	})
}

let helpCenterChatPage = document.getElementById('helpCenterChatPage');
if(helpCenterChatPage){
	let chatData = getChatData();
	createSupportChat(chatData);
}
let offcanvasDesignRevisionsChat = document.getElementById('offcanvasDesignRevisionsChat');
if(offcanvasDesignRevisionsChat){
	let chatData = getChatData();
	createSupportChat(chatData);
}


function getChatData() {
	let messagesHistory = [
		{
			name: "David",
			text: "Hello! My name is David. Nice to meet you! How can I help you today? Please take your time to describe yo ur problem :)",
			avatar_url: "/assets/img/teams/man.jpg",
			message_date: "10:32 AM, 16.07.2022",
			is_my_message: false
		},
		{
			name: "Oliver",
			text: "Hello! I can’t find product that I need to print :(( ",
			avatar_url: false,
			message_date: "at 10:35 AM, 16.07.2022",
			is_my_message: true
		},
		{
			name: "Test",
			text: "Hello! My name is David. Nice to meet you! How can I help you today? Please take your time to describe yo ur problem :)",
			avatar_url: "/assets/img/teams/man.jpg",
			message_date: "10:32 AM, 16.07.2022",
			is_my_message: false
		},
		{
			name: "Oliver",
			text: "Hello! I can’t find product that I need to print :(( ",
			avatar_url: false,
			message_date: "at 10:35 AM, 16.07.2022",
			is_my_message: true
		},
		{
			name: "David",
			text: "New comment created.<br>You can <a href='javascript:void(0)' data-review-comment-id='comm1' class='review-comment-open-modal-link'>view comment here</a>",
			avatar_url: "/assets/img/teams/man.jpg",
			message_date: "at 10:35 AM, 16.07.2022",
			is_my_message: false
		}
	];

	let apiResult = {
		chat_id: 12332112312,
		chat_active: '2d ago',
		conversation_start: '10:31 AM, 16.07.2022',
		messages: messagesHistory
	}
	
	return apiResult;
}


/* *********************************************** */
/************** CREATE SUPPORT CHAT ****************/
/* *********************************************** */
function createSupportChat(chatData) {

	supportChatBody.innerHTML = '';

	/*  add chat id */
	let supportChatId = document.getElementById('supportChatId');
	chatId = chatData.chat_id;
	supportChatId.innerHTML = `Chat ID: ${chatId}`;

	/*  add chat active */
	let supportChatActive = document.getElementById('supportChatActive');
	supportChatActive.innerHTML = `Active ${chatData.chat_active}`;

	/*  add start date */
	let startedTimeConversation = document.getElementById('startedTimeConversation');
	startedTimeConversation.innerHTML = chatData.conversation_start;

	let connectedPersonName;

	chatData.messages.forEach((message) => {

		if(message.is_my_message == false){

			connectedPersonName = chatData.messages[0].name;
		} 

		let messageEL = createMessage(message.name, message.text, message.avatar_url, message.message_date, message.is_my_message);
		supportChatBody.append(messageEL);
	});

	let startedWithEmployee = createNewElement('span', 'text-drab text-xxs', `You are connected with ${connectedPersonName}`);
	supportChatBody.prepend(startedWithEmployee);

	supportChatBody.lastElementChild.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" }); /* TODO SCROLL TO ELEMENT */

	/*  run ActiveChatHeartbeat */
	runChatHeartbeat();

}





/* *********************************************** */
/*************** RUN CHAT HEARTBEAT ****************/
/* *********************************************** */
function runChatHeartbeat() {
	setInterval(checkChatState, 1000);
}




/* *********************************************** */
/******************** CHECK CHAT *******************/
/* *********************************************** */
function checkChatState() {
	/* Check if content of textarea or uploads has changed */
	var textareaChanged = false; 

	if (messageSupportChatTextarea.value){
		textareaChanged = true;
	}

	updateChatState(chatId, lastMessageId, textareaChanged);
}




/* *********************************************** */
/**************** SEND CHAT STATE ******************/
/* *********************************************** */
function updateChatState(chatId, lastMessageId, textareaChanged) { /*chatId ?  lastMessageId ? */
	let chatStateResult = {
		user_name: 'Oliver',
		new_messages: newMessagesArr,
		is_typing: textareaChanged
	};

	updateActiveChat(chatStateResult.new_messages, chatStateResult.user_name, chatStateResult.is_typing);
}



/* *********************************************** */
/**************** UPDATE ACTIVE CHAT ***************/
/* *********************************************** */
function updateActiveChat(newMessages, userName, isTyping) {
	processNewMessages(newMessages);

	typingIndicator(isTyping, userName);
}




/* *********************************************** */
/*************** TYPING INDICATOR ******************/
/* *********************************************** */
function typingIndicator(isTyping, userName = 'Oliver') {

	if (typingState == isTyping)
		return;

	typingState = isTyping;

	if(isTyping){
		
		let messageContainer = createNewElement('div', 'message message-my message-writing float-end text-end');
		messageContainer.id = 'typingMsg';

		let messageContent = createNewElement('span', 'dots message-content');
		messageContainer.append(messageContent);

		let countDots = 3;
		
		for (let dot = 0; dot < countDots; dot++) {
			let dotEl = createNewElement('span');
			messageContent.append(dotEl);
		}

		let messageDetails = createNewElement('div', 'message-details');
		messageContainer.append(messageDetails);

		

		let messageDetailsTyping = createNewElement('span', 'message-details-time');
		messageDetailsTyping.innerHTML = `${userName} is typing...`;
		messageDetails.append(messageDetailsTyping);

		let messageDetailsAvatar = createNewElement('div', 'message-details-icon bg-dark-red ms-2 d-flex justify-content-center align-items-center');
		messageDetails.append(messageDetailsAvatar);

		let messageDetailsAvatarLetter = createNewElement('span', 'text-white text-xxs d-block', userName.charAt(0));
		messageDetailsAvatar.append(messageDetailsAvatarLetter);


		supportChatBody.append(messageContainer);

		messageContainer.scrollIntoView();


		
	} else {
		let messageTyping = document.getElementById('typingMsg');
		messageTyping.remove();
	}
}





/* *********************************************** */
/**************** UPDATE MESSAGES ******************/
/* *********************************************** */
let newMessageId = 0;

function updateMessages(name, text, avatarUrl, date, isMyMessage){

	let updateNewMessage = {};
	updateNewMessage.id = ++newMessageId;
	updateNewMessage.name = name;
	updateNewMessage.text = text;
	updateNewMessage.avatar_url = avatarUrl;
	updateNewMessage.message_date = date;
	updateNewMessage.is_my_message = isMyMessage;

	newMessagesArr.push(updateNewMessage);
}




function updateMessagesWithFiles(name, text, avatarUrl, date, isMyMessage, files){

	let updateNewMessage = {};


	updateNewMessage.id = ++newMessageId;
	updateNewMessage.name = name;
	updateNewMessage.text = text;
	updateNewMessage.avatar_url = avatarUrl;
	updateNewMessage.message_date = date;
	updateNewMessage.is_my_message = isMyMessage;
	updateNewMessage.files = files;

	newMessagesArr.push(updateNewMessage);
}



function processNewMessages(newMessages){

	newMessages.forEach((message) => {

		let messageEL = createMessage(message.name, message.text, message.avatar_url, message.message_date, message.is_my_message, message.files);
		supportChatBody.append(messageEL);

		lastMessageId = message.id;

		messageEL.scrollIntoView();

	})
	
	// tymczasowo usuwamy wszystkie nowe
	newMessagesArr = [];


}




/* *********************************************** */
/**************** CERATE MESSAGES ******************/
/* *********************************************** */
function createMessage(name, text, avatarUrl, date, isMyMessage, files){

    let message = createNewElement('div', 'message');

	if (isMyMessage){
		message.classList.add('message-my', 'float-end');

	} else { 
		message.classList.add('message-other', 'float-start');
	}

	let messageContent = createNewElement('span', 'message-content');
    message.append(messageContent);

	if (text){
		let messageContentText = createNewElement('span', 'mt-2 d-block', text);
		messageContent.append(messageContentText);
	}
	

	if (files && files.length > 0){

		Array.from(files).forEach((file) => {
			let messageContentFile = createNewElement('a', 'message-content-file');
			messageContentFile.target = '_blank';
			
			let messageContentFileName = createNewElement('span', 'message-content-file-name', file.name);
			messageContentFile.append(messageContentFileName);

			if (file.type.startsWith('image/')) {
				const reader = new FileReader();
		
				reader.readAsDataURL(file);
				reader.onload = () => {
					messageContentFile.style.backgroundImage = `url('${reader.result}')`;
					messageContentFile.href = `${reader.result}`;
				};

			} else if (file.name.split('.').pop() == 'pdf') {

				messageContentFile.style.backgroundImage = 'url(/assets/img/icons/type-file/PDF.svg)';
				messageContentFile.classList.add('bg-not-cover');
				/* messageContentFile.href = `${file}`; */
		
			} else if (file.name.split('.').pop() == 'docx' || file.name.split('.').pop() == 'doc') {

				messageContentFile.style.backgroundImage = 'url(/assets/img/icons/type-file/DOC.svg)';
				messageContentFile.classList.add('bg-not-cover');

		
			} else if (file.name.split('.').pop() == 'psd') {

				messageContentFile.style.backgroundImage = 'url(/assets/img/icons/type-file/PSD.svg)';
				messageContentFile.classList.add('bg-not-cover');

			} 
			else {
				
				messageContentFile.style.backgroundImage = null;
			}

			messageContent.prepend(messageContentFile);

			supportChatForm.reset();
		})

		
	} 


    let messageDetails = createNewElement('div', 'message-details');
    message.append(messageDetails);

    let messageDetailsAvatar = createNewElement('div', 'message-details-icon');

	let messageDetailsTime = createNewElement('div', 'message-details-time', name + ' ' + date);

	if(avatarUrl){
		messageDetailsAvatar.style.backgroundImage = `url('${avatarUrl}')`;

		messageDetails.append(messageDetailsAvatar);

		messageDetails.append(messageDetailsTime);

	} else {
	   	let firstLetterName = name.charAt(0);

		let iconEye = createNewElement('span', 'fi-rr-eye text-drab text-xxs pt-1');
		messageDetails.append(iconEye);

	 	messageDetails.append(messageDetailsTime);

	   	messageDetailsAvatar.className = 'message-details-icon bg-dark-red ms-2 d-flex justify-content-center align-items-center';

		let messageDetailsAvatarLetter = createNewElement('span', 'text-white text-xxs d-block', firstLetterName);
		messageDetailsAvatar.append(messageDetailsAvatarLetter);

		messageDetails.append(messageDetailsAvatar);

	}

    return message;

}




/* *********************************************** */
/************ SEND MESSAGES EVENT ******************/
/* *********************************************** */
/* SEND MESSAGE EVENT */
if (sendSupportMessageBtn){
    sendSupportMessageBtn.addEventListener('click', (event) =>{
        let date = new Date();
		let time = date.getHours() + ':' + date.getMinutes() + ' AM,' + date.getDay() + '.' + date.getMonth() + 1  + '.' + date.getFullYear();
        let yourMessageValue = messageSupportChatTextarea.value;

		let inputFiles = supportChatInputFile.files;

		if (inputFiles.length > 0){

			updateMessagesWithFiles('Oliver', yourMessageValue, false, time, true, inputFiles);
			
		} else if (yourMessageValue){

			updateMessages('Oliver', yourMessageValue, false, time, true);
		}

				
		filesNameContent.innerHTML = '';

		messageSupportChatTextarea.value = '';

        
    })
}

if(messageSupportChatTextarea) {
	messageSupportChatTextarea.addEventListener('keypress', function(event) {

		const keyCode = event.which || event.keyCode;

		if (keyCode === 13) {

			if (keyCode === 13 && !event.shiftKey) {

		 		event.preventDefault();
				sendSupportMessageBtn.click();
		 		
		 	}
			
			messageSupportChatTextarea.style.height = '55px';

		}

	  });

	  messageSupportChatTextarea.addEventListener('keyup', function(event) {

		if(event.target.value.length > 20){
			messageSupportChatTextarea.style.height = '55px';

		} else if(event.target.value.length == 0){
			messageSupportChatTextarea.style.height = 'auto';
		}

	  });
	  
}




/* *********************************************** */
/******************** ADD FILE *********************/
/* *********************************************** */
let supportChatInputFile = document.getElementById('supportChatInputFile');
let filesNameContent = document.getElementById('filesNameContent');

if (supportChatInputFile){
	supportChatInputFile.addEventListener('change', function(event) {
		
		filesNameContent.innerHTML = '';
		let files = Array.from(event.target.files);

		if (files){
			
			let div = createNewElement('div', 'mt-3');
			filesNameContent.append(div);

			files.forEach(file => {
				

				let fileName = createNewElement('div', 'text-xxs', file.name);
				div.append(fileName);
				
			})

			let deleteBtn = createNewElement('button', 'btn btn-link text-dark p-0 mt-3');
			deleteBtn.addEventListener('click', onclickDeleteUploadFileChat);
			filesNameContent.append(deleteBtn);
	
			let deleteBtnIcon = createNewElement('span', 'fi-rr-cross-small');
			deleteBtn.append(deleteBtnIcon);
			
		}
		
	});
}





/* *********************************************** */
/**************** DELETE UPLOAD FILE ***************/
/* *********************************************** */
function onclickDeleteUploadFileChat(){

	supportChatInputFile.value = '';
	filesNameContent.innerHTML = '';

}