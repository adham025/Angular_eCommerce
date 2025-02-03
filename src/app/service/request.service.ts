import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http:HttpClient) { }

  getProductList(): Observable<any>{
    return this.http.get(`https://dummyjson.com/products`)
  }

  getProductDetails(id:string){
    return this.http.get(`https://dummyjson.com/products/${id}`)

  }
}
