import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-display-search',
  templateUrl: './display-search.page.html',
  styleUrls: ['./display-search.page.scss'],
})
export class DisplaySearchPage implements OnInit {
  array: any = [];
  type: any = [];
  count: any = 0;
  constructor(
    private router: Router,
    private http: HttpClient,
    private storageService: StorageService
  ) {}
  goBack() {
    this.router.navigateByUrl('/tabs');
  }
  ionViewWillEnter() {
    this.storageService.get('Place').then((place) => {
      let postData = new FormData();
      postData.append('name', place);
      this.http
        .post('http://127.0.0.1:8000/api/v0.1/places/search', postData)
        .subscribe((data) => {
          let tmp = JSON.stringify(data);
          let temp = JSON.parse(tmp)['Places'];
          let array_tmp = [];
          for (let i = 0; i < temp.length / 2; i++) {
            array_tmp[i] = temp[i];
            this.type[i] = temp[i + temp.length / 2];
            this.count++;
          }
          this.count = 0;
          this.array = array_tmp;
        });
    });
  }
  ngOnInit() {
    this.ionViewWillEnter;
  }
}
