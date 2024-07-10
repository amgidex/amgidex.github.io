import { Component } from '@angular/core';
import { APP_TITLE, APP_URL } from '../helpers/models/constants';
import { HelperService } from '../helpers/services/helper.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-frontpage',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule],
  templateUrl: './frontpage.component.html',
  styleUrl: './frontpage.component.scss'
})
export class FrontpageComponent {
  appTitle: string = APP_TITLE;

  constructor(public hS: HelperService) {

  }

  scrollToBottom() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth' // Optionally, you can make it smooth scrolling
    });
  }
  
}
