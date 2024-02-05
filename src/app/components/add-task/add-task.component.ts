import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  title = "Add Task";
  text: string = "";
  day: string = "";
  reminder: boolean = false;

  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService, private taskService: TaskService)
  {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value)=> (this.showAddTask = value));
  }

  tasks: Task[] = [];

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

    this.taskService.addTask(newTask).subscribe((task)=> this.tasks.push(task));


    // TODO - emit event
    this.onAddTask.emit(newTask);
    
    this.text = "";
    this.day= "";
    this.reminder = false;
  }
}
