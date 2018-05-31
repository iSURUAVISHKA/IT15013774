import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StaffRegPage } from '../staff-reg/staff-reg';
import { ManageProfilePage } from '../manage-profile/manage-profile';

/**
 * Generated class for the StaffManagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-staff-management',
  templateUrl: 'staff-management.html',
})
export class StaffManagementPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffManagementPage');
  }

  itemTapped3(){
    this.navCtrl.push(StaffRegPage);
  }

  itemTapped(){
    this.navCtrl.push(ManageProfilePage);
  }

}
