import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditBalaisBrosseComponent } from './page-edit-balais-brosse.component';

describe('PageEditBalaisBrosseComponent', () => {
  let component: PageEditBalaisBrosseComponent;
  let fixture: ComponentFixture<PageEditBalaisBrosseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEditBalaisBrosseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageEditBalaisBrosseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
