import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { MatToolbarModule, MatToolbarRow } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { APP_TITLE } from '../helpers/models/constants';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { HelperService } from '../helpers/services/helper.service';

declare let gtag: Function;

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule,  MatToolbarModule, MatToolbarRow, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  appTitle: string = APP_TITLE;
  private _routerSub = Subscription.EMPTY;

  constructor(    
    private hS: HelperService,
    private router: Router,
    private route: ActivatedRoute,
    private tS: Title) {
      this._routerSub = router.events.subscribe((val) => {
        if(val instanceof NavigationEnd) {
          const URL = val.url.split('/');
		      this.setTitle(URL);
          this.configureGTAG(val);
        }
      });
    }

  logoNaviate() {
    this.router.navigate(['']);
  }
  setTitle(url : string[]) : void {
    this.tS.setTitle( this.appTitle + " " + String(url[1]).charAt(0).toUpperCase() + String(url[1]).slice(1));
  }
  configureGTAG(event : NavigationEnd) {
    gtag('config', 'G-9DCJHHNZ8H', {
      'page_path': event.urlAfterRedirects
    });
  }
  ngOnDestroy() {
    this.hS.unsubscribeIfExists(this._routerSub);
  }
}
