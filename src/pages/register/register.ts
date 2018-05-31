import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/providerService';
import { AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  public name : any;
  public userid : any;
  public password : any;
  public year : any;
  public course : any;
  public gender : any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private db:DatabaseProvider,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  showAlert1() {
    let alert = this.alertCtrl.create({
      title: 'Empty Field...',
     
      buttons: ['OK']
    });
    alert.present();
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Sucessful...',
     
      buttons: ['OK']
    });
    alert.present();
  }

  addData(){
    this.db.addDocument('users',{
      name:this.name,
      userName:this.userid,
      password:this.password,
      gender:this.gender,
      year:this.year,
      course:this.course
    });
  }

  showConfirm() {
    let confirm1 = this.alertCtrl.create({
      title: 'Confirm',
      message: 'Do you want create an Account?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
            if(this.userid=='' ){
              this.showAlert1();
            }
            else if(this.name==''){
              this.showAlert1();
            }
            else if(this.password==''){
              this.showAlert1();
            }
            else if(this.userid==''){
              this.showAlert1();
            }
            else if(this.course==''){
              this.showAlert1();
            }
            else if(this.gender==''){
              this.showAlert1();
            }
            else if(this.year==''){
              this.showAlert1();
            }
           
            else{
              this.addData();
              this.showAlert();
              this.navCtrl.push(HomePage);
      
            }
           
          }
        }
      ]
    });
    confirm1.present();
  }


}
