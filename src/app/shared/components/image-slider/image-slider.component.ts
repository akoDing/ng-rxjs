import {
  Component, OnInit, Input, ViewChild, ElementRef,
  ViewChildren, QueryList, AfterViewInit, Renderer2, OnDestroy, ChangeDetectionStrategy
} from '@angular/core';

export interface ImageSlider {
  imgUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageSliderComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() sliders: ImageSlider[] = [];
  @Input() sliderHeight = '160px';
  @Input() intervalBySeconds = 2;
  selectedIndex = 0;
  intervalId;
  @ViewChild('imageSlider', { static: true }) imageSlider: ElementRef;
  // @ViewChildren('img') imgs: QueryList<ElementRef>;
  constructor(
    private rd2: Renderer2,
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    if (this.intervalBySeconds <= 0) {
      return;
    }
    this.intervalId = setInterval(() => {
      this.rd2.setProperty(this.imageSlider.nativeElement, 'scrollLeft',
        this.getIndex(++this.selectedIndex) *
        this.imageSlider.nativeElement.scrollWidth / this.sliders.length);
    }, this.intervalBySeconds * 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  getIndex(idx: number): number {
    return idx >= 0 ? idx % this.sliders.length : this.sliders.length - (Math.abs(idx) % this.sliders.length);
  }

  handleScroll(ev) {
    const ratio = (ev.target.scrollLeft * this.sliders.length) / ev.target.scrollWidth;
    this.selectedIndex = Math.round(ratio);
  }

}
