
	/**
	 * Auth module.
	 *
	 * @module Auth
	 */
	const Auth = (() => {
		
		
		
		
		
		
		function showLoginModal() {
			
		}
		
		function showSignupModal
		
		
		
		function dismissModals() {
			
		}
		
		function showAccountsModal() {
			
		}
		
		
		
		
		
		
		
		return {
			get,
			set,
			update,
			del,
			clear,
		};
		
		
		
	})();
	
	
	
	function buildModal() {
		// Create the modal container
		var modalContainer = document.createElement("div");
		modalContainer.classList.add("modal", "fade");
		modalContainer.id = "modalCookie";
		modalContainer.setAttribute("aria-hidden", "true");
		modalContainer.setAttribute("aria-labelledby", "modalCookieLabel");
		modalContainer.setAttribute("tabindex", "-1");

		// Create the modal dialog
		var modalDialog = document.createElement("div");
		modalDialog.classList.add("modal-dialog", "modal-dialog-centered", "modal-lg");

		// Create the modal content
		var modalContent = document.createElement("div");
		modalContent.classList.add("modal-content", "rounded-6", "overflow-hidden");

		// Create the modal body
		var modalBody = document.createElement("div");
		modalBody.classList.add("modal-body", "scrollbar-dark", "mb-0");

		// Create the modal title
		var modalTitle = document.createElement("p");
		modalTitle.classList.add("fw-bold");
		modalTitle.id = "modalCookieLabel";
		modalTitle.textContent = "Cookie Information";
		modalBody.appendChild(modalTitle);

		// Create the modal text
		var modalText = document.createElement("p");
		modalText.classList.add("text-sm");
		modalText.textContent =
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
		modalBody.appendChild(modalText);

		// Create the accordion
		var accordion = document.createElement("div");
		accordion.classList.add("accordion");
		accordion.id = "accordionCookie";

		// Create the accordion items
		var accordionItems = [{
				headingId: "accordionCookieHeadingOne",
				collapseId: "accordionCookieCollapseOne",
				buttonText: "Strictly necessary cookies",
				bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			},
			{
				headingId: "accordionCookieHeadingTwo",
				collapseId: "accordionCookieCollapseTwo",
				buttonText: "Cart & Checkout Cookies",
				bodyText: "It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",
			},
			// Add more accordion items as needed
		];

		accordionItems.forEach(function(item) {
			var accordionItem = document.createElement("div");
			accordionItem.classList.add("accordion-item");

			var accordionHeader = document.createElement("h2");
			accordionHeader.classList.add("accordion-header");
			accordionHeader.id = item.headingId;

			var button = document.createElement("button");
			button.classList.add("accordion-button");
			button.setAttribute("type", "button");
			button.setAttribute("data-bs-toggle", "collapse");
			button.setAttribute("data-bs-target", "#" + item.collapseId);
			button.setAttribute("aria-expanded", "false");
			button.setAttribute("aria-controls", item.collapseId);
			button.textContent = item.buttonText;

			accordionHeader.appendChild(button);
			accordionItem.appendChild(accordionHeader);

			var accordionCollapse = document.createElement("div");
			accordionCollapse.id = item.collapseId;
			accordionCollapse.classList.add(
				"accordion-collapse",


				"collapse"
			);
			accordionCollapse.setAttribute("aria-labelledby", item.headingId);
			accordionCollapse.setAttribute("data-bs-parent", "#accordionCookie");

			scss
			Copy code
			var accordionBody = document.createElement("div");
			accordionBody.classList.add("accordion-body");
			accordionBody.innerHTML = item.bodyText;

			accordionCollapse.appendChild(accordionBody);
			accordionItem.appendChild(accordionCollapse);

			accordion.appendChild(accordionItem);
		});

		modalBody.appendChild(accordion);

		// Create the privacy policy link
		var privacyLink = document.createElement("p");
		privacyLink.classList.add("text-xxs");
		privacyLink.innerHTML =
			'If you need more info ready our <a href="#" class="fw-semibold text-black text-decoration-none border-bootom-dotted">privacy & policy</a>';
		modalBody.appendChild(privacyLink);

		// Create the modal footer
		var modalFooter = document.createElement("div");
		modalFooter.classList.add(
			"modal-footer",
			"border-0",
			"box-shadow-footer",
			"justify-content-center",
			"py-4"
		);

		// Create the "Got It" button
		var closeButton = document.createElement("button");
		closeButton.setAttribute("type", "button");
		closeButton.classList.add("btn", "btn-primary", "px-40");
		closeButton.setAttribute("data-bs-dismiss", "modal");
		closeButton.setAttribute("aria-label", "Close");
		closeButton.textContent = "Got It";
		closeButton.addEventListener("click", applyCookie);

		modalFooter.appendChild(closeButton);

		// Append all the elements to build the modal
		modalContent.appendChild(modalBody);
		modalContent.appendChild(modalFooter);
		modalDialog.appendChild(modalContent);
		modalContainer.appendChild(modalDialog);

		// Append the modal to the document body
		document.body.appendChild(modalContainer);

		// Show the modal
		var modal = new bootstrap.Modal(document.getElementById("modalCookie"));
		modal.show();
	}

	function applyCookie() {
		// Add your logic to handle cookie acceptance here
	}

	// Call the function to build and show the modal
	buildModal();
	
	