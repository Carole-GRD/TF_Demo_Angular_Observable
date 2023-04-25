import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { PanierService } from 'src/app/services/panier/panier.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

  productList : Product[] = []

  constructor(private _productService : ProductService, private _panierService : PanierService) {

  }


  ngOnInit(): void {
    this.productList = this._productService.getAll()
  }

  addToCart(product : Product) {
    this._panierService.addProduct(product)
  }
}
