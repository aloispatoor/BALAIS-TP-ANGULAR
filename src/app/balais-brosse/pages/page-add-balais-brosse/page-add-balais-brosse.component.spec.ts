import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddBalaisBrosseComponent } from './page-add-balais-brosse.component';

describe('PageAddBalaisBrosseComponent', () => {
  let component: PageAddBalaisBrosseComponent;
  let fixture: ComponentFixture<PageAddBalaisBrosseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddBalaisBrosseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAddBalaisBrosseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
