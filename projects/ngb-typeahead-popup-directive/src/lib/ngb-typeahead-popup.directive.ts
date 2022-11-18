import { Directive, HostListener } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'input[ngbTypeaheadPopup]',
})
export class NgbTypeaheadPopupDirective {
  @HostListener('focus', ['$event.target'])
  @HostListener('click', ['$event.target'])
  onClick(t: any) {
    if (!this.typeahead.isPopupOpen()) t.dispatchEvent(new Event('input'));
  }

  constructor(private typeahead: NgbTypeahead) {}
}
