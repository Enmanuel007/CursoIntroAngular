import { Component, OnInit } from '@angular/core';

import { ProductosService } from './../../../core/servicios/productos/productos.service';
@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html',
  styleUrls: ['./producto-lista.component.scss']
})
export class ProductoListaComponent implements OnInit {

  productos =  [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
    private productosService: ProductosService
  ) { }

  ngOnInit(): void {
    this.fetchProductos();
  }

  fetchProductos(){
    this.productosService.getAllProductos()
    .subscribe(productos => {
      this.productos = productos;
    });

}
}
