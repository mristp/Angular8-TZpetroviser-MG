import { Component, OnInit } from '@angular/core';
import { PhonecallHistory } from '../../tabledata';
import { Phonecall } from 'src/app/tableclasses';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  private phonecallHistory = PhonecallHistory;

  constructor() { }

  ngOnInit() {
  }

  compareItemDates(a:Phonecall,b:Phonecall):boolean {
    if (a.timeStamp.getDate()	=== b.timeStamp.getDate()	)      
      return false
    else return true;    
  }

}
