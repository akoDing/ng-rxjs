import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DialogService } from 'src/app/dialog';
import { Observable, Subject, combineLatest, merge, of, interval, observable } from 'rxjs';
import { map, tap, share, publishReplay, refCount, publish, publishLast, startWith, debounceTime, take } from 'rxjs/operators';
import { ProductVariant } from '../../domain';
import { Payment } from '../payments';
import { ObserveOnOperator } from 'rxjs/internal/operators/observeOn';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmOrderComponent implements OnInit {

  item$: Observable<object | null>;
  count$ = new Subject<number>();
  totalPrice$: Observable<number>;
  payments: Payment[];

  unitPrice$: Observable<number>;
  amount$: Observable<number>;

  constructor(private dialogService: DialogService) {
  }

  ngOnInit() {
    this.payments = this.payments = [
      {
        id: 1,
        name: '微信支付',
        icon: 'assets/icons/wechat_pay.png',
        desc: '50元以内可免密支付'
      },
      {
        id: 2,
        name: '支付宝',
        icon: 'assets/icons/alipay.png'
      },
      {
        id: 3,
        name: '找微信好友支付',
        icon: 'assets/icons/friends.png'
      }
    ];
    this.item$ = this.dialogService.getData().pipe(
      tap(val => console.log(val)),
      // rxjs HOT
      // share()
      // publish(),
      // refCount()
    );
    // this.item$ = this.dialogService.getData();
    this.unitPrice$ = this.item$.pipe(
      map(
        (item: { variant: ProductVariant; count: number }) => item.variant.price
      ),
      // share()
    );
    this.amount$ = this.item$.pipe(
      map((item: { variant: ProductVariant; count: number }) => item.count),
      // share()
    );
    const mergedCount$ = merge(this.amount$, this.count$);
    this.totalPrice$ = combineLatest([this.unitPrice$, mergedCount$]).pipe(
      map(([price, amount]) => price * amount)
    );
  }

  handleAmountChange(count: number) {
    this.count$.next(count);
  }

  getData(): Observable<{}> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(
          {
            variant: {
              price: 10,
              product: {
                title: "【459元抢20件，抢完恢复589元】100%真羊毛+水貂领 海宁颗粒羊剪绒大衣女长款水貂领羊毛皮草外套"
              },
              productVariantImages: [
                {
                  imgUrl: "http://t00img.yangkeduo.com/goods/images/2019-08-26/4c05a43d-2cca-4f5f-a37a-05655e54e92d.jpg?imageMogr2/strip%7CimageView2/2/w/1300/q/80",
                }
              ]
            }, count: 2
          }
        );
      }, 1000);
    });
  }

  handlePay() { }

}
