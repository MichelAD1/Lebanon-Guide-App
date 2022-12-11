import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

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
  constructor(
    private router: Router,
    private http: HttpClient,
    private storageService: StorageService
  ) {}
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
      this.storageService.get('ID').then((id) => {
        let img = this.image.split('C:\\fakepath\\')[1];
        let postData = new FormData();
        postData.append('name', this.name);
        postData.append('location', this.location);
        postData.append('description', this.description);
        postData.append('image', img);
        postData.append('reviewed_by', id);
        if (this.type === 'restaurant') {
          this.http
            .post(
              'http://127.0.0.1:8000/api/v0.1/places/restaurants/addRestaurant',
              postData
            )
            .subscribe(() => {
              this.router.navigate(['/tabs']);
            });
        } else if (this.type === 'cafe') {
          this.http
            .post(
              'http://127.0.0.1:8000/api/v0.1/places/cafes/addCafe',
              postData
            )
            .subscribe(() => {
              this.router.navigate(['/tabs']);
            });
        } else if (this.type === 'bar') {
          this.http
            .post('http://127.0.0.1:8000/api/v0.1/places/bars/addBar', postData)
            .subscribe(() => {
              this.router.navigate(['/tabs']);
            });
        } else if (this.type === 'rooftop') {
          this.http
            .post(
              'http://127.0.0.1:8000/api/v0.1/places/rooftops/addRooftop',
              postData
            )
            .subscribe(() => {
              this.router.navigate(['/tabs']);
            });
        } else if (this.type === 'beach') {
          this.http
            .post(
              'http://127.0.0.1:8000/api/v0.1/places/beaches/addBeach',
              postData
            )
            .subscribe(() => {
              this.router.navigate(['/tabs']);
            });
        }
      });
    }
  }

  ngOnInit() {
    this.ionViewWillEnter;
  }
}
