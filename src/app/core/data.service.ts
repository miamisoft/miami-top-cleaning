import { Injectable } from '@angular/core';
import { AppContext } from './appcontext.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {

    constructor(private _appContext: AppContext, private _httpService: HttpClient){}
    
    public getData(jsonName: string): Observable<any>{
        let lang = this._appContext.currentLan;
        return this._httpService.get(`${environment.dataBaseUrl}/${lang}/${jsonName}.${lang}.json`);
    }
}
