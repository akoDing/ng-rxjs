import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TopMenu, Channel, ImageSlider } from 'src/app/shared/components';
import { environment } from 'src/environments/environment';
import { Ad, Product } from 'src/app/shared/domain';

@Injectable({
    providedIn: 'root'
})
export class HomeService {
    constructor(private http: HttpClient) {

    }
    /*   topMenus: TopMenu[] = [
          {
              id: 1,
              title: '热门',
              link: 'hot'
          },
          {
              id: 2,
              title: '男装',
              link: 'men'
          },
          {
              id: 3,
              title: '百货',
              link: 'department'
          },
          {
              id: 4,
              title: '运动',
              link: 'sports'
          },
          {
              id: 5,
              title: '手机',
              link: 'mobile'
          },
          {
              id: 6,
              title: '家纺',
              link: 'textline'
          },
          {
              id: 7,
              title: '食品',
              link: 'food'
          },
          {
              id: 8,
              title: '电器',
              link: 'ele'
          },
          {
              id: 9,
              title: '鞋包',
              link: 'shoes'
          },
          {
              id: 10,
              title: '汽车',
              link: 'car'
          },
          {
              id: 11,
              title: '水果',
              link: 'fruit'
          },
          {
              id: 12,
              title: '电脑',
              link: 'computer'
          },
          {
              id: 13,
              title: '内衣',
              link: 'bar'
          },
          {
              id: 14,
              title: '家具',
              link: 'fun'
          },
          {
              id: 15,
              title: '母婴',
              link: 'mother'
          },
          {
              id: 16,
              title: '美妆',
              link: 'makeup'
          },
          {
              id: 17,
              title: '家装',
              link: 'furnitures'
          },
      ]; */

    /*  channels: Channel[] = [
         {
             id: 1,
             icon: 'http://t07img.yangkeduo.com/images/2018-05-16/26c916947489c6b2ddd188ecdb54fd8d.png?imageMogr2/quality/70',
             title: '限时秒杀',
             link: 'hot',
         },
         {
             id: 2,
             icon: 'http://t00img.yangkeduo.com/goods/images/2018-12-22/b9851773573d1d682aa46d896de7f4fa.png?imageMogr2/format/webp/quality/50',
             title: '断码清仓',
             link: 'men',
         },
         {
             id: 3,
             icon: 'http://t00img.yangkeduo.com/goods/images/2018-08-29/119a4937b493cc0fcc968a4545657922.png?imageMogr2/format/webp/quality/50',
             title: '品牌馆',
             link: 'sports',
         },
         {
             id: 4,
             icon: 'http://t00img.yangkeduo.com/goods/images/2019-01-30/5667b3f1eaa8bb379303afb3934d1bc8.png?imageMogr2/format/webp/quality/50',
             title: '多多果园',
             link: 'fruit',
         },
         {
             id: 5,
             icon: 'http://t00img.yangkeduo.com/goods/images/2018-10-07/c671f2c49805658697cc0f72fff87eb3.png?imageMogr2/format/webp/quality/50',
             title: '9块9特卖',
             link: 'nine',
         },
         {
             id: 6,
             icon: 'http://t05img.yangkeduo.com/images/2018-05-16/801ae189938526cdaf40935d07034c5e.png?imageMogr2/format/webp/quality/50',
             title: '充值中心',
             link: 'add',
         },
         {
             id: 7,
             icon: 'http://t00img.yangkeduo.com/goods/images/2019-06-13/d3fd3a5b187bca651f8e65ae8a25c296.png?imageMogr2/format/webp/quality/50',
             title: '百亿补贴',
             link: 'adds',
         },
         {
             id: 8,
             icon: 'http://t00img.yangkeduo.com/goods/images/2019-07-10/04ec5c84906afb5b28b852b167a14ddf.png?imageMogr2/format/webp/quality/50',
             title: '现金签到',
             link: 'crash',
         },
         {
             id: 9,
             icon: 'http://t00img.yangkeduo.com/goods/images/2019-02-05/1351e256a0319a6885761b937d06d581.png?imageMogr2/format/webp/quality/50',
             title: '金猪赚大钱',
             link: 'pig',
         },
         {
             id: 10,
             icon: 'http://t00img.yangkeduo.com/goods/images/2018-10-28/27e48ad452991eeb8fd0559a0d3b60ff.png?imageMogr2/format/webp/quality/50',
             title: '电器城',
             link: 'ele',
         },
         {
             id: 11,
             icon: 'http://t07img.yangkeduo.com/images/2018-05-16/26c916947489c6b2ddd188ecdb54fd8d.png?imageMogr2/quality/70',
             title: '限时秒杀',
             link: 'hot',
         },
         {
             id: 12,
             icon: 'http://t00img.yangkeduo.com/goods/images/2018-12-22/b9851773573d1d682aa46d896de7f4fa.png?imageMogr2/format/webp/quality/50',
             title: '断码清仓',
             link: 'men',
         },
         {
             id: 13,
             icon: 'http://t00img.yangkeduo.com/goods/images/2018-08-29/119a4937b493cc0fcc968a4545657922.png?imageMogr2/format/webp/quality/50',
             title: '品牌馆',
             link: 'sports',
         },
         {
             id: 14,
             icon: 'http://t00img.yangkeduo.com/goods/images/2019-01-30/5667b3f1eaa8bb379303afb3934d1bc8.png?imageMogr2/format/webp/quality/50',
             title: '多多果园',
             link: 'fruit',
         },
         {
             id: 15,
             icon: 'http://t00img.yangkeduo.com/goods/images/2018-10-07/c671f2c49805658697cc0f72fff87eb3.png?imageMogr2/format/webp/quality/50',
             title: '9块9特卖',
             link: 'nine',
         },
         {
             id: 16,
             icon: 'http://t05img.yangkeduo.com/images/2018-05-16/801ae189938526cdaf40935d07034c5e.png?imageMogr2/format/webp/quality/50',
             title: '充值中心',
             link: 'add',
         }
     ]; */

    /*     imageSliders: ImageSlider[] = [
            {
                imgUrl: 'https://img.zcool.cn/community/01d0fa5d634f0aa8012187f4e1c9c2.jpg@1380w',
                link: '',
                caption: ''
            },
            {
                imgUrl: 'https://img.zcool.cn/community/01e3845d634f2da8012187f49dc4b8.jpg@1380w',
                link: '',
                caption: ''
            },
            {
                imgUrl: 'https://img.zcool.cn/community/01be3c5d634f1ca80120695cee1f6b.jpg@1380w',
                link: '',
                caption: ''
            },
            {
                imgUrl: 'https://img.zcool.cn/community/0153885d5fbfa1a8012187f4bddc34.jpg@1380w',
                link: '',
                caption: ''
            },
            {
                imgUrl: 'https://img.zcool.cn/community/0122645d5fbf5ba80120695cfea338.jpg@1380w',
                link: '',
                caption: ''
            },
        ]; */


    getTabs() {
        return this.http.get<TopMenu[]>(`${environment.baseUrl}/topMenus`);
    }

    getchannels() {
        return this.http.get<Channel[]>(`${environment.baseUrl}/channels`);
    }

    getBanners() {
        return this.http.get<ImageSlider[]>(`${environment.baseUrl}/banners`);
    }

    getAdByTab(tab: string) {
        return this.http.get<Ad[]>(`${environment.baseUrl}/ads`, {
            params: { categories_like: tab }
        });
    }

    getProductsByTab(tab: string) {
        return this.http.get<Product[]>(`${environment.baseUrl}/products`, {
            params: { categories_like: tab }
        });
    }
}
