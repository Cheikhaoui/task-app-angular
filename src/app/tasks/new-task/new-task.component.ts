import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../../interfaces/new-task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output() create = new EventEmitter<NewTask>();
  @Output() cancel = new EventEmitter();

  title: string = '';
  summary: string = '';
  dueDate: string = '';

  createTask() {
    console.log('Creating task with details:', {
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate
    });
    this.create.emit({"title": this.title, "summary": this.summary, "dueDate": this.dueDate});
  }

  cancelTask() {
    this.cancel.emit();
  }


  


}
