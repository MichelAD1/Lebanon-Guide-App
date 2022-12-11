import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.page.html',
  styleUrls: ['./add-review.page.scss'],
})
export class AddReviewPage implements OnInit {
  name: string = '';
  type: string = '';
  location: any = '';
  description: string = '';
  image: string = '';
  constructor(private router: Router, private http: HttpClient) {}
  ionViewWillEnter() {
    let message = document.getElementById('addMessage') as HTMLInputElement;
    message.className = 'add';
    message.innerHTML = '';
  }
  goToHome() {
    if (
      this.name == '' ||
      this.location == '' ||
      this.type == '' ||
      this.description == '' ||
      this.image == ''
    ) {
      let message = document.getElementById('addMessage') as HTMLInputElement;
      message.className = 'add';
      message.innerHTML = 'Please Fill All Fields';
    } else {
    }
  }

  ngOnInit() {
    this.ionViewWillEnter;
  }
}
