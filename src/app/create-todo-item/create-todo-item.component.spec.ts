import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTodoItemComponent } from './create-todo-item.component';

describe('CreateTodoItemComponent', () => {
  let component: CreateTodoItemComponent;
  let fixture: ComponentFixture<CreateTodoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTodoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
