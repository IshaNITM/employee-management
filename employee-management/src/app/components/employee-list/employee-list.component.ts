import { Component, inject,OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, EmployeeFormComponent, ReactiveFormsModule],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  private employeeService = inject(EmployeeService);
  employees$: Observable<Employee[]>;
  selectedEmployee: Employee | undefined;
  isAdding = false;
  isEditing = false;
  defaultAvatar = 'assets/avatars/boys/boy1.png'; // Example default
 
  constructor() {
    this.employees$ = this.employeeService.getEmployees();
    
  }
  ngOnInit() {
    // For debugging only - can be removed in production
    if (typeof window !== 'undefined') {
      console.log('Current localStorage:', 
        localStorage.getItem('employee-management-data'));
    }
  }

  
handleImageError(event: Event) {
  console.log('Image load error, using fallback avatar');
  const img = event.target as HTMLImageElement;
  img.src = this.defaultAvatar;
  img.onerror = null;
}

  onAdd() {
    this.isAdding = true;
    this.selectedEmployee = undefined;
  }

  onEdit(employee: Employee) {
    this.selectedEmployee = employee;
    this.isEditing = true;
  }

  onDelete(id: string) {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(id);
    }
  }

  onCancel() {
    this.isAdding = false;
    this.isEditing = false;
    this.selectedEmployee = undefined;
  }

  onSubmit(employee: Omit<Employee, 'id' | 'avatarUrl'>) {
    if (this.isEditing && this.selectedEmployee) {
      this.employeeService.updateEmployee(this.selectedEmployee.id, employee);
    } else {
      this.employeeService.addEmployee(employee);
    }
    this.onCancel();
  }
  // Add to employee-list.component.ts
clearStorage() {
  if (confirm('⚠️ Warning! This will permanently delete ALL employee data. Continue?')) {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('employee-management-data');
    
      window.location.reload();
    }
  }
}
}