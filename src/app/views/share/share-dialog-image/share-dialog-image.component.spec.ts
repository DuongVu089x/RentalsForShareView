import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareDialogImageComponent } from './share-dialog-image.component';

describe('ShareDialogImageComponent', () => {
  let component: ShareDialogImageComponent;
  let fixture: ComponentFixture<ShareDialogImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareDialogImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareDialogImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
