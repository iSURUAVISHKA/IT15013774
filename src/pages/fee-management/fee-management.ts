import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FeeFormPage } from '../fee-form/fee-form';
import { FeeStrcturePage } from '../fee-strcture/fee-strcture';
import { ReportFeePage } from '../report-fee/report-fee';

/**
 * Generated class for the FeeManagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-fee-management',
  templateUrl: 'fee-management.html',
})
export class FeeManagementPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeeManagementPage');
  }

  itemTapped3(){
    this.navCtrl.push(FeeFormPage);
  }

  itemTapped(){
    this.navCtrl.push(FeeStrcturePage);
  }
  itemTapped2(){
    this.navCtrl.push(ReportFeePage);
  }
  
}
