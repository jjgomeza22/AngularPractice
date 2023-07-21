import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input()
  public img: string = 'Valor init';

  @Output()
  public loaded = new EventEmitter<string>();

  public imageDefault: string = 'https://www.w3schools.com/howto/img_avatar2.png';
  constructor() { }

  ngOnInit(): void {
  }

  public imgError(){
    this.img = '';
  }

  public imgLoaded() {
    console.log('child Loaded');
    this.loaded.emit(this.img);
  }

}
