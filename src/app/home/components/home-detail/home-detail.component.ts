import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Channel, ImageSlider } from 'src/app/shared/components';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Ad, Product } from 'src/app/shared/domain';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit {

  selectedTabLink$: Observable<string>;

  imageSliders$: Observable<ImageSlider[]>;

  channels$: Observable<Channel[]>;

  ad$: Observable<Ad>;

  products$: Observable<Product[]>;

  futureDate = new Date(2019, 6, 2);
  startDate = new Date(2019, 6, 1);

  constructor(
    private route: ActivatedRoute,
    private service: HomeService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    // rxjs 取数
    this.imageSliders$ = this.service.getBanners();
    /* .subscribe(banners => {
      this.imageSliders = banners;
      this.cd.markForCheck();
    }); */

    this.channels$ = this.service.getchannels();
    /* .subscribe(channels => {
      this.channels = channels;
      this.cd.markForCheck();
    }); */
    // 录井参数
    this.selectedTabLink$ = this.route.paramMap
      .pipe(
        filter(params => params.has('tabLink')),
        map(params => params.get('tabLink'))
      );
    /* .subscribe(tabLink => {
      this.selectedTabLink = tabLink;
      // 开启脏值检测
      this.cd.markForCheck();
    }); */
    this.ad$ = this.selectedTabLink$.pipe(
      switchMap(tab => this.service.getAdByTab(tab)),
      // tslint:disable-next-line: no-string-literal
      map(ads => ads['data'][0]),
    );

    this.products$ = this.selectedTabLink$.pipe(
      switchMap(tab => this.service.getProductsByTab(tab)),
      // tslint:disable-next-line: no-string-literal
      map(product => product['data'])
    );

  }


}
