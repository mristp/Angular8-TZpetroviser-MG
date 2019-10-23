import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HistoryComponent } from './components/history/history.component';
import { FilesComponent } from './components/files/files.component';
import { LocationComponent } from './components/location/location.component';
import { RegistComponent } from './components/regist/regist.component';
import { MainComponent } from './components/main/main.component';
import { FilesEmptyComponent } from './components/files-empty/files-empty.component';
import { FilesMyComponent } from './components/files-my/files-my.component';
import { FilesCommonComponent } from './components/files-common/files-common.component';
import { FilesIMComponent } from './components/files-im/files-im.component';
import { FilesLogsComponent } from './components/files-logs/files-logs.component';
import { PopupComponent } from './components/popup/popup.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/rega', pathMatch: 'full' },
  {path: 'rega', component:RegistComponent},
  {path: 'main', component:MainComponent},
  ]

@NgModule({
  declarations: [
    AppComponent,
    
    RegistComponent,
    MainComponent,
    
    HistoryComponent,
    FilesComponent,
    LocationComponent,
        
    FilesEmptyComponent,
    FilesMyComponent,
    FilesCommonComponent,
    FilesIMComponent,
    FilesLogsComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
  ,entryComponents: [HistoryComponent, FilesComponent, LocationComponent,
    FilesEmptyComponent, FilesMyComponent, FilesCommonComponent, FilesIMComponent, FilesLogsComponent]
    
})
export class AppModule { }
