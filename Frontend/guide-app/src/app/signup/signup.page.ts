import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}
  goToHome() {
    this.router.navigate(['/home']);
  }
  ngOnInit() {}
}
