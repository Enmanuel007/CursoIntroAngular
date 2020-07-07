import {Component, Input, Output, EventEmitter} from '@angular/core'; 
import {Producto} from '../producto.model'; 

@Component({
    selector: 'app-producto',
    templateUrl: './producto.componente.html'
})
export class ProductoComponente {

    @Input() producto: Producto ;
    @Output() productoClicked: EventEmitter<any> = new EventEmitter();

    agregarAlCarrito(){
        console.log('añadir al carrito');
        this.productoClicked.emit(this.producto.id);
    }

}