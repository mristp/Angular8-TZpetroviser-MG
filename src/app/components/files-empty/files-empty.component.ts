import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-files-empty',
  templateUrl: './files-empty.component.html',
  styleUrls: ['./files-empty.component.scss']
})
export class FilesEmptyComponent implements OnInit {

  constructor() { }

  ngOnInit() {    
  }

  /*arrayThree(n: number, startFrom: number): number[] {
    return [...Array(n).keys()].map(i => i + startFrom);
  }*/
}
