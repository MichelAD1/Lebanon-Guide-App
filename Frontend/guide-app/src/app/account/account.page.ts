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

  ngOnInit() {
    this.ionViewWillEnter;
  }
}
