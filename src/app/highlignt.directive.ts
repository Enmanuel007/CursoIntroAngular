import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlignt]'
})
export class HighligntDirective {

  constructor(
    element:ElementRef
  ) { 
    element.nativeElement.style.backgroundColor = '#07545F';
  }

}
