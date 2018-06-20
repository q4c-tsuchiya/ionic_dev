import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BClockPage } from './b-clock';

@NgModule({
  declarations: [
    BClockPage,
  ],
  imports: [
    IonicPageModule.forChild(BClockPage),
  ],
})
export class BClockPageModule {}
