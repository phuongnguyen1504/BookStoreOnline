import { Component } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sprint2-fe';
  showHeader:boolean=true;
  constructor(private router:Router) {
    router.events.subscribe(value => {
      if (value instanceof NavigationEnd){
        if (value.url=='/login'){
          this.showHeader=false;
        } else {
          this.showHeader=true;
        }
      }
    })
  }
}
