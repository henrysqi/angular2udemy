import { Directive, OnInit, Input, ElementRef, Renderer, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') mouseover(){
    this.backgroundColor = this.highlightColor;
  };
  @HostListener('mouseleave') mouseleave(){
    this.backgroundColor = this.defaultColor;
  };
  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  }
  @Input() defaultColor = 'white';
  @Input('highlight') highlightColor = 'green';
  private backgroundColor: string;
  constructor() { 
    // this.elementRef.nativeElement.style.backgroundColor = 'green'
    // this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'purple')
  }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }
}
