import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllboooksComponent } from './view-allboooks.component';

describe('ViewAllboooksComponent', () => {
  let component: ViewAllboooksComponent;
  let fixture: ComponentFixture<ViewAllboooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAllboooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAllboooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
