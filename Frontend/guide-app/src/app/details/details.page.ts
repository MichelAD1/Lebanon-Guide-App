import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  array: any = [];
  type: any = '';
  constructor(
    private router: Router,
    private http: HttpClient,
    private storageService: StorageService
  ) {}
  goBack() {
    this.router.navigateByUrl('/display');
  }
  ionViewWillEnter() {
    this.storageService.get('Type').then((typee) => {
      this.type = typee;
      if (typee === 'Restaurant') {
        this.storageService.get('PlaceID').then((id) => {
          this.http
            .get('http://127.0.0.1:8000/api/v0.1/places/restaurants/get/' + id)
            .subscribe((data) => {
              let tmp = JSON.stringify(data);
              let temp = JSON.parse(tmp)['Restaurant'];
              this.array = temp;
            });
        });
      } else if (typee === 'Cafe') {
        this.storageService.get('PlaceID').then((id) => {
          this.http
            .get('http://127.0.0.1:8000/api/v0.1/places/cafes/get/' + id)
            .subscribe((data) => {
              let tmp = JSON.stringify(data);
              let temp = JSON.parse(tmp)['Cafe'];
              this.array = temp;
            });
        });
      } else if (typee === 'Bar') {
        this.storageService.get('PlaceID').then((id) => {
          this.http
            .get('http://127.0.0.1:8000/api/v0.1/places/bars/get/' + id)
            .subscribe((data) => {
              let tmp = JSON.stringify(data);
              let temp = JSON.parse(tmp)['Bar'];
              this.array = temp;
            });
        });
      } else if (typee === 'Rooftop') {
        this.storageService.get('PlaceID').then((id) => {
          this.http
            .get('http://127.0.0.1:8000/api/v0.1/places/rooftops/get/' + id)
            .subscribe((data) => {
              let tmp = JSON.stringify(data);
              let temp = JSON.parse(tmp)['Rooftop'];
              this.array = temp;
            });
        });
      } else if (typee === 'Beach') {
        this.storageService.get('PlaceID').then((id) => {
          this.http
            .get('http://127.0.0.1:8000/api/v0.1/places/beaches/get/' + id)
            .subscribe((data) => {
              let tmp = JSON.stringify(data);
              let temp = JSON.parse(tmp)['Beach'];
              this.array = temp;
            });
        });
      }
    });
  }
  ngOnInit() {
    this.ionViewWillEnter;
  }
}
