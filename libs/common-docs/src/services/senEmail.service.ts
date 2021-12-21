import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({providedIn: 'platform'})
export class SendEmailService {

    constructor(
        private http: HttpClient
    ){}

    public sendEmail(body: any): Observable<any> {
        return this.http
            .post('https://formspree.io/f/xeqnjork', body, {
                headers: new HttpHeaders({
                    'Accept': 'application/json'
                })
            });
    }
}