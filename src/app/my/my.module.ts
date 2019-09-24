import { NgModule } from '@angular/core';

import { MyRoutingModule } from './my-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MyContainerComponent } from './components';


@NgModule({
  declarations: [MyContainerComponent],
  imports: [
    SharedModule,
    MyRoutingModule
  ]
})
export class MyModule { }
