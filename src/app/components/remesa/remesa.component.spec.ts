import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemesaComponent } from './remesa.component';

describe('RemesaComponent', () => {
  let component: RemesaComponent;
  let fixture: ComponentFixture<RemesaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemesaComponent]
    });
    fixture = TestBed.createComponent(RemesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
