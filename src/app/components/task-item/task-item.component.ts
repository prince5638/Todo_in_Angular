import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../Task';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task: Task = {text: "",day: "", reminder: false};
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
 
  faTimes = faTimes;

  // Deleting the task
  onDelete(task: any)
  {
    this.onDeleteTask.emit(task);
  }

  
}
