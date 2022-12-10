import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  first_name: string = '';
  last_name: string = '';
  phone_number: any = '';
  email: string = '';
  password: string = '';
  constructor(private router: Router, private http: HttpClient) {}
  goToHome() {
    this.router.navigate(['/tabs']);
  }
  ngOnInit() {}
}
