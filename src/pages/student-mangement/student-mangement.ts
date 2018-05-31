import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { CourseAllocationPage } from '../course-allocation/course-allocation';

/**
 * Generated class for the StudentMangementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-student-mangement',
  templateUrl: 'student-mangement.html',
})
export class StudentMangementPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentMangementPage');
  }

  itemTapped3(){
    this.navCtrl.push(RegisterPage);
  }
  itemTapped(){
    this.navCtrl.push(CourseAllocationPage);
  }

}
