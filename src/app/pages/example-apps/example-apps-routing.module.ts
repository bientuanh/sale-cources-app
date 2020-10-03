import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleAppsComponent } from './example-apps.component';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';

const routes: Routes = [
  {
    path: '',
    component: ExampleAppsComponent,
  },
  {
    path: 'shopping-card',
    component: ShoppingCardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleAppsRoutingModule {}
