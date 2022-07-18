import { Injectable } from '@angular/core';
import {Product} from "../model/Product";

///Đánh dấu đây là 1 bean , các packed khác có thể vào lấy dữ liệu
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products : Product[] = [{
      id:1,
    name: 'Iphone',
    price: 1200,
    description: 'New'
  },
    {
      id:2,
      name: 'IphoneX',
      price: 1400,
      description: 'New'
    },
    {
      id:3,
      name: 'SamSung',
      price: 2200,
      description: 'LikeNew'
    },
    {
      id:4,
      name: 'Iphone12',
      price: 5200,
      description: 'New'
    },
    {
      id:5,
      name: 'Xiaomi',
      price: 1400,
      description: 'LikeNew'
    }
  ]

  constructor() { }

  getAll(){
   return  this.products;
  }

  saveProduct(product:any) {
    this.products.push(product);
  }

}
