import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  text: string = "";
  day: string = "";
  reminder: boolean = false;

  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService)
  {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value)=> (this.showAddTask = value));
  }

  onSubmit()
  {
    if(!this.text)
    {
      alert('Please add a task!');
      return ;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    // TODO - emit event
    this.onAddTask.emit(newTask);
    
    this.text = "";
    this.day= "";
    this.reminder = false;
  }
}
