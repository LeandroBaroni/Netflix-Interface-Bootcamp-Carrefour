import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleTitleComponent } from './principle-title.component';

describe('PrincipleTitleComponent', () => {
  let component: PrincipleTitleComponent;
  let fixture: ComponentFixture<PrincipleTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipleTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipleTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
