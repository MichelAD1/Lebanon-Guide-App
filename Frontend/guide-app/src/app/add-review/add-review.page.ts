import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.page.html',
  styleUrls: ['./add-review.page.scss'],
})
export class AddReviewPage implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}
  goToHome() {
    this.router.navigate(['/tabs']);
  }
  ngOnInit() {}
}
