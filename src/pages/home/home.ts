import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AngularFireAuth} from 'angularfire2/auth'
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private aFauth: AngularFireAuth, private toast: ToastController,
  	public navCtrl: NavController) {

  }

  logoutAService()
  {
  	this.navCtrl.setRoot(LoginPage); 
  	 }
/*
ionViewWillLoad(){
	this.aFauth.authState.subscribe(data => {
		if (data.email && data.uid){
		this.toast.create({
			message: 'Welcome to APP_NAME, ${data.email}',
			duration: 000
		}).present();
	}
	else{
		this.toast.create({
			message: 'Could not find authentication details.',
			duration: 3000
		}).present();

	}
	});
}*/

}
