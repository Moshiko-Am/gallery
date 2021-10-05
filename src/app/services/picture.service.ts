import { Injectable } from '@angular/core';

var data = require('../../data/data.json');

@Injectable({
  providedIn: 'root',
})
export class PictureService {
  pictures: any = data;

  getPictures() {
    return this.pictures;
  }

  getPictureById(id: number) {
    return this.pictures.find((picture: any) => picture.id === id);
  }

  constructor() {}
}
