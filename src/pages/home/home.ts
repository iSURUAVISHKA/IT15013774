import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/providerService';
import { StudentMangementPage } from '../student-mangement/student-mangement';
import { FeeManagementPage } from '../fee-management/fee-management';
import { ExamManagementPage } from '../exam-management/exam-management';
import { SmsManagementPage } from '../sms-management/sms-management';
import { StaffManagementPage } from '../staff-management/staff-management';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

public subjects:any;
public sub: any;
public sub1: any;
public sub2: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private db:DatabaseProvider) {
    this.viewSubjects();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  itemTapped3(){
    this.navCtrl.push(StudentMangementPage);
  }

  itemTapped(){
    this.navCtrl.push(FeeManagementPage);
  }

  itemTapped1(){
    this.navCtrl.push(ExamManagementPage);
  }

  itemTapped4(){
    this.navCtrl.push(StaffManagementPage);
  }
  
  viewSubjects(){
    this.db.getDocuments('courses').then(data=>{
      this.subjects=data;
  
      console.log(data);

      this.subjects.forEach(element =>{

        this.sub = element.subject
        this.sub.forEach(element =>{
          this.sub1 = element.sname
          this.sub2 = element.content
        });
      });
    });
  }
}
