import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() text:string = "";
  @Input() color:string = "";

  // Creating an custome event named as btnClick by using the EventEmmiter cunstructore of the class EventEmmiter.
  @Output() btnClick = new EventEmitter();

  onClick(): void{
    // You can emit an event by calling the emit method on the EventEmitter:==> It means the event is now usable
    this.btnClick.emit();
  }
  
}
