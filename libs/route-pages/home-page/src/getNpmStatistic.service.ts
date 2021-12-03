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

    // getFiles() {
    //     return this.http.get('https://api.github.com/repos/valor-software/ngx-bootstrap/git/trees/development?recursive=1');
    // }
    //
    // getFile() {
    //     return this.http.get('https://api.github.com/repos/valor-software/ngx-bootstrap/git/blobs/4f9130513237450f597029b4a6ed5720e704cee6')
    // }
}
