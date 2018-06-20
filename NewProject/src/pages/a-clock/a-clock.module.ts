import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AClockPage } from './a-clock';

@NgModule({
  declarations: [
    AClockPage,
  ],
  imports: [
    IonicPageModule.forChild(AClockPage),
  ],
})
export class AClockPageModule {}
