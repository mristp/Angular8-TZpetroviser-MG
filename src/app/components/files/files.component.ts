import { Component, OnInit } from '@angular/core';

import { FilesMyComponent } from '../files-my/files-my.component';
import { FilesCommonComponent } from '../files-common/files-common.component';
import { FilesIMComponent } from '../files-im/files-im.component';
import { FilesLogsComponent } from '../files-logs/files-logs.component';
import { FilesEmptyComponent } from '../files-empty/files-empty.component';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {

  private filedetail: any = FilesEmptyComponent;
  
  private selectedButton: string = 'FilesEmptyComponent';

  constructor() { }

  assignComponent(component) {
    switch (component) {
      case 'FilesMyComponent': this.filedetail = FilesMyComponent;
                               console.log(component);
                               this.selectedButton = 'FilesMyComponent';
                               return;
      case 'FilesCommonComponent': this.filedetail = FilesCommonComponent;
                                   console.log(component);
                                   this.selectedButton = 'FilesCommonComponent';
                                   return;
      case 'FilesIMComponent': this.filedetail = FilesIMComponent;
                               console.log(component);
                               this.selectedButton = 'FilesIMComponent';
                               return;
      case 'FilesLogsComponent': this.filedetail = FilesLogsComponent;
                                 console.log(component);
                                 this.selectedButton = 'FilesLogsComponent';
                                 return;
      default: this.filedetail = FilesEmptyComponent;
    }// end switchs
  }// end assign

  ngOnInit() {
  }

  onSelect(button: string): void {
    this.selectedButton = button;
    // console.log('filedetail: ', this.filedetail);
  }
}
