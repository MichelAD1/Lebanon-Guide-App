import { HttpClient } from '@angular/common/http';
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
  ionViewWillEnter() {
    let message = document.getElementById('loginMessage') as HTMLInputElement;
    message.innerHTML = '';
  }
  checkUser() {
    if (this.email == '' || this.password == '') {
      let message = document.getElementById('loginMessage') as HTMLInputElement;
      message.className = 'empty';
      message.innerHTML = 'Please Fill All Fields';
    } else {
      let postData = new FormData();
      postData.append('email', this.email);
      postData.append('password', this.password);
      this.http
        .post('http://127.0.0.1:8000/api/v0.1/users/login', postData)
        .subscribe((data) => {
          let tmp = JSON.stringify(data);
          if (JSON.parse(tmp)['User'] == 'Not found') {
            let message = document.getElementById(
              'loginMessage'
            ) as HTMLInputElement;
            message.className = 'not-found';
            message.innerHTML = 'Incorrect Email or Password';
          } else {
            this.router.navigate(['/tabs'], {
              state: { user: JSON.parse(tmp)['User'] },
            });
          }
        });
    }
  }
  goToSignup() {
    this.router.navigateByUrl('/signup');
  }

  ngOnInit() {}
}
