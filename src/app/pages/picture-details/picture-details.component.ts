import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PictureService } from 'src/app/services/picture.service';

@Component({
  selector: 'picture-details',
  templateUrl: './picture-details.component.html',
  styleUrls: ['./picture-details.component.scss'],
})
export class PictureDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pictureService: PictureService
  ) {}
  selectedPicture: any = null;
  selectedPictureId = null;
  isShow: boolean = false;

  getPicture() {
    this.route.params.subscribe((params) => {
      const { id } = params;
      this.selectedPicture = this.pictureService.getPictureById(+id);
    });
  }

  showPicture() {
    this.isShow = !this.isShow;
  }

  changePicture(val: number) {
    const { id } = this.route.snapshot.params;
    let nextId = val + +id;
    if (nextId > 15) {
      nextId = 1;
    } else if (nextId < 1) {
      nextId = 15;
    }
    this.router.navigateByUrl(`/picture/${nextId}`);
  }

  ngOnInit(): void {
    this.getPicture();
  }
}
