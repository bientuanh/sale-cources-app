import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  url = environment.url;

  constructor() {}

  ngOnInit(): void {}

  onClickBannerBtn() {
    const objDiv = document.getElementById('my-courses');
    window.scroll(0, objDiv.offsetTop - 64);
  }
}
