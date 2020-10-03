import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleAppsComponent } from './example-apps.component';
import { ExampleAppsRoutingModule } from './example-apps-routing.module';
import { ShoppingCardModule } from './shopping-card/shopping-card.module';

import { registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';

registerLocaleData(localeVi, 'vi-VN');

@NgModule({
  declarations: [ExampleAppsComponent],
  imports: [CommonModule, ExampleAppsRoutingModule, ShoppingCardModule],
})
export class ExampleAppsModule {}
