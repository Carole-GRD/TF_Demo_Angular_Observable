import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _products : Product[] = [
    { id: 1, name: 'Pizza 4 fromages', price: 10.5},
    { id: 2, name: 'Pizza Margherita', price: 8},
    { id: 3, name: 'Pizza Regina', price: 11.5},
    { id: 4, name: 'Pizza Bolognese', price: 10}
  ]

  constructor() { }

  getAll() : Product[] {
    return this._products
  }

  getById(id : number) : Product | undefined {
    return this._products.find(p => p.id == id)
  }

  // cerate update delete
}
