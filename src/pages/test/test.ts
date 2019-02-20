import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Answer } from "../../models/answer";
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Test1Page } from '../test1/test1';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular';


/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  answer = {} as Answer;
  formgroup:FormGroup;
  memnumber:AbstractControl;
  phonenumber:AbstractControl;
  



  constructor(public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams, public formbuilder:FormBuilder) {}
 NumberTechniques()
  {
    this.navCtrl.push(Test1Page); 
     }


show_input() {
  //this.show = true;
if(this.show == true){
  this.show = false;
  }
  else
  {
  this.show = true;
  }
}

show_input1() {
  //this.show = true;
if(this.show1 == true){
  this.show1 = false;
  }
  else
  {
  this.show1 = true;
  }
}

show_input2() {
  //this.show = true;
if(this.show2 == true){
  this.show2 = false;
  }
  else
  {
  this.show2 = true;
  }
}


check1(){
    if(this.enteredNumber === '19161945'){
         let toast = this.toastCtrl.create({
      message: 'Correct',
      duration: 3000
    });
    toast.present();
   
    }
      else {
      let toast = this.toastCtrl.create({
      message: 'Wrong, Please Try Again. The Memory Techniques page may help you!',
      duration: 3000
    });
    toast.present();}}

check2(){
    if(this.enteredPhone === '1800341341'){
         let toast = this.toastCtrl.create({
      message: 'Correct',
      duration: 3000
    });
    toast.present();
   
    }
    else {
      let toast = this.toastCtrl.create({
      message: 'Wrong, Please Try Again. The Memory Techniques page may help you!',
      duration: 3000
    });
    toast.present();}}

check3(){
    if(this.enteredName1 === 'John' ||this.enteredName1 === 'john' ||this.enteredName1 === 'JOHN' ){
        let toast = this.toastCtrl.create({
      message: 'Correct, You remember John',
      duration: 3000
    });
    toast.present();
   
    }
    else {
             let toast = this.toastCtrl.create({
      message: 'Wrong, Please Try Again',
      duration: 3000
    });
    toast.present();
   
}}

check4(){
    if(this.enteredName2 === 'Lisa' ||this.enteredName2 === 'lisa' ||this.enteredName2 === 'LISA' ){
  
    let toast = this.toastCtrl.create({
      message: 'Correct, You remember Lisa',
      duration: 3000
    });
    toast.present();
   
    }
    else {
      let toast = this.toastCtrl.create({
      message: 'Wrong, Please Try Again',
      duration: 3000
    });
    toast.present();}}
   

check5(){
    if(this.enteredName3 === 'Katie' ||this.enteredName3 === 'katie'||this.enteredName3 === 'KATIE' ){
      let toast = this.toastCtrl.create({
      message: 'Correct, You remember Katie',
      duration: 3000
    });
    toast.present(); 
    }
    else {
      let toast = this.toastCtrl.create({
      message: 'Wrong, Please Try Again',
      duration: 3000
    });
    toast.present();
   
}}



  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

}
