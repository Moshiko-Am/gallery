import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'picture-view',
  templateUrl: './picture-view.component.html',
  styleUrls: ['./picture-view.component.scss'],
})
export class PictureViewComponent implements OnInit {
  @Input() picture: any = null;
  @Output() close = new EventEmitter<boolean>();

  constructor() {}

  onClose() {
    this.close.emit();
  }

  ngOnInit(): void {}
}
