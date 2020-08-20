import { Component, OnInit } from '@angular/core';
import { Producto } from './../../../core/models/producto.model';
import { ProductosService } from './../../../core/servicios/productos/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  productos: Producto[] = [];


  constructor(
    private productosService: ProductosService
  ) { }

  ngOnInit() {
    this.fetchProductos();
  }

  clickProducto(id:number){
    console.log('producto');
    console.log(id);
  }
  
  fetchProductos(){
    this.productosService.getAllProductos()
    .subscribe(productos => {
      this.productos = productos;
    });
  }
}
