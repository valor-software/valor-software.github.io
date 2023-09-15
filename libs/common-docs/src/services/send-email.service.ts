import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactData {
	firstName: string;
	lastName: string;
	email: string;
	companyName?: string;
	jobRole?: string;
	companySize?: string;
	companyServiceName: CompanyServiceName;
	comment?: string;
	['g-recaptcha-response']: string;
}

export enum CompanyServiceName {
	Service = 'Service',
	Career = 'Career',
	Partner = 'Partner',
	Other = 'Other',
}

@Injectable({ providedIn: 'platform' })
export class SendEmailService {
	constructor(
		private readonly http: HttpClient
	) {
	}

	public sendSalesEmail(body: ContactData): Observable<any> {
		return this.http
			// https://formspree.io/f/xeqnjork
			.post('https://formspree.io/f/mbjvkglj', body, {
				headers: new HttpHeaders({
					'Accept': 'application/json'
				})
			});
	}

	public sendCareersEmail(body: ContactData): Observable<any> {
		return this.http
			.post('https://formspree.io/f/mgejzapp', body, {
				headers: new HttpHeaders({
					'Accept': 'application/json'
				})
			});
	}
}