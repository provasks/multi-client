import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslatePipe } from './pipes/translate.pipe';
import { TranslationService } from './services/translation.service';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export function setupTranslateFactory(
  translator: TranslationService
): Function {
  return (client: string = environment.client) =>
    translator.init(client || 'netapp');
}
@NgModule({
  declarations: [AppComponent, TranslatePipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    TranslationService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [TranslationService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
