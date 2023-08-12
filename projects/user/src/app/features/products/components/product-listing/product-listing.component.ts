import { Component, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent {


  products!: any[];
  cart: any[]= []


  constructor(private service: ProductService){
    this.getProducts()
  }
  //Get All Products Function
  getProducts(){
    this.service.getProducts().subscribe((res: any)=>{
      this.products = res
    }, err =>{
      alert(err.message)
    })
  }
  //Add To Cart Function
  addToCart(index: number){
    if("token" in localStorage){
      this.cart= JSON.parse(localStorage.getItem("token")!)
      this.cart.find(custom_item => custom_item.product?.id == this.products[index]?.id && custom_item?.quantity == this.products[index]?.quantity ) ? alert(`Product is already exist in your cart`): this.addProduct(index);
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

