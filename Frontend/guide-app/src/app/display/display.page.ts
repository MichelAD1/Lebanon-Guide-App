import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.page.html',
  styleUrls: ['./display.page.scss'],
})
export class DisplayPage implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}
  viewDetails() {
    this.router.navigateByUrl('/details');
  }
  goBack() {
    this.router.navigateByUrl('/tabs');
  }
  ngOnInit() {}
}
