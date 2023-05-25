import { Injectable } from '@angular/core';
import { createAdminApiClient } from '@builder.io/admin-sdk';

const privateKey = 'bpk-36f60d8128f24c9380387a0c229511e1';
const adminSDK = createAdminApiClient(privateKey);

@Injectable({
	providedIn: 'root'
})
export class BuilderIoAdminApiClient {

	getAllModels() {
		return adminSDK.query({
			models: {
				id: true,
				everything: true,
			},
		});
	}
}