import { Component, OnInit } from '@angular/core';
import { PictureService } from 'src/app/services/picture.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  pictures: any = this.pictureService.getPictures();

  constructor(private pictureService: PictureService) {}

  ngOnInit(): void {}
}
