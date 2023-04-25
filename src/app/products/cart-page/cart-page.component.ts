import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductPanier } from 'src/app/models/product.panier';
import { PanierService } from 'src/app/services/panier/panier.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnDestroy {

  listPanier : ProductPanier[] = [];
  prixTotal : number = 0;

  panierSub : Subscription;
  prixToSub : Subscription;

  constructor(private _panierService : PanierService) {
    this.panierSub = this._panierService.panier$.subscribe((newPanier) => {
      console.log('ABONNEMENT CART-PAGE (nouveau panier) : ', newPanier);
      this.listPanier = newPanier
      
    })

    this.prixToSub = this._panierService.prixTotal$.subscribe((newTotal) => {
      this.prixTotal = newTotal
    })
  }

  // Appelé quand le composant est "détruit" -> plus affiché sur la page
  ngOnDestroy(): void {
    console.log('DESTRUCTION DE LA PAGE : On se désabonne de tous les observables');
    
    this.panierSub.unsubscribe()
    this.prixToSub.unsubscribe()
  }
}
