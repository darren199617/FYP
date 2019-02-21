import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth'
import { LoginPage } from '../login/login';
import { Answer } from "../../models/answer";
import { InformationPage } from '../information/information';
import { ToastController } from 'ionic-angular';
import { Test2Page } from '../test2/test2';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public toastCtrl: ToastController,private aFauth: AngularFireAuth, private toast: ToastController,
  	public navCtrl: NavController,  ) {


  }

test2()
{
	this.navCtrl.setRoot(Test2Page);
}

  logoutAService()
  {
  	this.navCtrl.setRoot(LoginPage); 
  	 }

}
