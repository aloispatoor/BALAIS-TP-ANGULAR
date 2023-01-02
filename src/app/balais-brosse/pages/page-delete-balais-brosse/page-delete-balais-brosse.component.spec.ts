import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDeleteBalaisBrosseComponent } from './page-delete-balais-brosse.component';

describe('PageDeleteBalaisBrosseComponent', () => {
  let component: PageDeleteBalaisBrosseComponent;
  let fixture: ComponentFixture<PageDeleteBalaisBrosseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDeleteBalaisBrosseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDeleteBalaisBrosseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
