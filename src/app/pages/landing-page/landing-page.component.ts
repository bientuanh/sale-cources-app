import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  url = environment.url;
  colMyCoursesNumber = 3;
  colExampleAppsNumber = 2;
  isDisplayGridTitle = true;

  constructor() {}

  ngOnInit(): void {}

  onClickBannerBtn() {
    const objDiv = document.getElementById('my-courses');
    window.scroll(0, objDiv.offsetTop - 64);
  }

  onResize(event: any) {
    const widthOfGridList = event.target.innerWidth;
    if (widthOfGridList > 1000) {
      this.colMyCoursesNumber = 3;
    } else if (widthOfGridList < 1000 && widthOfGridList > 663) {
      this.colMyCoursesNumber = 2;
    } else {
      this.colMyCoursesNumber = 1;
    }
  }

  onResizeExampleCourses(event: any) {
    const widthOfGridList = event.target.innerWidth;
    if (widthOfGridList > 1000) {
      this.colExampleAppsNumber = 2;
      this.isDisplayGridTitle = true;
    } else if (widthOfGridList < 1000 && widthOfGridList > 663) {
      this.colExampleAppsNumber = 1;
      this.isDisplayGridTitle = false;
    }
  }
}
