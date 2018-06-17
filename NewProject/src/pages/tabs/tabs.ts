import { Component } from '@angular/core';

// import { AboutPage } from '../about/about';
import { ConfirmationPage } from '../confirmation/confirmation';
import { KeybordPage } from '../keybord/keybord';
import { SelectWordPage } from '../selectword/selectword';
import { TimePage } from '../time/time';
import { YoutubeListPage } from '../youtubelist/youtubelist';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

//  tab1Root = AboutPage;
  tab1Root = ConfirmationPage;
  tab2Root = KeybordPage;
  tab3Root = SelectWordPage;
  tab4Root = TimePage;
  tab5Root = YoutubeListPage;

  constructor() {

  }
}
