import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({providedIn: 'root'})
export class SendEmailService {

    constructor(
        private http: HttpClient
    ){}
//https://formspree.io/f/xeqnjork
    public sendEmail(body: any): Observable<any> {
        return this.http
            .post('https://formspree.io/f/mpzbawjy', body, {
                headers: new HttpHeaders({
                    'Accept': 'application/json'
                })
            });
    }
}