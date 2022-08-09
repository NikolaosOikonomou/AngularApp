import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  time = Date.now();
  isCollapsed: boolean = true;
  title = 'myApp';

  toggleCollapse(): void{
    this.isCollapsed = !this.isCollapsed;
  }
}
