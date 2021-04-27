import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})

export class AddTodoComponent implements OnInit {
  todo: any ;
  order:any;
  constructor( private todoService: TodosService) { }

  onTodoChange(event: any) {
    this.todo = event.target.value;
  }
  onOrderChange(event: any) {
    this.order = event.target.value;
  }
  addTodo() {
    const data = {
     todo:this.todo,
     order:this.order,
     
    }
    this.todoService.addTodo(data)
      .subscribe(
        resp => {
          debugger;
          alert("Todo added succesfully")
        },
        error => {

        }

      )
  }

  ngOnInit(): void {
  }

}
