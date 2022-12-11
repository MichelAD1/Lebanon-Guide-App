import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  id: any = 0;
  first_name: string = '';
  last_name: string = '';
  phone_number: any = '';
  email: string = '';
  password: string = '';
  constructor(
    private router: Router,
    private http: HttpClient,
    private storageService: StorageService
  ) {}
  removeUser() {}
  goToSignin() {
    this.router.navigate(['/signin']);
  }
  ionViewWillEnter() {
    this.storageService.get('ID').then((id) => {
      this.id = id;
      this.http
        .get('http://127.0.0.1:8000/api/v0.1/users/get/' + this.id)
        .subscribe((data) => {
          let tmp = JSON.stringify(data);
          let fname = document.getElementById('fname') as HTMLInputElement;
          let lname = document.getElementById('lname') as HTMLInputElement;
          let number = document.getElementById('number') as HTMLInputElement;
          let email = document.getElementById('email') as HTMLInputElement;
          let temp_user = JSON.parse(tmp)['User'];
          tmp = JSON.stringify(temp_user);
          let t_fname = JSON.parse(tmp)['first_name'];
          let t_lname = JSON.parse(tmp)['last_name'];
          let t_number = JSON.parse(tmp)['phone_number'];
          let t_email = JSON.parse(tmp)['email'];
          fname.placeholder = t_fname;
          lname.placeholder = t_lname;
          number.placeholder = t_number;
          email.placeholder = t_email;
        });
    });
  }
  updateUser() {
    this.storageService.get('ID').then((id) => {
      this.id = id;
      let postData = new FormData();
      if (this.first_name != '') {
        postData.append('first_name', this.first_name);
      }
      if (this.last_name != '') {
        postData.append('last_name', this.last_name);
      }
      if (this.email != '') {
        postData.append('email', this.email);
      }
      if (this.phone_number != '') {
        postData.append('phone_number', this.phone_number);
      }
      if (this.password != '') {
        postData.append('password', this.password);
      }
      this.http
        .post(
          'http://127.0.0.1:8000/api/v0.1/users/signup/' + this.id,
          postData
        )
        .subscribe((data) => {
          let tmp = JSON.stringify(data);
          if (JSON.parse(tmp)['User'] == 'Invalid email') {
            let message = document.getElementById(
              'updateMessage'
            ) as HTMLInputElement;
            message.className = 'update';
            message.innerHTML = 'Email Already Exist';
          } else {
            this.router.navigate(['/tabs']);
          }
        });
    });
  }

  ngOnInit() {
    this.ionViewWillEnter;
  }
}
