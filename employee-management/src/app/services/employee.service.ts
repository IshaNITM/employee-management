import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private employees: Employee[] = [];
  private employeesSubject = new BehaviorSubject<Employee[]>([]);


  private avatarBasePath = 'assets/avatars/';

  private avatars = [
    { name: 'avatar', ext: '.jpg' },
    {name: 'avatar1',ext: '.png'},
    { name: 'avatar2', ext: '.png' },
    { name: 'avatar3', ext: '.png' },
    { name: 'avatar4', ext: '.png' },
    { name: 'avatar5', ext: '.png' },
    { name: 'avatar6', ext: '.png'},
    {name: 'avatar7',ext: '.avif'},
    {name: 'avatar8',ext: '.avif'},
    {name: 'avatar9',ext: '.avif'},
  ];

  constructor() {
    // Initialize with sample data
    this.addEmployee({
      name: 'John Doe',
      companyName: 'Tech Corp',
      email: 'john@tech.com',
      contactNo: '1234567890',
      designation: 'Developer'
    });
  }

  getEmployees() {
    return this.employeesSubject.asObservable();
  }

  addEmployee(employee: Omit<Employee, 'id' | 'avatarUrl'>) {
    const newEmployee: Employee = {
      ...employee,
      id: this.generateId(),
      avatarUrl: this.getRandomAvatar()
    };
    this.employees.push(newEmployee);
    this.employeesSubject.next([...this.employees]);
  }

  updateEmployee(id: string, updates: Partial<Employee>) {
    const index = this.employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
      this.employees[index] = { ...this.employees[index], ...updates };
      this.employeesSubject.next([...this.employees]);
    }
  }

  deleteEmployee(id: string) {
    this.employees = this.employees.filter(emp => emp.id !== id);
    this.employeesSubject.next([...this.employees]);
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  private getRandomAvatar(): string {
    const avatarCount = 5; // Number of avatar images you have
    const randomNum = Math.floor(Math.random() * avatarCount) + 1;
    return `assets/avatars/avatar${randomNum}.png`;
  }
}