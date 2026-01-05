export interface Product {
    id:number,
    name:string,
    price:number
  }

export type ProductInput = Omit<Product, 'id'>;