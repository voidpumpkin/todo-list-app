import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedTodoListComponent } from './archived-todo-list.component';

describe('ArchivedTodoListComponent', () => {
  let component: ArchivedTodoListComponent;
  let fixture: ComponentFixture<ArchivedTodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivedTodoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivedTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
