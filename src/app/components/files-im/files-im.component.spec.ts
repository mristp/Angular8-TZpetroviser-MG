import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesIMComponent } from './files-im.component';

describe('FilesIMComponent', () => {
  let component: FilesIMComponent;
  let fixture: ComponentFixture<FilesIMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilesIMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesIMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
