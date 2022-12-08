import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}
  goToSignin() {
    this.router.navigate(['/signin']);
  }
  ngOnInit() {}
}
