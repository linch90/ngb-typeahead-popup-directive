import { NgModule } from '@angular/core';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTypeaheadPopupDirective } from './ngb-typeahead-popup.directive';

@NgModule({
  declarations: [NgbTypeaheadPopupDirective],
  imports: [],
  exports: [NgbTypeaheadPopupDirective, NgbTypeaheadModule],
})
export class NgbTypeaheadPopupDirectiveModule {}
