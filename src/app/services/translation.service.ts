import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { settings } from 'src/settings';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private _currentLang: string;
  private _clientName: string;
  data: any = {};

  public get currentLang() {
    return this._currentLang;
  }

  public get clientName() {
    return this._clientName;
  }

  // inject our translations
  constructor(private http: HttpClient) {
    var lang = navigator.language.substring(0, 2);
    this._currentLang = settings.languages.includes(lang) ? lang : 'en';
  }

  public init(client): Promise<{}> {
    this._clientName = client;
    const defaultPath = `assets/${settings.defaultTranslation}/i18n/${
      this._currentLang
    }.json`;
    const defaultData = this.getTranslations(defaultPath);
    const clientPath = `assets/${client}/i18n/${this._currentLang}.json`;
    const clientData = this.getTranslations(clientPath);

    return new Promise<{}>((resolve, reject) => {
      Promise.all([defaultData, clientData]).then(values => {
        this.data = Object.assign({}, values[0], values[1]);
        resolve(this.data);
      });
    });
  }

  public translate(key: string): string {
    return this.data[key] || key;
  }

  getTranslations(path: string) {
    return new Promise((resolve, reject) => {
      this.http.get<{}>(path).subscribe(
        data => {
          resolve(data);
        },
        error => {
          console.log(`Error in ${path} file`);
        }
      );
    });
  }
}
