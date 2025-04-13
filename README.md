\
Employee Management System - Angular Application
Overview
This is a web application built with Angular for managing employee details within a company. The application allows you to perform CRUD (Create, Read, Update, Delete) operations on employee records with a clean, responsive interface.

Features
Add new employees with all required details

Edit existing employee information

View employee details in a clean list view

Delete employees with confirmation dialog

Random avatar assignment for each employee

Local storage persistence - data survives page refreshes

Responsive design works on different screen sizes

Form validation for all required fields

Employee Data Structure
Each employee record contains:

Name (required)

Gender (required)

Company Name (required)

Email (required, validated format)

Contact Number (required, 10 digits)

Designation (required)

Automatically assigned avatar image on the basis of gender

Unique ID

Technical Details
Built with Angular (standalone components)

Reactive Forms with validation

LocalStorage for data persistence

Custom avatar management system

Clean, modular code structure

No external CSS frameworks used (pure SCSS)

https://github.com/user-attachments/assets/48b7b11e-1c41-4413-bfc3-9ef99e21f190
Installation
Clone the repository
git clone https://github.com/your-username/employee-management.git
Install dependencies:
npm install
Run the development server:
ng serve
Open your browser at http://localhost:4200

Testing
The application includes basic unit tests. Run them with:
![image](https://github.com/user-attachments/assets/863fcc9b-1e67-4cfc-a63c-17a6dabcbce3)
![image](https://github.com/user-attachments/assets/853775fe-90f5-414a-93fd-ba1ba8cc09ae)


Deploy
https://ishanitm.github.io/employee-management/
Code Quality Highlights
DRY Principle: Reusable components and services

Type Safety: Strong typing throughout the application

Separation of Concerns: Clear division between components, services, and models

Error Handling: Graceful fallbacks for avatar loading

Performance: Observable-based data flow with BehaviorSubject


