import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Test1Page } from '../test1/test1';
/**
 * Generated class for the InformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// SIDEMENU DISAPPEARING, NEED TO FIX THIS

@IonicPage()
@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage {

  constructor( public navCtrl: NavController, public navParams: NavParams) {
  }
 NumberTechniques()
  {
    this.navCtrl.push(Test1Page); 
     }
  ionViewDidLoad() {
    console.log('ionViewDidLoad InformationPage');
  }


}
