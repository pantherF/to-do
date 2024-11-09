import { Directive, ElementRef, EventEmitter, HostListener, Output, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {
  @Output() clickOutside = new EventEmitter<void>();
  @Input() isActive: boolean = false; // New input property

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  public onClick(event: MouseEvent): void {
    if (!this.isActive) {
      return;
    }

    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.clickOutside.emit();
    }
  }
}
