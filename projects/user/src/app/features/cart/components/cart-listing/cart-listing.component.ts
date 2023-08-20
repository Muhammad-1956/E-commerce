import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cart-listing',
  templateUrl: './cart-listing.component.html',
  styleUrls: ['./cart-listing.component.scss']
})
export class CartListingComponent {
  cart: any[]=[]
  total!: number;
  show = true;
  constructor(private title: Title){
    this.getProductsFromLocal()
    this.show = false
    this.title.setTitle('Cart')
  }

  //Get Products From Cart (Local Storage)
  getProductsFromLocal(){
    if("token" in localStorage){
      this.cart= JSON.parse(localStorage.getItem("token")!)
    }
    //Calculate Total Price of Products in cart
    this.getTotalPrice()
  }

  //Remove Product From Cart
  remove(index : number){
    this.cart= JSON.parse(localStorage.getItem("token")!)
    this.cart.find((custom_item: any) => custom_item.product?.id == this.cart[index].product?.id)? this.spliceProduct(index) : false;
    localStorage.setItem("token", JSON.stringify(this.cart))
    //Upadte Total Price
    this.updateTotalPrice();
  }
  //Splice Product From Array
  spliceProduct(index: number){
    this.cart.splice(index, 1)
  }

  //Calculate Total Price
  getTotalPrice(){
    this.total =0
    this.cart.forEach(item =>{
      this.total += item.product.price * item.quantity;
    })
  }

  //Update Total Price
  updateTotalPrice(){
    this.getTotalPrice()
  }

  //Update Cart Details
  update(index: number)
  {
    localStorage.setItem("token", JSON.stringify(this.cart));
    this.updateTotalPrice();
  }
}
