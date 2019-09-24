import { Directive, Renderer2, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
    selector: '[appGridItemTitle]',
})
export class GridItemTitleDirective implements OnInit {
    @Input() appGridItemTitle = '0.5rem';
    constructor(
        private el: ElementRef,
        private rd2: Renderer2,
    ) {
    }

    ngOnInit(): void {
        this.rd2.setStyle(this.el.nativeElement, 'grid-area', 'title');
        this.rd2.setStyle(this.el.nativeElement, 'font-size', this.appGridItemTitle);
    }
}
