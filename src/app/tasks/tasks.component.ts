import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from './../dummy-tasks';
import { User } from '../interfaces/user.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from '../interfaces/new-task.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
@Input() user!: User;
newTask= false;

get tasks() {
  return dummyTasks.filter(task => task.userId === this.user.id);
}

deleteTask(taskId:any) : void {
  console.log('Deleting task with ID:', taskId);
  const index = dummyTasks.findIndex(task => task.id == taskId);
  console.log('Found index:', index);
  if(index !== -1) {
    console.log('Deleting task at index:', index);
    dummyTasks.splice(index,1);
  }
}

addTask() {
  this.newTask = true;
}

create(task:NewTask) {
  const newTaskId = (dummyTasks.length + 1).toString();
  const taskToAdd = {
    id: newTaskId,
    userId: this.user.id,
    title: task.title,
    summary: task.summary,
    dueDate: task.dueDate,
    completed: false
  };
  dummyTasks.unshift(taskToAdd);
  this.newTask = false;
}

cancel(){
  this.newTask = false;
}


}
