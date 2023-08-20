import { Component, ElementRef, EventEmitter, Output, Renderer2, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';
import { AuthService } from 'projects/user/src/app/auth/services/auth.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  product_id: any;
  selected_product!: Product | any;
  installment: any;
  quantity: number = 1;
  cart: any[]=[]
  show= true;
  subTitle = 'Details'
  constructor(
    private acRoute: ActivatedRoute,
    private service: ProductService,
    private title: Title,
    private authService: AuthService,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private viewportScroller: ViewportScroller){

    this.viewportScroller.scrollToPosition([0,0]);
    this.product_id = this.acRoute.snapshot.paramMap.get('id')
    this.service.getProduct(this.product_id).subscribe((res: any)=>{
    this.selected_product= res
    this.prepare_product();
    },err => {
      alert(err.message)
      this.show = false
    })
    this.title.setTitle(`Product ${this.subTitle}`)
  }
  ngOnInit(){

  }

  //Calculate Installment for Product.
  calculate_installment(){
    this.installment= this.selected_product.price / 6;
    this.installment= parseFloat(this.installment.toFixed())
  }

  //Increase Quantity Function
  increase(){
    (this.quantity != this.selected_product.remaining_items)? this.quantity += 1: null;
  }

  //Decrease Quantity Function
  decrease(){
  (this.quantity > 1)? this.quantity -= 1: false;
  }

  //Change the Current Image
  change(i: number){
    switch(i) {
      case 0: {
        this.rotateImage();
        this.toggleClass(i);
        break;
      }
      case 1: {
        this.rotateImage(90);
        this.toggleClass(i);
        break;
      }
      case 2: {
        this.rotateImage(180);
        this.toggleClass(i);
        break;
      }
      case 3: {
        this.rotateImage(270);
        this.toggleClass(i);
        break;
      }
      default: {
        break;
      }
    }
  }

  //Rotate Image with Specific Degree Function
  rotateImage(degree?: number){
    let imgUrl = document.querySelector("#image");
        if(degree == 90){
          imgUrl?.classList.remove('r-180')
          imgUrl?.classList.remove('r-270')
          imgUrl?.classList.add(`r-${degree}`)
        }else if(degree == 180){
          imgUrl?.classList.remove('r-90')
          imgUrl?.classList.remove('r-270')
          imgUrl?.classList.add(`r-${degree}`)
        } else if(degree == 270){
          imgUrl?.classList.remove('r-90')
          imgUrl?.classList.remove('r-180')
          imgUrl?.classList.add(`r-${degree}`)
        } else if( degree == null){
          imgUrl?.classList.remove('r-90')
          imgUrl?.classList.remove('r-180')
          imgUrl?.classList.remove('r-270')
        }
  }

  //Toggle Class for Selected Image
  toggleClass(index: number){
    let selected_image = document.querySelector(`#image-${index}`)
    for(let i= 0; i<= 4; i++){
      let image = document.querySelector(`#image-${i}`)
      image?.classList.remove('selected-image')
    }
    selected_image?.classList.add('selected-image')
  }

  //Add To Cart Function
  addToCart(){
    let modal: any;
    modal = [
      {
        product:this.selected_product,
        quantity: this.quantity
        }
    ]
    if("token" in localStorage){
      this.cart= JSON.parse(localStorage.getItem("token")!)
      this.cart.find(custom_item => custom_item.product?.id == this.selected_product?.id) ? alert(`Product is already exist in your cart`): this.addProduct();
    }else{
      this.addProduct();
    }
  }
  addProduct(){
    this.cart.push({product:this.selected_product, quantity: this.quantity})
    localStorage.setItem("token", JSON.stringify(this.cart))
  }
  //Prepare Product Function
  prepare_product(){
    this.toggleClass(0);
    this.calculate_installment();
    this.show = false
  }
}
