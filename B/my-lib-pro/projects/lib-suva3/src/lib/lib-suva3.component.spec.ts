import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibSuva3Component } from './lib-suva3.component';

describe('LibSuva3Component', () => {
  let component: LibSuva3Component;
  let fixture: ComponentFixture<LibSuva3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibSuva3Component],
    });
    fixture = TestBed.createComponent(LibSuva3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
