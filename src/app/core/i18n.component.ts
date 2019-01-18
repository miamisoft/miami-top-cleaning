import { i18nService } from "./i18n.service";
import { TranslateService } from "@ngx-translate/core";

export abstract class i18nComponent {


    constructor(protected _i18nService: i18nService, protected _translate: TranslateService) {
        this.setupLanguage();
    }

    private setupLanguage(): void {
        this._translate.setDefaultLang(this._i18nService.currentLan);
        this._i18nService.lanObservable.subscribe((lang: string) => {
            this._translate.use(lang);
        });
    }
}