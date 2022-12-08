import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}
  goToSignup() {
    this.router.navigate(['/signup']);
  }

  ngOnInit() {}
}
