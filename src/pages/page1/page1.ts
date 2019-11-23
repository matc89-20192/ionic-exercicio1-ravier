import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  pessoa = 'Mundo!';

  constructor(public navCtrl: NavController) {
  }
  
  mudarNome(t: string){
    if(t != '')
     this.pessoa = t  + "!";
  }

}
