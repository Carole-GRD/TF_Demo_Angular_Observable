import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './products/cart-page/cart-page.component';
import { ListComponent } from './products/list/list.component';

const routes: Routes = [
  {path: 'produits', component: ListComponent},
  {path: 'panier', component: CartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
