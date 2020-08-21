import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Producto} from './../../models/producto.model';

import { environment  } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  constructor(
    private http: HttpClient
  ) { }

  getAllProductos(){
    return this.http.get<Producto[]>('https://platzi-store.herokuapp.com/products');
    //return this.http.get<Producto[]>(`${environment.url_api}/productos`);
  }

  getProducto(id: string){
    return this.http.get<Producto>(`https://platzi-store.herokuapp.com/products/${id}`);
    //return this.http.get<Producto>(`${environment.url_api}/productos/${id}`);
  }

//CRUD
  crearProducto(producto: Producto){ 
    return this.http.post('https://platzi-store.herokuapp.com/products', producto);
  }

  actualizarProducto(id: string, changes: Partial<Producto>){
    return this.http.put(`https://platzi-store.herokuapp.com/products/${id}`, changes);
  }

  eliminarProducto(id: string){
    return this.http.delete(`https://platzi-store.herokuapp.com/products/${id}`);
  }
}