import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCardComponent } from './shopping-card.component';
import { ShoppingCardHeaderComponent } from './shopping-card-header/shopping-card-header.component';
import { ShoppingCardFooterComponent } from './shopping-card-footer/shopping-card-footer.component';
import { ShoppingCardBodyComponent } from './shopping-card-body/shopping-card-body.component';

@NgModule({
  imports: [CommonModule],
  exports: [],
  declarations: [
    ShoppingCardComponent,
    ShoppingCardHeaderComponent,
    ShoppingCardFooterComponent,
    ShoppingCardBodyComponent,
  ],
})
export class ShoppingCardModule {}
