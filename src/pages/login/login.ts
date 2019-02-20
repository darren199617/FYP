import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
//import { Loginbutton } from '/Loginbutton';
import { HomePage } from '../home/home';
import { User } from "../../models/user";
import { RegisterPage } from "../register/register";
import { ProfilePage } from '../profile/profile';
import { InformationPage } from "../information/information";
import { AngularFireAuth} from 'angularfire2/auth';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	user = {} as User;

//HomePage: HomePage;
  constructor(private aFauth: AngularFireAuth,  public toastCtrl: ToastController,
  	public navCtrl: NavController, public navParams: NavParams) {


  }



 openHomePage(){
this.navCtrl.setRoot(HomePage);
 }





//goHomePage()
//{
//	this.navCtrl.setRoot(HomePage);
//}
	async login(user: User) {
    try{
   const result = await this.aFauth.auth.signInWithEmailAndPassword(user.email, user.password);

if(result){
this.navCtrl.setRoot(ProfilePage);	
  let toast = this.toastCtrl.create({
      message: 'Successfully Logged In',
      duration: 3000
    });
    toast.present();
}
   else {
      let toast = this.toastCtrl.create({
      message: 'Incorrect Email/Password',
      duration: 3000
    });
    toast.present();}}

 catch (e) {
  	console.error(e);
  }
 }

 register(){
 	this.navCtrl.push(RegisterPage);

 }
 information(){
 	this.navCtrl.push(InformationPage);
 }


}
