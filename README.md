# Learning Platform

## Overview
The Learning Platform is a comprehensive online education system designed to facilitate learning through various features such as course management, quizzes, user authentication, and real-time communication. This platform consists of three main components: a backend API, a frontend web application, and a mobile application.

## Features
- **User Authentication**: Secure login and registration for users with different roles (Administrator, Teacher, Student).
- **Course Management**: Teachers can create, update, and manage courses, including adding modules and resources.
- **Interactive Quizzes**: Students can take quizzes with automatic grading and feedback.
- **Real-time Communication**: Integrated video conferencing for live classes and discussions.
- **Notifications**: Users receive updates about new courses, quizzes, and messages.
- **Gamification**: Students earn points and badges for completing courses and quizzes.

## Project Structure
```
learning-platform
├── backend
│   ├── src
│   ├── package.json
│   └── tsconfig.json
├── frontend
│   ├── src
│   ├── package.json
│   └── tsconfig.json
├── mobile
│   ├── src
│   ├── package.json
│   └── app.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js
- npm
- TypeScript

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to each component (backend, frontend, mobile) and install dependencies:
   ```
   cd backend
   npm install
   cd ../frontend
   npm install
   cd ../mobile
   npm install
   ```

### Running the Application
- **Backend**: 
   ```
   cd backend
   npm start
   ```
- **Frontend**: 
   ```
   cd frontend
   npm start
   ```
- **Mobile**: 
   ```
   cd mobile
   npm start
   ```

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.