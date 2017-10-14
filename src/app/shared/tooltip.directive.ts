import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective {

  @Input()
  set tooltip(tooltip) {
    this.tooltipElement.innerHTML = tooltip;
  }

  tooltipElement = document.createElement('div');

  constructor(private elementRef: ElementRef) {
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    console.log('entering', this.tooltipElement.innerHTML);
    this.elementRef.nativeElement.parentElement.appendChild(this.tooltipElement);
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove($event) {
    this.tooltipElement.setAttribute('style', `position: fixed; left: ${$event.clientX + 5}px; top: ${$event.clientY + 5}px;`);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    console.log('leaving', this.tooltipElement.innerHTML);
    this.elementRef.nativeElement.parentElement.removeChild(this.tooltipElement);
  }
}
