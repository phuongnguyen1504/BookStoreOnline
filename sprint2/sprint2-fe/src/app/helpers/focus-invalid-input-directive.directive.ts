import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appFocusInvalidInputDirective]',
  exportAs: 'focusInvalidInput'
})
export class FocusInvalidInputDirectiveDirective {

  constructor(private el: ElementRef) { }

  @HostListener('submit')
  public onFormSubmit(): void {
    const invalidControl = this.el.nativeElement.querySelectorAll('input.ng-invalid');
    if (invalidControl.length > 0) {
      invalidControl[0].focus();
    }
  }

}
