import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the ClockPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clock',
  templateUrl: 'clock.html'
})
export class ClockPage {

  aClockRoot = 'AClockPage'
  bClockRoot = 'BClockPage'


  constructor(public navCtrl: NavController) {}

}
