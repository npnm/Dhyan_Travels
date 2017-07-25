import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()
export class APIService {
    private apiURL = 'http://localhost:8000';
    public PageContent: object;
    private LoadPage: boolean = false;
    private headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded'
    });

    constructor(public http: Http) { }
    FetchSiteContents() {
        return this.http.get(this.apiURL + '/ReadApplicationContentFile').map(response => response.json());
        // .catch(error => error.json())
    }

    NotifyCustomer(req: any) {
        // return this.http.post(this.apiURL + '/NotifyCustomer', req).map(this.handleSuccess)
        return this.http.post(this.apiURL + '/NotifyCustomer', req, { headers: this.headers }).map(response => response.json());
            // .catch(this.handleError)
    }

    private handleSuccess(res: Response | any) {
        // In a real world app, you might use a remote logging infrastructure        
        console.log(res);
    }
    private handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}