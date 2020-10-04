import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onClickMyCourses() {
    var objDiv = document.getElementById('my-courses'); // Get position of element
    window.scrollTo(0, objDiv.offsetTop - 64); // -64px :  is the height of navbar
  }

  onClickExampleApps() {
    var objDiv = document.getElementById('example-apps');
    window.scrollTo(0, objDiv.offsetTop - 64);
  }
}
