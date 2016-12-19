import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {
  //css class open will only be added to hosting element if opened returns true
  @HostBinding('class.open') get opened(){
    return this.isOpen;
  }
  @HostListener('click') open() {
    this.isOpen = true;
  }
  @HostListener('mouseleave') close() {
    this.isOpen = false;
  }
  private isOpen = false;
}
