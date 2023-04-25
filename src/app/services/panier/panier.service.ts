import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductPanier } from 'src/app/models/product.panier';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private _panier : ProductPanier[] = [];
  private _prixTotal : number = 0;

  // Celui qui va nous permettre d'émettre les changements de valeurs
  private _panier$ : BehaviorSubject<ProductPanier[]> = new BehaviorSubject<ProductPanier[]>(this._panier)
  private _prixTotal$ : BehaviorSubject<number> = new BehaviorSubject<number>(this._prixTotal)

  // Celui qui sera accessible dans les différents components (on peut juste s'abonner dessus)
  panier$ : Observable<ProductPanier[]> = this._panier$.asObservable()
  prixTotal$ : Observable<number> = this._prixTotal$.asObservable()

  
  constructor() { }


  addProduct(product : Product) {
    // Vérifier si le produit est déjà dans le panier pour soit
    // l'ajouter
    let existingProduct = this._panier.find(p => p.id == product.id)
    if (!existingProduct) {
      this._panier.push( { ...product, quantity : 1 } )
    }
    // augmenter sa quantité de 1
    else {
      existingProduct.quantity++
    }

    // tab.reduce((accumulateur, valeur) => accumulateur + valeur, accumulateurValeurInitiale)
    this._prixTotal = this._panier.reduce((total, product) => 
      total += product.price * product.quantity, 0
    )
    console.log('PRIX TOTAL : ', this._prixTotal);
    

    // Notre observable emet le nouveau tableau modifié
    this._panier$.next(this._panier)
    this._prixTotal$.next(this._prixTotal)
  }


  removeProduct(id : number) {
    this._panier = this._panier.filter(p => p.id !== id) 

     // tab.reduce((accumulateur, valeur) => accumulateur + valeur, accumulateurValeurInitiale)
    this._prixTotal = this._panier.reduce((total, product) => 
     total += product.price * product.quantity, 0
    )
    console.log('PRIX TOTAL : ', this._prixTotal);
    // Notre observable emet le nouveau tableau modifié
    this._panier$.next(this._panier)
    this._prixTotal$.next(this._prixTotal)
  }
}
