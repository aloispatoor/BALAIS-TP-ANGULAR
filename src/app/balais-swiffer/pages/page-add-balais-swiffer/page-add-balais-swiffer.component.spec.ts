import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddBalaisSwifferComponent } from './page-add-balais-swiffer.component';

describe('PageAddBalaisSwifferComponent', () => {
  let component: PageAddBalaisSwifferComponent;
  let fixture: ComponentFixture<PageAddBalaisSwifferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddBalaisSwifferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAddBalaisSwifferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
