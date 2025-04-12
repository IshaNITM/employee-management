import { Component } from '@angular/core';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmployeeListComponent],
  template: `
    <app-employee-list></app-employee-list>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
      background: #f5f5f5;
      padding: 20px;
    }
  `]
})
export class AppComponent {
  title = 'employee-management';
}