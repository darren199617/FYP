import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
//import { Loginbutton } from '/Loginbutton';
import { HomePage } from '../home/home';
import { User } from "../../models/user";
import { RegisterPage } from "../register/register";
import { InformationPage } from "../information/information";
import { AngularFireAuth} from 'angularfire2/auth';
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
  constructor(private aFauth: AngularFireAuth,  private toast: ToastController,
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
this.navCtrl.setRoot(HomePage);	
}
    else{
   this.toast.create({
      message: 'incorrect Email or Password',
      duration:3000
    }).present();
 }
 

 }

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
