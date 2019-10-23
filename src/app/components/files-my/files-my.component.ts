import { Component, OnInit } from '@angular/core';
import { MysFiles } from '../../tabledata';

@Component({
  selector: 'app-files-my',
  templateUrl: './files-my.component.html',
  styleUrls: ['./files-my.component.scss']
})
export class FilesMyComponent implements OnInit {

  private mysFiles = MysFiles;

  constructor() { }

  ngOnInit() {
  }

}
