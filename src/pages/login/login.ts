import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { RegisterPage } from '../register/register';
import { DatabaseProvider } from '../../providers/providerService';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public data:any;
  public userData:any;
  public usernameField:any;
  public adminUser:any;
  public passwordField:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private db:DatabaseProvider,
    public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loadhomepage(){
    this.db.getDocuments('users').then(data=>{
      console.log(data);
      this.userData = data;

      let result = data.filter(element => {
        return (element.userName==this.usernameField && element.password==this.passwordField); 
      })
      let element = result.pop();
      this.navCtrl.push(HomePage);

      // if(element.role == "primary"){
      //   this.navCtrl.push(HomePage)
      // }

      // else if(element.role == "secondary"){
      //   this.navCtrl.push(SecondaryHomepagePage)
      // }

      // else if(element.role == "tertary"){
      //   this.navCtrl.push(TertaryHomepagePage)
      // }
    });
  }

  createAccount(){
    this.navCtrl.push(RegisterPage);
  }

}
