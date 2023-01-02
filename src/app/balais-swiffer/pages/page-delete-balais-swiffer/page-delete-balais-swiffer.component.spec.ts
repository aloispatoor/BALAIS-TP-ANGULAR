import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDeleteBalaisSwifferComponent } from './page-delete-balais-swiffer.component';

describe('PageDeleteBalaisSwifferComponent', () => {
  let component: PageDeleteBalaisSwifferComponent;
  let fixture: ComponentFixture<PageDeleteBalaisSwifferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDeleteBalaisSwifferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDeleteBalaisSwifferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
