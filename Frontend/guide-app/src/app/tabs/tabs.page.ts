import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  public user: any = '';
  public tmp_user: any = '';
  public temp_user: any = '';
  constructor(private router: Router) {}
  goToAddReview() {
    console.log(this.temp_user);
  }
  goToAccount() {
    console.log(this.temp_user);
  }
  ngOnInit() {
    this.user = this.router.getCurrentNavigation()?.extras.state;
    this.tmp_user = JSON.stringify(this.user);
    this.temp_user = JSON.parse(this.tmp_user)['user'];
    this.tmp_user = JSON.stringify(this.temp_user[0]);
    this.temp_user = JSON.parse(this.tmp_user)['id'];
  }
}
