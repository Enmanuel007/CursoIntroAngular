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


  crearProducto(producto: Producto){
    return this.http.post('https://platzi-store.herokuapp.com/products', producto);
  }
}