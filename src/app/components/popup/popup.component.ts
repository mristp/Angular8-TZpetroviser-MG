import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'; 

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent{
  private show = false;

  @Input() specName: string;

  curX: number;
  curY: number;
  curZIndex: number;

  constructor() { }

  appear(numX,numY) {    
    this.setPos(numX,numY);
    this.show = true;
  }

  disappear() {
    this.show = false;
  }

  setPos(numX,numY) {        
    this.curX = numX;
    this.curY = numY;
    this.curZIndex = 10;        
  }

} 