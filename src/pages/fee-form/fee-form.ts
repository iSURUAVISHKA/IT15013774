import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/providerService';

/**
 * Generated class for the FeeFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-fee-form',
  templateUrl: 'fee-form.html',
})
export class FeeFormPage {

  public studentname : any;
  public studentyear : any;
  public course : any;
  public payment : any;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private db:DatabaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeeFormPage');
  }

}
