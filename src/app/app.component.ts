import { Component } from '@angular/core';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  page: any = {
    title: 'home',
    logo: '',
    dateTime: new Date()
  };

  constructor(public translator: TranslationService) {
    // this.page.title = this.translator.translate(this.page.title);
    // this.page.logo = `assets/netapp/images/favicon.jpg`;
    this.page.logo = `assets/${this.translator.clientName}/images/logo.jpg`;
  }
}
