import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/providerService';


/**
 * Generated class for the ManageProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-manage-profile',
  templateUrl: 'manage-profile.html',
})
export class ManageProfilePage {

  public profile: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private db: DatabaseProvider) {
    this.getprofileData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManageProfilePage');
  }

  getprofileData(){
    this.db.getDocuments('staff').then(data =>{
      this.profile = data;
    });
  }

}
