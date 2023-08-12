import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, docData } from '@angular/fire/firestore';
  import { addDoc, deleteDoc, doc, setDoc } from 'firebase/firestore';
  import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore: Firestore) { }

  // //C => Create
  // addProduct(product: any){
  //   let $productRef = collection(this.firestore, "popular-products");
  //   return addDoc($productRef, product);
  // }
  //R => Read
  getProducts(){
    let $productsRef=collection(this.firestore,"popular-products");
    return collectionData($productsRef,{idField:"id"}) as Observable<any[]>;
  }
  getProduct(index: number)
  {
    let $productRef=doc(this.firestore,"popular-products/"+ index);
    return docData($productRef,{idField:"id"}) as Observable<any>;
  }
  // //U => Update
  // updateProduct(product: any){
  //   let $productRef = doc(this.firestore, "popular-products/"+ product.id);
  //   return setDoc($productRef, product)
  // }
  // //D => Delete
  // deleteProduct(product: any){
  //   let $productRef = doc(this.firestore, "popular-products/"+ product.id)
  //   return deleteDoc($productRef);
  // }

}
