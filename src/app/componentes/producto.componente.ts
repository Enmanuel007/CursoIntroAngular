import {Component} from '@angular/core'; 
import {Producto} from '../producto.model'; 

@Component({
    selector: 'app-producto',
    templateUrl: './producto.componente.html'
})
export class ProductoComponente {

    producto: Producto = {
        id: '1',
        image: 'assets/images/camiseta.png',
        title: 'Camiseta',
        price: 80000,
        description: 'bla bla bla bla bla'
    };

}