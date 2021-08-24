import { Component } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Home - NG Code Lab';


  currentUrl: any = ''
  constructor(router: Router) {
    router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        if (e.url != '') {
          this.currentUrl = e.url;
        } else {
          this.currentUrl ='';
        }
      }
    });
  }
  
}
