import { Directive, Renderer2, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[appGridItemImage]',
})
export class GridItemImageDirective implements OnInit {
    @Input() appGridItemImage = '2rem';
    @Input() fitModel = 'cover';
    constructor(
        private el: ElementRef,
        private rd2: Renderer2,
    ) {
    }

    ngOnInit(): void {
        this.rd2.setStyle(this.el.nativeElement, 'grid-area', 'image');
        this.rd2.setStyle(this.el.nativeElement, 'width', this.appGridItemImage);
        this.rd2.setStyle(this.el.nativeElement, 'height', this.appGridItemImage);
        this.rd2.setStyle(this.el.nativeElement, 'object-fit', this.fitModel);
    }
}
