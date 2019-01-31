import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { environment } from 'src/environments/environment';



@Injectable()
export class QuoteService {

    private readonly serviceUrl: string = 'contact.service.php';

    constructor(private _httpService: HttpClient){}

    public sendInformation(contact: Contact): Observable<any> {
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');

        return this._httpService.post(`${environment.phpApiUrl}/${this.serviceUrl}`, JSON.stringify(contact), {
            headers: headers
        });
    }
}
