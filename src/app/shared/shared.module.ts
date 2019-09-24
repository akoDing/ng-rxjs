import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollableTabComponent, ImageSliderComponent, HorizontalGridComponent, CountDownComponent, FooterComponent, VerticalGridComponent, ProductCardComponent, ProductTileComponent, BackButtonComponent, ProductVariantDialogComponent, ProductAmountComponent } from './components';
import { GridItemDirective, GridItemImageDirective, GridItemTitleDirective, TagDirective, AvatarDirective } from './directives';
import { AgoPipe } from './pipes';
import { DialogModule } from '../dialog/dialog.module';


@NgModule({
  declarations: [
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    CountDownComponent,
    FooterComponent,
    VerticalGridComponent,
    ProductCardComponent,
    ProductTileComponent,
    BackButtonComponent,
    ProductVariantDialogComponent,
    ProductAmountComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    TagDirective,
    AvatarDirective,
    AgoPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    DialogModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    CountDownComponent,
    FooterComponent,
    VerticalGridComponent,
    ProductCardComponent,
    ProductTileComponent,
    BackButtonComponent,
    ProductVariantDialogComponent,
    ProductAmountComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    TagDirective,
    AvatarDirective,
    AgoPipe
  ],
  entryComponents: [ProductVariantDialogComponent]
})
export class SharedModule { }
