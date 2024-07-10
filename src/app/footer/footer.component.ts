import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { APP_TITLE, APP_YEAR } from '../helpers/models/constants';
import { HelperService } from '../helpers/services/helper.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, MatToolbar],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public appTitle: string = APP_TITLE;
  public appYear: string = APP_YEAR;

  constructor(public hS: HelperService) {

  }
}
