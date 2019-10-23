import { Component, OnInit } from '@angular/core';

import { HistoryComponent } from '../history/history.component';
import { FilesComponent } from '../files/files.component';
import { LocationComponent } from '../location/location.component';

import { FilesEmptyComponent } from '../files-empty/files-empty.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  private detailsComponent: any = FilesEmptyComponent;
  private selectedButton: string = 'FilesEmptyComponent';
  constructor() { }

  assignComponent(component){
    switch (component) {
      case 'HistoryComponent': this.detailsComponent = HistoryComponent;
                               console.log(component);
                               this.selectedButton='HistoryComponent';
                               return;
      case 'FilesComponent': this.detailsComponent = FilesComponent;
                             console.log(component);
                             this.selectedButton='FilesComponent';
                             return;
      case 'LocationComponent': this.detailsComponent = LocationComponent;
                                console.log(component);
                                this.selectedButton='LocationComponent';
                                return;
      default: this.detailsComponent = FilesEmptyComponent;
    } // switch
  } // assign

  ngOnInit() {  }

}
