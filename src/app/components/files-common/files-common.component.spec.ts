import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesCommonComponent } from './files-common.component';

describe('FilesCommonComponent', () => {
  let component: FilesCommonComponent;
  let fixture: ComponentFixture<FilesCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilesCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
