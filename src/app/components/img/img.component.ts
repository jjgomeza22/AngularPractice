import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  public img: string = 'Valor init';

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
  };
  @Input()
  public alt: string = '';

  @Output()
  public loaded = new EventEmitter<string>();

  public imageDefault: string = 'https://www.w3schools.com/howto/img_avatar2.png';
  public counter = 0;
  public counterImage: number | undefined;

  constructor() {
    // beforeRender
    // No async  --once time
    console.log('constructor', 'imgValue => ', this.img);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // beforeRender - during render
    // inputs changes -- many times
    console.log('ngOnChanges', 'imgValue => ', this.img);
    console.log(changes);
  }

  ngOnInit(): void {
    // beforeRender
    // async -fetch --once time
    console.log('ngOnInit', 'imgValue => ', this.img);
    this.counterImage = window.setInterval(() => {
      this.counter += 1;
      console.log('run counter');
    }, 1000);
  }

  ngAfterViewInit(): void {
    // after render
    // handler childs
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    // delete component
    console.log('ngOnDestroy');
    window.clearInterval(this.counterImage);
  }

  public imgError(){
    this.img = '';
  }

  public imgLoaded() {
    console.log('child Loaded');
    this.loaded.emit(this.img);
  }

}
