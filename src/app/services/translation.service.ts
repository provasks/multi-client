import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private _currentLang: string;
  private settings: string;
  data: any = {};

  public get currentLang() {
    return this._currentLang;
  }

  // inject our translations
  constructor(private http: HttpClient) {
    var lang = navigator.language.substring(0, 2);
    // this._currentLang = this.settings.languages.includes(lang) ? lang : 'en';
    this._currentLang = lang || 'en';
  }

  public init(): Promise<{}> {
    return new Promise<{}>((resolve, reject) => {
      var langPath = `assets/i18n/${this.currentLang || 'en'}.json`;
      this.http.get<{}>(langPath).subscribe(
        translation => {
          this.data = Object.assign({}, translation || {});
          resolve(this.data);
        },
        error => {
          this.data = {};
          resolve(this.data);
        }
      );
    });
  }

  public translate(key: string): string {
    return this.data[key] || key;
  }

  // public instant(key: string) {
  //   // call translation
  //   return this.translate(key);
  // }
}
