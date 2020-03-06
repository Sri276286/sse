import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-operative-challenge';
  inpArray: Array<number> = [1, 2, 3, 4];

  /**
   * Reload
   * @param componentArray 
   */
  reload(componentArray: Array<number>) {
    this.inpArray = [...componentArray];
  }

}
