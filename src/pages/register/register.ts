import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database"; 
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

user ={} as User;
  constructor( private aFauth : AngularFireAuth,
  	public navCtrl: NavController, public toastCtrl: ToastController, public navParams: NavParams) {
  }

async register(user: User){
	try {

const result = await this.aFauth.auth.createUserWithEmailAndPassword(user.email, user.password);
	console.log(result);
	/*if(result){
  let toast = this.toastCtrl.create({
      message: 'Successfully Registered',
      duration: 3000
    });
    toast.present();
}
   else {
      let toast = this.toastCtrl.create({
      message: 'Please Try Again',
      duration: 3000
    });
    toast.present();}}*/


		}
 catch (e) {
 	console.error(e);
 }
}
}

