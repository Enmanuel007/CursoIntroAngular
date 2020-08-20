import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {ProductosService} from './../../../core/servicios/productos/productos.service';
import {Producto} from './../../../core/models/producto.model';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.scss']
})
export class ProductoDetalleComponent implements OnInit {

  producto: Producto;

  constructor(
    private route: ActivatedRoute,
    private productosService: ProductosService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
     this.fetchProducto(id);
    });
  }
  fetchProducto(id: string){
    this.productosService.getProducto(id)
    .subscribe(producto => {
      this.producto = producto;
    });
  }
}
