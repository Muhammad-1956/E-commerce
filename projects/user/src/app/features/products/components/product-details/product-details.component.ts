import { Component, EventEmitter, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';
import { AuthService } from 'projects/user/src/app/auth/services/auth.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  product_id: any;
  selected_product!: Product | any;
  installment: any;
  remaining_items!: number;
  quantity: number = 1;
  cart: any[]=[]
  // @Output() added = new EventEmitter();
  constructor(private acRoute: ActivatedRoute,private service: ProductService, private title: Title, private authService: AuthService){
    this.product_id = this.acRoute.snapshot.paramMap.get('id')
    this.service.getProduct(this.product_id).subscribe((res: any)=>{
      this.selected_product= res
      this.calculate_installment();
      this.remaining_items = this.generateRandomNumber();
    },err => {
      alert(err.message)
    })
  }
  ngOnInit(){
    this.toggleClass(0);
  }
  //Calculate Installment for Product.
  calculate_installment(){
    this.installment= this.selected_product.price / 6;
    this.installment= parseFloat(this.installment.toFixed())
  }

  //Generate Random Number (1-50) as Remaining items.
  generateRandomNumber(): number {
    return Math.floor(Math.random() * 50) + 1;
  }

  //Increase Quantity Function
  increase(){
    (this.quantity != this.remaining_items)? this.quantity += 1: null;
  }

  //Decrease Quantity Function
  decrease(){
  (this.quantity >= 1)? this.quantity -= 1: false;
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
      // this.cart.find(custom_item => custom_item.product?.id == this.selected_product?.id) ? alert(`Product is already exist in your cart`): this.addProduct();
      // this.cart.find(custom_item => custom_item?.quantity == this.quantity) ? alert(`Product is already exist in your cart`): this.updateProductQuantity();
      for(let i =0; i<= this.cart.length; i++){
        if(this.cart[i]?.product.id == this.selected_product.id){
          if(this.cart[i].quantity == this.quantity){
            alert('exist')
          } else{
            this.updateProductQuantity(i)
          }
        }else{
          this.addProduct();
        }
      }
    }else{
      this.addProduct();
    }
          // for(let i=0; i<= tokens.length;){
          //   if(tokens[i]?.token == this.authService.userToken){
          //     this.token_index = i
          //     i++;
          //   }
          // }

          // console.log(tokens[this.token_index]?.items)
          // token[0].token
        //   this.cart.push({product: this.selected_product, quantity: this.quantity})
        //   localStorage.setItem("tokens", JSON.stringify( this.cart))
        // console.log(this.authService.userToken)
  }
  addProduct(){
    this.cart.push({product:this.selected_product, quantity: this.quantity})
    localStorage.setItem("token", JSON.stringify(this.cart))
  }

  //Update Product
  updateProductQuantity(index: number){
    this.cart[index]= {product:this.selected_product,quantity: this.quantity}
    localStorage.setItem("token", JSON.stringify(this.cart))
  }










  // ngOnInit(){
    // this.service.getProduct(this.product_id).subscribe((res: any)=>{
      //   this.selected_product= res
      //   console.log(this.selected_product)
      // },err => {
        //   alert(err.message)
        // })
        // this.title.setTitle(`${this.selected_product?.name} Product`)
  // }
}
