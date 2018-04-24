import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public nome_user:string = "Artur";
  /*Pra variavel aparecer no html é preciso fazer um binding {{}} */
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  /*Criando função*/
  /*Função que não seja do tipo any ou void tem que retornar algo*/
  public SomaDoisNumeros(num1:number, num2:number):void{
    alert(num1+num2);
  }

  ionViewDidLoad() {
    /*Aqui dentro executam ações quando a página for carregada */
    /*console.log('ionViewDidLoad FeedPage');*/
    
    /*This para executar */
    /*this.SomaDoisNumeros(33, 8);*/
  }

}
