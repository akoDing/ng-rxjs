import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductContainerComponent, ConfirmOrderComponent } from './components';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'confirm',
        component: ConfirmOrderComponent
      },
      {
        path: ':productId',
        component: ProductContainerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
