import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() appHighlight = 'orange';

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    console.log("[HighlightDirective] I'm inside ngOnInit of AboutComponent");
    this.el.nativeElement.style.color = this.appHighlight;
  }
}
