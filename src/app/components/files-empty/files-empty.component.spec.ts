import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesEmptyComponent } from './files-empty.component';

describe('FilesEmptyComponent', () => {
  let component: FilesEmptyComponent;
  let fixture: ComponentFixture<FilesEmptyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilesEmptyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
