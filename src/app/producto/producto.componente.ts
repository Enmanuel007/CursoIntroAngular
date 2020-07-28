import {Component, 
    Input, 
    Output, 
    EventEmitter, 
    OnChanges, 
    SimpleChanges, 
    OnInit, DoCheck, 
    OnDestroy
} from '@angular/core'; 
import {Producto} from '../producto.model'; 

@Component({
    selector: 'app-producto',
    templateUrl: './producto.componente.html',
    styleUrls:['./producto.componente.scss']
})
export class ProductoComponente implements OnInit, DoCheck, OnDestroy{

    @Input() producto: Producto ;
    @Output() productoClicked: EventEmitter<any> = new EventEmitter();
    today  = new Date();

    constructor(){
        console.log('1. constructor');
    }

    //ngOnChanges(changes:SimpleChanges ){
    //    console.log('2. ngOnChanges');
    //    console.log(changes);
    //}

    ngOnInit(){
        console.log('3. ngOnInit');
    }

    ngDoCheck() {
        console.log('4. ngDoCheck');
        
    }

    ngOnDestroy(){
        console.log('5. ngOnDestroy');
    }

    agregarAlCarrito(){
        console.log('añadir al carrito');
        this.productoClicked.emit(this.producto.id);
    }

}