"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactModalComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const errors_1 = require("./errors");
let ContactModalComponent = class ContactModalComponent {
    constructor(modalService, sendEmailServ, recaptchaV3Service) {
        this.modalService = modalService;
        this.sendEmailServ = sendEmailServ;
        this.recaptchaV3Service = recaptchaV3Service;
        this.form = new forms_1.FormGroup({
            type: new forms_1.FormControl('', [forms_1.Validators.required]),
            email: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]),
            message: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.maxLength(1000), forms_1.Validators.minLength(5)]),
            'g-recaptcha-response': new forms_1.FormControl('')
        });
        this.showSuccess = false;
        this.showError = false;
        this._state = this.modalService.state.subscribe((res) => {
            setTimeout(() => {
                this.state = res;
            });
        });
        const element = document.body.querySelector('.grecaptcha-badge');
        if (element) {
            element.style.display = 'block';
        }
    }
    closeModal() {
        this.modalService.close();
    }
    onSubmit() {
        this.$reCaptchaSub = this.recaptchaV3Service.execute('importantAction')
            .subscribe((token) => {
            var _a;
            (_a = this.form.get('g-recaptcha-response')) === null || _a === void 0 ? void 0 : _a.setValue(token);
            this.sendEmailServ.sendEmail(this.form.value).subscribe(res => {
                this.form.reset();
                this.showSuccessModal();
                this.recaptchaV3Service.execute('');
            }, (error) => {
                const errorText = errors_1.errorVocabulary[error.error.errors[0].code] || error.error.errors[0].message;
                this.showErrorModal(errorText);
            });
        });
    }
    showSuccessModal() {
        this.showSuccess = true;
        this.showError = false;
        this.errorMessage = '';
    }
    showErrorModal(error) {
        this.showSuccess = false;
        this.showError = true;
        this.errorMessage = error;
    }
    ngOnDestroy() {
        var _a;
        const element = document.body.querySelector('.grecaptcha-badge');
        if (element) {
            element.style.display = 'none';
        }
        (_a = this.$reCaptchaSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
};
ContactModalComponent = __decorate([
    core_1.Component({
        // eslint-disable-next-line @angular-eslint/component-selector
        selector: 'contact-modal',
        templateUrl: './contactModal.component.html'
    })
], ContactModalComponent);
exports.ContactModalComponent = ContactModalComponent;
//# sourceMappingURL=contactModal.components.js.map