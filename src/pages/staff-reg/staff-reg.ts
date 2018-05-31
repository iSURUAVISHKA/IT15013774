import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/providerService';
import { HomePage } from '../home/home';

/**
 * Generated class for the StaffRegPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-staff-reg',
  templateUrl: 'staff-reg.html',
})
export class StaffRegPage {

  public name : any;
  public mobile : any;
  public course : any;
  public gender : any;
  public password : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private db:DatabaseProvider,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffRegPage');
  }

  addData(){
    this.db.addDocument('staff',{
      name:this.name,
      mobile:this.mobile,
      course:this.course,
      gender:this.gender,
      password:this.password
    });
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
            if(this.name=='' ){
              this.showAlert1();
            }
            else if(this.mobile==''){
              this.showAlert1();
            }
            else if(this.password==''){
              this.showAlert1();
            }
            else if(this.course==''){
              this.showAlert1();
            }
            else if(this.gender==''){
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
