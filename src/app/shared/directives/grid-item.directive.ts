import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appGridItem]',
})
export class GridItemDirective implements OnInit {
    constructor(
        private el: ElementRef,
        private rd2: Renderer2,
    ) {
    }

    ngOnInit(): void {
        this.rd2.setStyle(this.el.nativeElement, 'display', 'grid');
        this.rd2.setStyle(this.el.nativeElement, 'grid-template-areas', `'image' 'title'`);
        this.rd2.setStyle(this.el.nativeElement, 'place-items', 'center');
        this.rd2.setStyle(this.el.nativeElement, 'width', '4rem');
    }
}
