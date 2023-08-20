import { Component, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';
import { CartService } from '../../../cart/services/cart.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent {


  products!: any[];
  latest_products!: any[];
  cart: any[]= []
  show = true;
  constructor(private service: ProductService, private title: Title){
    this.getPopularProducts();
    this.title.setTitle('Products')
  }
  //Get Popular Products Function
  getPopularProducts(){
    this.service.getPopularProducts().subscribe((res: any)=>{
      this.products = res
      this.show = false
    }, err =>{
      alert(err.message)
      this.show = false
    })
  }
  //Add To Cart Function
  addToCart(index: number){
    if("token" in localStorage){
      this.cart= JSON.parse(localStorage.getItem("token")!)
      this.cart.find(custom_item => custom_item.product?.id == this.products[index]?.id) ? alert(`Product is already exist in your cart`): this.addProduct(index);
    }else{
      this.addProduct(index);
    }
  }
  addProduct(index: number){
    let modal = {
      product:this.products[index],
      quantity: 1
    }
    this.cart.push(modal)
    localStorage.setItem("token", JSON.stringify(this.cart))
  }
}

