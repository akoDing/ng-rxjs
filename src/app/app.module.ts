import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { NotificationInterceptor, ParamInterceptor } from './home';
import { RecommendModule } from './recommend';
import { MyModule } from './my';
import { ProductModule } from './product';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
  /*   RecommendModule,
    MyModule,
    ProductModule */
  ],
  providers: [
    /*  {
       // 系统提供的 LOCALE_ID 就是一个 InjectionToken
       provide: LOCALE_ID,
       useValue: 'zh-Hans'
     }, */
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ParamInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
