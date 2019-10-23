import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesMyComponent } from './files-my.component';

describe('FilesMyComponent', () => {
  let component: FilesMyComponent;
  let fixture: ComponentFixture<FilesMyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilesMyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
