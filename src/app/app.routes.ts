import { Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { AboutComponent } from './components/about/about.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { HomeComponent } from './RouterFeatureComponents/home/home.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'add-task', component: AddTaskComponent},
    {path: 'task-list', component: TasksComponent},
    {path: 'about', component: AboutComponent}
];
