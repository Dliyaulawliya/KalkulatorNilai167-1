import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable()
export class LogUpdateService {

  constructor(private updates: SwUpdate) {
    this.getUpdateWebPWA();
  }

  getUpdateWebPWA() {
    this.updates.available.subscribe(
      event => {
        console.log('current version is', event.current);
        console.log('available version is', event.available);
      }
    );

    this.updates.activated.subscribe(event => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });
  }
}
