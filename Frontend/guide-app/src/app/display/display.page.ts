import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.page.html',
  styleUrls: ['./display.page.scss'],
})
export class DisplayPage implements OnInit {
  array: any = [];
  type: any = '';
  constructor(
    private router: Router,
    private http: HttpClient,
    private storageService: StorageService
  ) {}
  viewDetails(place_id: any) {
    console.log(place_id);
    this.router.navigateByUrl('/details');
  }
  goBack() {
    this.router.navigateByUrl('/tabs');
  }
  ionViewWillEnter() {
    this.storageService.get('Place').then((place) => {
      this.type = place;
      if (place === 'Restaurant') {
        this.http
          .get(
            'http://127.0.0.1:8000/api/v0.1/places/restaurants/getRestaurants'
          )
          .subscribe((data) => {
            let tmp = JSON.stringify(data);
            let temp = JSON.parse(tmp)['Restaurants'];
            this.array = temp;
          });
      } else if (place === 'Cafe') {
        this.http
          .get('http://127.0.0.1:8000/api/v0.1/places/cafes/getCafes')
          .subscribe((data) => {
            let tmp = JSON.stringify(data);
            let temp = JSON.parse(tmp)['Cafes'];
            this.array = temp;
          });
      } else if (place === 'Bar') {
        this.http
          .get('http://127.0.0.1:8000/api/v0.1/places/bars/getBars')
          .subscribe((data) => {
            let tmp = JSON.stringify(data);
            let temp = JSON.parse(tmp)['Bars'];
            this.array = temp;
          });
      } else if (place === 'Beach') {
        this.http
          .get('http://127.0.0.1:8000/api/v0.1/places/beaches/getBeaches')
          .subscribe((data) => {
            let tmp = JSON.stringify(data);
            let temp = JSON.parse(tmp)['Beaches'];
            this.array = temp;
          });
      } else if (place === 'Rooftop') {
        this.http
          .get('http://127.0.0.1:8000/api/v0.1/places/rooftops/getRooftops')
          .subscribe((data) => {
            let tmp = JSON.stringify(data);
            let temp = JSON.parse(tmp)['Rooftops'];
            this.array = temp;
          });
      } else if (place) {
      }
    });
  }
  ngOnInit() {
    this.ionViewWillEnter;
  }
}
