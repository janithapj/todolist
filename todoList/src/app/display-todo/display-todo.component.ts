import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-display-todo',
  templateUrl: './display-todo.component.html',
  styleUrls: ['./display-todo.component.css']
})

export class DisplayTodoComponent implements OnInit {
 curr_index:any;
  todolist: any;
  todo:any;
  order:any;
  constructor(private todoService: TodosService) { }

  ngOnInit(): void {
    this.todoService.getTodos()
      .subscribe(
        resp => {
          debugger;

          this.todolist = resp;
        },
        error => {

        }

      )
  }
  
  onDrop(event: CdkDragDrop<string[]>) {
    debugger;
    var data = this.todolist.data;
    moveItemInArray(data, event.previousIndex, event.currentIndex);
    this.curr_index=Number(event.currentIndex)+1;
  }
 
}




