# CityCare — Civic Issue Reporting Portal

## Overview
This is a fullstack project aimed at providing a civic issue reporting platform. Citizens can report issues, and authorities can track and manage them efficiently.  

### Features Implemented
- **Frontend:** React application with:
  - Landing page showing the map of reported issues.
  - User panel for submitting issues with photo and location.
  - Admin panel for viewing submitted issues and managing them.
- **Backend:** Node.js + Express server with:
  - Authentication (Register/Login).
  - MongoDB database connection for storing users and issues.
  - API routes for handling user and issue data.
- **Database:** MongoDB Atlas for storing user and issue information.

### What I Accomplished
- Set up both frontend and backend structure.
- Implemented user registration and login.
- Created forms for issue submission.
- Integrated MongoDB connection for data storage.
- Added basic map functionality for visualizing issue locations.
- Designed components and layout using React and Material-UI.

### Challenges / Issues
- Currently, some functionalities are not fully working:
  - Login/Register may fail if database is not seeded properly.
  - User/Admin panels require further backend integration for dynamic issue fetching and submission.
  - Some components like AI chatbot were not added.
- Some styling adjustments and complete feature integration are pending due to time constraints.

### Notes
- The project is a **work in progress** and demonstrates the core structure and effort put into the hackathon.
- All code pushed is functional in structure but may require database setup (`MongoDB URI` in `.env`) to fully work.

