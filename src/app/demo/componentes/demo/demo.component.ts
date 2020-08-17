import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'ema-store';

  lista = ['Ema', 'Dani', 'Milan'];

  objeto = {};
  
  expo = 10;

  ngOnInit(){
  
  }
  
 addNombre(){
  this.lista.push('nuevo nombre');
}

deleteNombre(posicionNombre: number){
  this.lista.splice(posicionNombre, 1);
}

}
