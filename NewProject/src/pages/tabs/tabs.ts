import { Component } from '@angular/core';

// import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

//  tab1Root = AboutPage;
  tab1Root = ConfirmationPage;
  tab1Root = ConfirmationPage;
  tab2Root = KeybordPage;
  tab3Root = SelectWordPage;
  tab4Root = TimePage;
  tab5Root = YoutubeListPage;

  constructor() {

  }
}
