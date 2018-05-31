import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage }  from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';



import { DatabaseProvider } from '../providers/providerService';
import { Firebase } from '@ionic-native/firebase';
import { StudentMangementPage } from '../pages/student-mangement/student-mangement';
import { FeeManagementPage } from '../pages/fee-management/fee-management';
import { FeeFormPage } from '../pages/fee-form/fee-form';
import { FeeStrcturePage } from '../pages/fee-strcture/fee-strcture';
import { CourseAllocationPage } from '../pages/course-allocation/course-allocation';
import { ReportFeePage } from '../pages/report-fee/report-fee';
import { ExamSetupPage } from '../pages/exam-setup/exam-setup';
import { PresentAbsentPage } from '../pages/present-absent/present-absent';
import { StudentPerformancePage } from '../pages/student-performance/student-performance';
import { ExamManagementPage } from '../pages/exam-management/exam-management';
import { ManageProfilePage } from '../pages/manage-profile/manage-profile';
import { StaffRegPage } from '../pages/staff-reg/staff-reg';
import { StaffManagementPage } from '../pages/staff-management/staff-management';

var config = {
  apiKey: "AIzaSyBNNVz7BG3lmRyJ5dWPGi7PUgK1qPa1dLg",
  authDomain: "elearning-a430a.firebaseapp.com",
  databaseURL: "https://elearning-a430a.firebaseio.com",
  projectId: "elearning-a430a",
  storageBucket: "elearning-a430a.appspot.com",
  messagingSenderId: "706746628359"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    StudentMangementPage,
    FeeManagementPage,
    FeeFormPage,
    FeeStrcturePage,
    CourseAllocationPage,
    ReportFeePage,
    ExamSetupPage,
    PresentAbsentPage,
    StudentPerformancePage,
    ExamManagementPage,
    ManageProfilePage,
    StaffRegPage,
    StaffManagementPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    StudentMangementPage,
    FeeManagementPage,
    FeeFormPage,
    FeeStrcturePage,
    CourseAllocationPage,
    ReportFeePage,
    ExamSetupPage,
    PresentAbsentPage,
    StudentPerformancePage,
    ExamManagementPage,
    ManageProfilePage,
    StaffRegPage,
    StaffManagementPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    Firebase,
  ]
})
export class AppModule {}
