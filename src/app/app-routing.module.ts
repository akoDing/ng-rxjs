import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'my', loadChildren: () => import('./my').then(m => m.MyModule) },
    { path: 'recommend', loadChildren: () => import('./recommend').then(m => m.RecommendModule) },
    { path: 'products', loadChildren: () => import('./product').then(m => m.ProductModule) },
    { path: 'orders', loadChildren: () => import('./product').then(m => m.ProductModule) },
];

@NgModule({
    // enableTracing开启浏览器路由订阅事件输出
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
