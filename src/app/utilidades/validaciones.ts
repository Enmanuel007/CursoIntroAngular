import { AbstractControl } from '@angular/forms';
import { concat } from 'rxjs';

export class MisValidaciones {
   
    static PrecioIncorrecto(control: AbstractControl) {
        const value = control.value;
        console.log(value);
        if (value > 10000){
            return{precio_incorrecto: true};
        }
        return null;
   }
}