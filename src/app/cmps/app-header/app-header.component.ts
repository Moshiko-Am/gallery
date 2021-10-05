import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit {
  constructor(private router: Router) {}
  isHome: string = 'start slideshow';

  goHome() {
    this.router.navigateByUrl('/');
    this.isHome = 'start slideshow';
  }

  startSlideShow() {
    if (this.isHome === 'start slideshow') {
      this.router.navigateByUrl('/picture/1');
      this.isHome = 'stop slideshow';
    } else {
      this.router.navigateByUrl('/home');
      this.isHome = 'start slideshow';
    }
  }

  ngOnInit(): void {}
}
