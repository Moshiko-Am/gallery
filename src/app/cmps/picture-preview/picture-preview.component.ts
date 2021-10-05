import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'picture-preview',
  templateUrl: './picture-preview.component.html',
  styleUrls: ['./picture-preview.component.scss'],
})
export class PicturePreviewComponent implements OnInit {
  @Input() pictureData: any;
  constructor() {}

  ngOnInit(): void {}
}
