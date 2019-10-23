import { Component, OnInit } from '@angular/core';
import { CommonsFiles } from '../../tabledata';

@Component({
  selector: 'app-files-common',
  templateUrl: './files-common.component.html',
  styleUrls: ['./files-common.component.scss']
})
export class FilesCommonComponent implements OnInit {

  private commonsFiles = CommonsFiles;

  constructor() { }

  ngOnInit() {
  }

}
