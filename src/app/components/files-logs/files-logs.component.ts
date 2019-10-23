import { Component, OnInit } from '@angular/core';
import { LogsFiles } from '../../tabledata';

@Component({
  selector: 'app-files-logs',
  templateUrl: './files-logs.component.html',
  styleUrls: ['./files-logs.component.scss']
})
export class FilesLogsComponent implements OnInit {

  private logsFiles = LogsFiles;

  constructor() { }

  ngOnInit() {
  }

}
