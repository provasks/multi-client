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
    dateTime: new Date()
  };

  constructor(public translator: TranslationService) {
    debugger;
    this.page.title = this.translator.translate(this.page.title);
  }
}
