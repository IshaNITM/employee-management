👩‍💼 Employee Management System - Angular Application
Welcome to the Employee Management System! 🚀
This project is built using Angular and lets you manage your company's employee records with ease. From adding new team members to editing and deleting existing ones, this app does it all — beautifully and efficiently. ✨

🔍 Overview
This is a full-fledged CRUD (Create, Read, Update, Delete) web app that allows you to:

✅ Add new employees

📝 Edit employee information

👀 View employees in a clean, organized list

❌ Delete employees (with confirmation prompts)

🧑‍🎤 Assign random avatars based on gender

💾 Save everything in LocalStorage for persistence

📱 Access on all screen sizes (Responsive UI)

🛡️ Form validation for accuracy and consistency

📋 Employee Data Structure
Each employee entry includes:

👤 Name (required)

🚻 Gender (required)

🏢 Company Name (required)

📧 Email (valid format required)

📞 Contact Number (10-digit format required)

💼 Designation (required)

🖼️ Avatar (randomly assigned based on gender)

🆔 Unique ID

🛠️ Tech Stack
🌐 Angular (with standalone components)

💡 Reactive Forms with built-in validation

💽 LocalStorage for data persistence

🎨 Pure SCSS (No external frameworks!)

🖼️ Custom Avatar Logic (based on gender)

🧱 Modular & Clean Codebase

⚙️ Installation
Follow these steps to run the app locally:


# Clone the repository
git clone https://github.com/IshaNITM/employee-management.git

# Move into the project directory
cd employee-management

# Install dependencies
npm install

# Run the application
ng serve
Now visit 🌐 http://localhost:4200 in your browser to use the app.

🧪 Testing
Basic unit tests are included. To run tests:

ng test
🚀 Live Deployment
You can check the live app here 👉
🔗 https://ishanitm.github.io/employee-management

🧠 Code Quality Highlights
✨ DRY Principle — Reusable components and services

🔐 Strong Typing with TypeScript

🧹 Separation of Concerns — Logical component/service separation

⚠️ Graceful Error Handling — Especially for avatar loading

⚡ Optimized Performance — Using BehaviorSubject for data flow

📦 Additional Enhancements (Bonus Points!)
🎯 Random avatars are re-generated only based on gender, even on page refresh

💥 "Clear All" button to delete all employees except default one

🧩 Easy to extend with filters, search, and more CRUD fields

🧠 State retained using LocalStorage — even after refresh!
![image](https://github.com/user-attachments/assets/863fcc9b-1e67-4cfc-a63c-17a6dabcbce3)
![image](https://github.com/user-attachments/assets/853775fe-90f5-414a-93fd-ba1ba8cc09ae)



Code Quality Highlights
DRY Principle: Reusable components and services

Type Safety: Strong typing throughout the application

Separation of Concerns: Clear division between components, services, and models

Error Handling: Graceful fallbacks for avatar loading

Performance: Observable-based data flow with BehaviorSubject


