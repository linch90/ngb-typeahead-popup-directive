import { Directive, HostListener, Optional } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';

@Directive({
  selector: 'input[ngbTypeaheadPopup]',
})
export class NgbTypeaheadPopupDirective {
  @HostListener('focus', ['$event.target'])
  @HostListener('click', ['$event.target'])
  onClick(target: any) {
    if (target.value) return;
    if (!this.typeahead || !this.typeahead.isPopupOpen()) {
      target.dispatchEvent(new Event('input'));
      setTimeout(() => {
        target.classList.remove('ng-dirty');
      }, 0);
    }
  }

  constructor(@Optional() private typeahead: NgbTypeahead) {}
}
