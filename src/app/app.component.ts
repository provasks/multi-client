import { Component } from '@angular/core';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // page: any = {
  //   title: 'title',
  //   logo: '',
  //   dateTime: new Date()
  // };
  // constructor(public translator: TranslationService) {
  //   this.page.logo = `assets/${this.translator.clientName}/images/logo.jpg`;
  // }
}
