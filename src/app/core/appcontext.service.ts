import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable()
export class AppContext {

    public lanObservable: BehaviorSubject<string>;
    
    constructor(private _cookieService: CookieService){
        this.lanObservable = new BehaviorSubject(this.currentLan); 
        this.lanObservable.subscribe((lang: string) => {
            this._cookieService.set(environment.cookieLan, lang);
        });
    }
  
    public get currentLan(): string {
        return this._cookieService.check(environment.cookieLan) ? this._cookieService.get(environment.cookieLan) 
                                                                : environment.defaultLan;
    }
}
