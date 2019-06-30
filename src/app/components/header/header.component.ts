import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';
import { HeaderInfo } from 'src/app/types/header-info';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  header: HeaderInfo = <HeaderInfo>{};
  constructor(public translator: TranslationService) {
    this.header.logoPath = `assets/${
      this.translator.clientName
    }/images/logo.jpg`;
    this.header.title = 'title';
  }

  ngOnInit() {}
}
