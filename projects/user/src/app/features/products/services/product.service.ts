import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, docData } from '@angular/fire/firestore';
  import { addDoc, deleteDoc, doc, setDoc } from 'firebase/firestore';
  import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore: Firestore) { }

  //Get Popular Products
  getPopularProducts(){
    let $productsRef=collection(this.firestore,"popular-products");
    return collectionData($productsRef,{idField:"id"}) as Observable<any[]>;
  }
  //Get Popular Products
  getLatestProducts(){
    let $productsRef=collection(this.firestore,"latest-products");
    return collectionData($productsRef,{idField:"id"}) as Observable<any[]>;
  }
  //Get Single Product
  getProduct(index: number)
  {
    let $productRef=doc(this.firestore,"popular-products/"+ index);
    return docData($productRef,{idField:"id"}) as Observable<any>;
  }

}
