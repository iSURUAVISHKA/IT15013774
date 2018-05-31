import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExamSetupPage } from '../exam-setup/exam-setup';
import { PresentAbsentPage } from '../present-absent/present-absent';

/**
 * Generated class for the ExamManagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-exam-management',
  templateUrl: 'exam-management.html',
})
export class ExamManagementPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExamManagementPage');
  }

  itemTapped3(){
    this.navCtrl.push(ExamSetupPage);
  }

  itemTapped(){
    this.navCtrl.push(PresentAbsentPage);
  }

}
