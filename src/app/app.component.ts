import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notrobots';

  onTitleClicked($event: string) {
    this.title = $event + this.title;
  }
}
