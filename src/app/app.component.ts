import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './DUMMY_USER';
import { TasksComponent } from "./tasks/tasks.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, AppComponent, UserComponent, TasksComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS
  title = 'first-angular-app';
  id = "0";

get selectedUser(){
  return this.users.find(user => user.id === this.id);
}  

onSelectUser(userId: string) {  
 this.id = userId;
}

}
