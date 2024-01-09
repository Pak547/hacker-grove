# hacker-grove


## Description

Hackergrove is a habit-tracking web application specifically designed for coding enthusiasts. Utilizing the Model-View-Controller (MVC) architecture and Object-Relational Mapping (ORM), Hackergrove helps you keep track of your coding projects, programming languages learned, and the number of hours committed to coding. With a focus on user engagement, the application introduces a gamified element where your coding journey is represented by the growth of a virtual sapling into a tree, watered daily as you check in.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Tests](#tests)

## Feature

Project Tracking: Log and manage your coding projects effortlessly. Keep track of project details, deadlines, and progress.

Language Learning: Record the programming languages you've learned and gauge your proficiency over time.

Hourly Commitment: Monitor and visualize the time you dedicate to coding, fostering productivity and accountability.

Gamified Experience: Watch your virtual sapling grow into a tree as you consistently check in, creating a visually rewarding experience for your coding journey.

Handlebars Templating: Utilizing Handlebars for dynamic HTML generation, ensuring a seamless and responsive user interface.

SQL Database: Store and retrieve user data efficiently with the power of SQL databases.

Nodemailer Integration: Stay connected with email notifications through Nodemailer, receiving updates and reminders to nurture your coding habit. Also for users who've forgotten their password or email.


## Installation

Clone the repository: git clone https://github.com/Pak547/hacker-grove.git 
Navigate to the project directory: cd hackergrove
Install dependencies: npm install 
Set up your MySQL database: Create a new database and configure the connection in config/connection.js. 
Configure Nodemailer: Update the email configurations in connection/api/forgotpasswordRoute.js 
Run the application: npm start 
Open your browser and visit http://localhost:3000 to access Hackergrove.

## Team
Hackergrove is developed and maintained by a passionate team of three individuals:

Pakapong Mongkol
Elise Stankus
Bryan Chia

## Tests

Seeds.js and other mock data can be utilized

## License 

This project is licensed under the MIT License.
