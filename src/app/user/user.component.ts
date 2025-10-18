import { Component, computed, EventEmitter, Input, Output, signal } from '@angular/core';
import { User } from '../interfaces/user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
})
export class UserComponent {
  
  @Input({required: true}) user!: User;
  @Input({required: true}) isSelected!: boolean;
  @Output() select  = new EventEmitter<string>();

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  selectUser(event: Event) {
    this.select.emit(this.user.id);
  }

}
