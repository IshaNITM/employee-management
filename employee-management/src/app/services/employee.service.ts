import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private employees: Employee[] = [];
  private employeesSubject = new BehaviorSubject<Employee[]>([]);

  private avatars = {
    male: [
      { name: 'boys/boy1', ext: '.png' },
      { name: 'boys/boy2', ext: '.avif' },
      { name: 'boys/boy3', ext: '.avif' },
      { name: 'boys/boy4', ext: '.avif' },
      { name: 'boys/boy5', ext: '.png' }
    ],
    female: [
      { name: 'girls/girl1', ext: '.jpg' },
      { name: 'girls/girl2', ext: '.png' },
      { name: 'girls/girl3', ext: '.avif' },
      { name: 'girls/girl4', ext: '.png' }
      {name:'girls/girl5',ext:'.png'}
    ]
  };

  constructor() {
    // Initialize with sample data
    this.addEmployee({
      name: 'John Doe',
      companyName: 'Tech Corp',
      email: 'john@tech.com',
      contactNo: '1234567890',
      designation: 'Developer',
      gender: 'male'
    });
  }

  getEmployees() {
    return this.employeesSubject.asObservable();
  }

  addEmployee(employee: Omit<Employee, 'id' | 'avatarUrl'>) {
    const gender = employee.gender || 'male'; // Default to male if not specified
    const avatarUrl = this.getRandomAvatar(gender); // Pass gender to the function
    
    const newEmployee: Employee = {
      ...employee,
      id: this.generateId(),
      avatarUrl: avatarUrl
    };
    
    this.employees.push(newEmployee);
    this.employeesSubject.next([...this.employees]);
    return newEmployee;
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

  private getRandomAvatar(gender: 'male' | 'female'): string {
    try {
      const genderAvatars = this.avatars[gender];
      if (!genderAvatars || genderAvatars.length === 0) {
        console.error(`No avatars found for gender: ${gender}`);
        return this.getDefaultAvatar(gender);
      }
      
      const randomIndex = Math.floor(Math.random() * genderAvatars.length);
      const randomAvatar = genderAvatars[randomIndex];
      const avatarPath = `assets/avatars/${randomAvatar.name}${randomAvatar.ext}`;
      
      console.log(`Generated avatar path: ${avatarPath}`);
      return avatarPath;
    } catch (error) {
      console.error('Error generating random avatar:', error);
      return this.getDefaultAvatar(gender);
    }
  }

  private getDefaultAvatar(gender: 'male' | 'female'): string {
    return gender === 'male' 
      ? 'assets/avatars/boys/boy1.png' 
      : 'assets/avatars/girls/girl1.jpg';
  }
}