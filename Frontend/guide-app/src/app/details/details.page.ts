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
  constructor(
    private router: Router,
    private http: HttpClient,
    private storageService: StorageService
  ) {}
  goBack() {
    this.router.navigateByUrl('/display');
  }
  ionViewWillEnter() {
    this.storageService.get('Type').then((type) => {
      if (type === 'Restaurant') {
        this.storageService.get('PlaceID').then((id) => {});
      } else if (type === 'Cafe') {
        this.storageService.get('PlaceID').then((id) => {});
      } else if (type === 'Bar') {
        this.storageService.get('PlaceID').then((id) => {});
      } else if (type === 'Rooftop') {
        this.storageService.get('PlaceID').then((id) => {});
      } else if (type === 'Beach') {
        this.storageService.get('PlaceID').then((id) => {});
      }
    });
  }
  ngOnInit() {
    this.ionViewWillEnter;
  }
}
