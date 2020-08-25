import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ProductosService } from './../../../core/servicios/productos/productos.service';
import { MisValidaciones } from './../../../utilidades/validaciones';


@Component({
  selector: 'app-producto-edit',
  templateUrl: './producto-edit.component.html',
  styleUrls: ['./producto-edit.component.scss']
})
export class ProductoEditComponent implements OnInit {

  form: FormGroup;
  id: string;
  constructor(
    private formBuilder: FormBuilder,
    private productosService: ProductosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.construirForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productosService.getProducto(this.id)
      .subscribe(producto =>{
         this.form.patchValue(producto);
      });
    });
  }

  guardarProducto(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const producto = this.form.value;
      this.productosService.actualizarProducto(this.id, producto)
      .subscribe((nuevoProducto) =>{
        console.log(nuevoProducto);
        this.router.navigate(['admin/productos']);
      });
    }
    console.log(this.form.value);
  }

  private construirForm() {
    this.form = this.formBuilder.group({
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
