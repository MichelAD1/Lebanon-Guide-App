import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,

    public router: Router,
    private storage: Storage
  ) {
    this.storage.create();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.router.navigateByUrl('splash');
    });
  }
}
