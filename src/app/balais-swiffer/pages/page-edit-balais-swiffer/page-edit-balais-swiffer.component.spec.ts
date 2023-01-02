import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditBalaisSwifferComponent } from './page-edit-balais-swiffer.component';

describe('PageEditBalaisSwifferComponent', () => {
  let component: PageEditBalaisSwifferComponent;
  let fixture: ComponentFixture<PageEditBalaisSwifferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEditBalaisSwifferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageEditBalaisSwifferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
