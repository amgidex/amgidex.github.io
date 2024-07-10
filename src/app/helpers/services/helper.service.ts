import { Injectable } from '@angular/core';
import { APP_URL } from '../models/constants';
import { Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HelperService {
  appURL: string = APP_URL;
  public unsubscribeIfExists(subscription: Subscription) {
    if (subscription) {
      subscription.unsubscribe();
    }
  }
}
