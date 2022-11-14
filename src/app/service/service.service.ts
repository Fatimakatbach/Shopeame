import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url: string = 'https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products'
  constructor(private http:HttpClient) { }


  getProducts(){
    return this.http.get(this.url)
  }

  getProductByid(id:number){

    return this.http.get(this.url+id)
  }

  addProduct(product:any):void{
   this.http.post(this.url,product).subscribe()

  }
  delete(id:number){
    return this.http.delete(this.url + '/' + id)
  }

  putProduct(nuevoProducto:any){
    return this.http.put(this.url + '/' + nuevoProducto.id,nuevoProducto)
  }

}

