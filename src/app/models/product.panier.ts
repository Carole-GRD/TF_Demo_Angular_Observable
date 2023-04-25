import { Product } from "./product";

export interface ProductPanier extends Product {
    // Comme est extends Product, un ProductPanier aura d'office un id, name, price
    quantity : number;
}