import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibSuva2Component } from './lib-suva2.component';

describe('LibSuva2Component', () => {
  let component: LibSuva2Component;
  let fixture: ComponentFixture<LibSuva2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibSuva2Component]
    });
    fixture = TestBed.createComponent(LibSuva2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
