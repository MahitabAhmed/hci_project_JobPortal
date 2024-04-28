import { Component, OnInit } from '@angular/core';
import { Task } from './../models/Task';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent implements OnInit{
  tasks_list:Task[] = [];
  edit_task_idx:number = -1;
  constructor() {}
    newTask: Task = new Task('', new Date(), '', false); 
    addTask(): void {
      this.tasks_list.push(this.newTask);
  
      // reset the new task object for the next task
      this.newTask = new Task('', new Date(), '', false);
    }
  ngOnInit(): void {
    var task1 = new Task(
      'Complete assignment 1',
      new Date(2024, 3, 10), // April 10, 2024
      'Finish the project assignment 1 by the due date.',
      false
    );

    var task2 = new Task(
      'Complete assignment 2',
      new Date(2024, 3, 15),
      'Finish the project assignment 2 by the due date.',
      true
    );

    this.tasks_list.push(task1, task2);
  }
  
  toggleEditMode(index:number): void {
    this.edit_task_idx = this.edit_task_idx === index ? -1 : index;

  }
  isTaskEditable(index: number): boolean {
  return this.edit_task_idx === index;
}
  saveTaskChanges(task:Task, idx:number):void{
    this.tasks_list[idx] = task;
    this.edit_task_idx = -1; // exit edit mode
  }

  deleteTask(task: Task, index:number): void {
    this.tasks_list.splice(index,1);
  }
}
