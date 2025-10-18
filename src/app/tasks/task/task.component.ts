import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../interfaces/task.model';
import { CardComponent } from "../../shared/card/card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [CardComponent,CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) task!:Task
  @Output() complete = new EventEmitter<string>();

  onCompleteTask(){
    console.log('Task completed:', this.task.id);
    this.complete.emit(this.task.id);
  }

  

}
