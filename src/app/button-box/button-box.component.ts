import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-button-box',
  templateUrl: './button-box.component.html',
  styleUrls: ['./button-box.component.css']
})
export class ButtonBoxComponent {
  @Input() components = [];
  @Input() componentNo = 0;
  @Output() afterClick = new EventEmitter<number[]>();
  buttonArray = [1, 2, 3, 4];

  constructor() {
  }

  /**
   * Action that happens on button click
   * @param buttonNo
   */
  buttonClick(buttonNo: number) {
    let findCompIndex: number = this.components.indexOf(buttonNo);
    if (findCompIndex === -1) {
      // add a component
      this.components.splice(buttonNo - 1, 0, buttonNo);
    } else {
      // remove a component
      this.components.splice(findCompIndex, 1);
    }
    this.afterClick.emit(this.components.sort((a, b) => (a - b)));
  }
}
