import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesLogsComponent } from './files-logs.component';

describe('FilesLogsComponent', () => {
  let component: FilesLogsComponent;
  let fixture: ComponentFixture<FilesLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilesLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
