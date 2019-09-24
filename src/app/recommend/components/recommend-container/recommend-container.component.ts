import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeService } from 'src/app/home';
import { filter, map } from 'rxjs/operators';
import { Ad, Product } from 'src/app/shared/domain';
import { DialogService } from 'src/app/dialog';

@Component({
  selector: 'app-recommend-container',
  templateUrl: './recommend-container.component.html',
  styleUrls: ['./recommend-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecommendContainerComponent implements OnInit {
  ad$: Observable<Ad>;

  products$: Observable<Product[]>;
  constructor(private service: HomeService) { }

  ngOnInit() {
    this.ad$ = this.service.getAdByTab('hot').pipe(
      // tslint:disable-next-line: no-string-literal
      map(ads => ads['data'][0])
    );
    this.products$ = this.service.getProductsByTab('hot').pipe(
      // tslint:disable-next-line: no-string-literal
      map(product => product['data'])
    );;
  }

}
