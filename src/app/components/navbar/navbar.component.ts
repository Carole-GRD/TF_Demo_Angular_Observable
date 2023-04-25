import { Component } from '@angular/core';
import { PanierService } from 'src/app/services/panier/panier.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  listLen : number = 0;

  constructor(private _panierService: PanierService) {
    this._panierService.panier$.subscribe((newPanier) => {
      console.log('ABONNEMENT NAVBAR : TAILLE DE PANIER : ', newPanier.length);
      this.listLen = newPanier.length
    })
  }

}
