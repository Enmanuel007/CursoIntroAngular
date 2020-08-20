import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Producto} from './../../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
    
  constructor(
    private http: HttpClient
  ) { }

  getAllProductos(){
    return this.http.get<Producto[]>('https://platzi-store.herokuapp.com/products');
  }

  getProducto(id: string){
    return this.http.get<Producto>(`https://platzi-store.herokuapp.com/products/${id}`);
  }

}