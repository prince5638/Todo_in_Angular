import { Component } from '@angular/core';

// component imports only
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title: string = "Task Tracker";
  
  toggleAddTask(): void{
    // console.log("btnClick => ToggleAddTask function called for btnClick custome event, on clicking an ADD button");

    console.log("toggle!!!");
  }
}
