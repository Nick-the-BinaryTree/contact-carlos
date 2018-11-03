import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreContactFormComponent } from './pre-contact-form.component';

describe('PreContactFormComponent', () => {
  let component: PreContactFormComponent;
  let fixture: ComponentFixture<PreContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreContactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
