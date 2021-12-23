import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'platform',
})
export class NpmStatisticService {

    constructor(
        private http: HttpClient
    ){}

    getPackageDownloads(name: string, period: string):Observable<any> {
        return this.http
            .get(`https://api.npmjs.org/downloads/point/${period}/${name}`, {
                headers: new HttpHeaders({
                    'Accept': 'application/json'
                })
            });
    }
}
