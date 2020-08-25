import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ProductosService } from './../../../core/servicios/productos/productos.service';
import { MisValidaciones } from './../../../utilidades/validaciones';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.scss']
})
export class FormProductoComponent implements OnInit {

  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private productosService: ProductosService,
    private router: Router
  ) {
    this.construirForm();
  }

  ngOnInit(): void {
  }

  guardarProducto(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const producto = this.form.value;
      this.productosService.crearProducto(producto)
      .subscribe((nuevoProducto) =>{
        console.log(nuevoProducto);
        this.router.navigate(['admin/productos']);
      });
    }
    console.log(this.form.value);
  }

  private construirForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MisValidaciones.PrecioIncorrecto]],
      image: [''],
      description: ['', [Validators.required]],
    });
  }

  get precioField(){
    return this.form.get('price');
  }

}
