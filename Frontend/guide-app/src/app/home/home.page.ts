import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}
  submit() {
    this.router.navigate(['/display']);
  }
  ngOnInit() {
    let user = this.router.getCurrentNavigation()?.extras.state;
    let tmp_user = JSON.stringify(user);
    let temp_user = JSON.parse(tmp_user)['user'];
    tmp_user = JSON.stringify(temp_user[0]);
    temp_user = JSON.parse(tmp_user)['email'];
    console.log(temp_user);
  }
}
