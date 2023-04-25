import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { IsconnectedGuard } from './guards/isconnected.guard';
import { CartPageComponent } from './products/cart-page/cart-page.component';
import { ListComponent } from './products/list/list.component';

const routes: Routes = [
  {path: 'produits', component: ListComponent},
  {path: 'panier', component: CartPageComponent, canActivate : [IsconnectedGuard]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
