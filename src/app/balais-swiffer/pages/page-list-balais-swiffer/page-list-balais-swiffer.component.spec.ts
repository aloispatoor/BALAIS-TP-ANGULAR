import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListBalaisSwifferComponent } from './page-list-balais-swiffer.component';

describe('PageListBalaisSwifferComponent', () => {
  let component: PageListBalaisSwifferComponent;
  let fixture: ComponentFixture<PageListBalaisSwifferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListBalaisSwifferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListBalaisSwifferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
