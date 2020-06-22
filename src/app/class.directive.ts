import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {
  constructor(private element: ElementRef) { }

  // @Input('appClass') set backgroundColor(newColor) {
  //   this.element.nativeElement.style.backgroundColor = newColor;
  // }

  @Input('appClass') set classNames(classObj: any) {
    Object.keys(classObj).forEach((key) => {
      const method = classObj[key] ? 'add' : 'remove';
      this.element.nativeElement.classList[method](key);
    });
  }
}
