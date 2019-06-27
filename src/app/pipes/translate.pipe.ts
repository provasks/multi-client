import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {
  constructor(private translator: TranslationService) {}

  transform(key: string, args: any[]): any {
    if (!key) return;
    return this.translator.translate(key);
  }
}
