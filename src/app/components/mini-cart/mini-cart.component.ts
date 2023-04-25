import { Component } from '@angular/core';
import { ProductPanier } from 'src/app/models/product.panier';
import { PanierService } from 'src/app/services/panier/panier.service';

@Component({
  selector: 'app-mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.scss']
})
export class MiniCartComponent {

  listPanier : ProductPanier[] = [];
  prixTotal : number = 0;

  constructor(private _panierService: PanierService) {
    this._panierService.panier$.subscribe((newPanier) => {
      console.log('ABONNEMENT MINI-CART (nouveau panier): ', newPanier);
      this.listPanier = newPanier;
    })

    this._panierService.prixTotal$.subscribe((newTotal) => {
      this.prixTotal = newTotal
    })
  }

  removeFromCart(id : number) : void {
    this._panierService.removeProduct(id)
  }

}
