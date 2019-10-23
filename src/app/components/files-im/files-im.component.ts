import { Component, OnInit } from '@angular/core';
import { IMsFiles } from '../../tabledata';

@Component({
  selector: 'app-files-im',
  templateUrl: './files-im.component.html',
  styleUrls: ['./files-im.component.scss']
})
export class FilesIMComponent implements OnInit {

  private imsFiles = IMsFiles;

  constructor() { }

  ngOnInit() {
  }

}
