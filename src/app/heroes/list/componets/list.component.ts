import { Component } from '@angular/core';


@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames:string[]=['Spiderman','Iroman','Hulk','Thor'];
  public heroBorrado?:string = '';
  public noBorronada:string = 'No ha borrado nada.';

borrarUltimoHeroe():void{
  this.heroBorrado = this.heroNames.pop();


}

}
