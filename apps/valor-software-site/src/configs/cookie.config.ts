import { NgcCookieConsentConfig } from 'ngx-cookieconsent';

export const cookieConfig: NgcCookieConsentConfig = {
	cookie: {
		domain: window.location.hostname
	},
	'palette': {
		'popup': {
			'background': '#252829',
			'text': '#ffffff',
			'link': '#ffffff'
		},
		'button': {
			'background': '#E24E63',
			'text': '#E3E3E3',
			'border': 'transparent'
		}
	},
	theme: 'block',
	type: 'info',
	layout: 'custom',
	layouts: {
		'custom': `<div class="flex flex-col lg:flex-row justify-between px-4 xl:px-20 font-workSans !w-full">
			{{messagelink}} {{acceptCookies}}</div>`
	},
	elements: {
		messagelink: `
		<div class="flex flex-col">
			<span class="text-20">{{title}}</span>
	    <span id="cookieconsent:desc" class="leading-18">{{message}} 
	    
	      <a aria-label="learn more about our privacy policy"
	         class="text-center text-header_font_col text-sm link" 
	         href="{{privacyPolicyHref}}"
	         target="_blank">{{privacyPolicyLink}}
	      </a> 
	    </span>
		</div>
    `,
		acceptCookies: `
		<div class="cc-compliance pt-5 lg:pt-0">
			<a aria-label="dismiss cookie message" 
				 class="btn-pink flex md:justify-between justify-center py-5 px-10 w-full lg:w-auto cc-btn cc-dismiss">{{button}}
			</a>
		</div>
		`
	},
	content: {
		title: 'This website uses cookies.',
		message: `We use cookies to make sure this website can function. By continuing to browse this website, <br>you agree to our use of cookies.`,
		privacyPolicyLink: 'Learn more',
		privacyPolicyHref: 'https://valor-software.com/privacy-policy',
		button: 'Accept all cookies'
	}
};
