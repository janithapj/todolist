import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { DisplayTodoComponent } from './display-todo/display-todo.component';

const routes: Routes = [
  {path:'addtodo' , component:AddTodoComponent},
  {path:'viewtodo' , component:DisplayTodoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
