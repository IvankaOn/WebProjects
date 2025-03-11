
	/**
	 * Component Builder module.
	 *
	 * @module Component
	 */
	const Component = (() => {
		
		
		
		
		class Subtitle {
			constructor() {
				this.title = '';
				this.showHR = false;
				this.body = '';
			}

			setTitle(title) {
				this.title = title;
				return this;
			}

			showHR(showHR) {
				this.showHR = true;
				return this;
			}

			setBody(body) {
				this.body = body;
				return this;
			}

			render() {
				const subtitle = document.createElement('div');
				subtitle.classList.add('subtitle');

				if (this.title) {
					const title = document.createElement('h2');
					title.textContent = this.title;
					subtitle.appendChild(title);
				}

				if (this.showHR) {
					const hr = document.createElement('hr');
					subtitle.appendChild(hr);
				}

				if (this.body) {
					const body = document.createElement('div');
					body.textContent = this.body;
					subtitle.appendChild(body);
				}

				return subtitle;
			}
		}
		
		
		
		
		
		class Input {
			constructor() {
				this.label = '';
				this.value = '';
				this.placeholder = '';
				this.name = '';
				this.id = '';
				this.type = 'text';
				this.required = false;
			}

			setLabel(label) {
				this.label = label;
				return this;
			}

			setValue(value) {
				this.value = value;
				return this;
			}

			setPlaceholder(placeholder) {
				this.placeholder = placeholder;
				return this;
			}

			setName(name) {
				this.name = name;
				return this;
			}

			setId(id) {
				this.id = id;
				return this;
			}

			setType(type) {
				this.type = type;
				return this;
			}

			setRequired(required = true) {
				this.required = required;
				return this;
			}

			render() {
				const input = document.createElement('input');
				input.classList.add('form-control');
				input.type = this.type;
				input.required = this.required;
				if (this.id) {
					input.id = this.id;
				}
				if (this.name) {
					input.name = this.name;
				}
				if (this.value) {
					input.value = this.value;
				}
				if (this.placeholder) {
					input.placeholder = this.placeholder;
				}
				const wrapper = document.createElement('div');
				wrapper.classList.add('form-group');
				if (this.label) {
					const labelEl = document.createElement('label');
					labelEl.setAttribute('for', this.id);
					labelEl.textContent = this.label;
					wrapper.appendChild(labelEl);
				}
				wrapper.appendChild(input);
				return wrapper;
			}
		}

		
		
		
		
		
		
		
		
		
		class Button {
			constructor() {
				this.text = '';
				this.type = 'button';
				this.onClick = null;
				this.name = '';
				this.id = '';
				this.value = '';
				this.style = 'solid';
				this.color = 'primary';
			}

			setText(text) {
				this.text = text;
				return this;
			}

			setType(type) {
				this.type = type;
				return this;
			}

			setOnClick(onClick) {
				this.onClick = onClick;
				return this;
			}

			setName(name) {
				this.name = name;
				return this;
			}

			setId(id) {
				this.id = id;
				return this;
			}

			setValue(value) {
				this.value = value;
				return this;
			}

			setStyle(style) {
				this.style = style;
				return this;
			}

			setColor(color) {
				this.color = color;
				return this;
			}

			render() {
				const button = document.createElement('button');
				button.classList.add('btn');
				button.classList.add(`btn-${this.style}`);
				button.classList.add(`btn-${this.color}`);
				button.type = this.type;
				if (this.onClick) {
					button.onclick = this.onClick;
				}
				if (this.name) {
					button.name = this.name;
				}
				if (this.id) {
					button.id = this.id;
				}
				if (this.value) {
					button.value = this.value;
				}
				if (this.text) {
					button.textContent = this.text;
				}
				return button;
			}
		}
		
		
		
		
		
		
		
		
		
		
		return {
			Subtitle,
			Input,
			Button,
			Cookie
		};
		
	})();
	
	
	 /*
	 
	 Example:
	 
	 const button = new Component.Button().setText('Click Me').setType('button').setStyle('outline').setColor('primary').setOnClick('javascript:dothis()').render();
	 
	 const subtitle = new Component.Subtitle().setTitle('Only using a title').render();
	 
	 */