import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeContainerComponent, HomeDetailComponent, HomeGrandComponent } from './components';
import { HomeService, token } from './services';


@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent,
    HomeGrandComponent
  ],
  providers: [
    HomeService,
    { provide: token, useValue: 'xdd111' }
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
/*   exports: [
    HomeContainerComponent,
    HomeDetailComponent,
    HomeGrandComponent
  ] */
})
export class HomeModule { }
