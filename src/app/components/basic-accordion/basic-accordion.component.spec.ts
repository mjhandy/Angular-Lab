import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAccordionComponent } from './basic-accordion.component';

describe('BasicAccordionComponent', () => {
  let component: BasicAccordionComponent;
  let fixture: ComponentFixture<BasicAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
