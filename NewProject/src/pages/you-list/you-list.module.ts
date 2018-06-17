import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YouListPage } from './you-list';

@NgModule({
  declarations: [
    YouListPage,
  ],
  imports: [
    IonicPageModule.forChild(YouListPage),
  ],
})
export class YouListPageModule {}
