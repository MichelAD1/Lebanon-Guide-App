import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  search: any = '';
  constructor(
    private router: Router,
    private http: HttpClient,
    private storageService: StorageService
  ) {}
  submitResto() {
    this.storageService.store('Place', 'Restaurant');
    this.router.navigate(['/display']);
  }
  submitCafe() {
    this.storageService.store('Place', 'Cafe');
    this.router.navigate(['/display']);
  }
  submitBeach() {
    this.storageService.store('Place', 'Beach');
    this.router.navigate(['/display']);
  }
  submitBar() {
    this.storageService.store('Place', 'Bar');
    this.router.navigate(['/display']);
  }
  submitRooftop() {
    this.storageService.store('Place', 'Rooftop');
    this.router.navigate(['/display']);
  }
  submitSearch() {
    this.storageService.store('Place', this.search);
    this.router.navigate(['/display']);
  }
  ngOnInit() {}
}
