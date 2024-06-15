import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoPage } from './to-do-page.component';

describe('Tab1Page', () => {
  let component: ToDoPage;
  let fixture: ComponentFixture<ToDoPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(ToDoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
