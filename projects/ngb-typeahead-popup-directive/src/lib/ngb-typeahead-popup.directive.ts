import { Directive, HostListener, Optional } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';

@Directive({
  selector: 'input[ngbTypeaheadPopup]',
})
export class NgbTypeaheadPopupDirective {
  @HostListener('focus', ['$event.target'])
  @HostListener('click', ['$event.target'])
  onClick(t: any) {
    if (!this.typeahead || !this.typeahead.isPopupOpen())
      t.dispatchEvent(new Event('input'));
  }

  constructor(@Optional() private typeahead: NgbTypeahead) {}
}
