import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imageParent = 'https://www.w3schools.com/howto/img_avatar.png';

  public onLoaded(img: string) {
    console.log("Parent loaded", img);
  }
}
