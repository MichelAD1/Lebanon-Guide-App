import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  email: string = '';
  password: string = '';
  constructor(private router: Router, private http: HttpClient) {}
  checkUser() {
    let postData = new FormData();
    postData.append('email', JSON.stringify(this.email));
    postData.append('password', JSON.stringify(this.password));
    this.http
      .post('http://127.0.0.1:8000/api/v0.1/users/login', postData)
      .subscribe((data) => {
        let tmp = JSON.stringify(data);
        console.log(JSON.parse(tmp)['User']);
      });
  }
  goToSignup() {
    this.router.navigateByUrl('/signup');
  }

  ngOnInit() {}
}
