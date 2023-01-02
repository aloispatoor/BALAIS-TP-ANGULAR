import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListBalaisBrosseComponent } from './page-list-balais-brosse.component';

describe('PageListBalaisBrosseComponent', () => {
  let component: PageListBalaisBrosseComponent;
  let fixture: ComponentFixture<PageListBalaisBrosseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListBalaisBrosseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListBalaisBrosseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
