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
  constructor(
    private router: Router,
    private http: HttpClient,
    private storageService: StorageService
  ) {}
  viewDetails() {
    this.router.navigateByUrl('/details');
  }
  goBack() {
    this.router.navigateByUrl('/tabs');
  }
  ionViewWillEnter() {}
  ngOnInit() {
    this.ionViewWillEnter;
  }
}
