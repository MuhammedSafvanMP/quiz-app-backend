 Quiz Application


A full-stack Quiz Application that allows users to attempt quizzes, track their progress, and view results. The project is divided into two main parts: the Frontend and the Backend.


Features

User-friendly interface for taking quizzes.

Responsive design for seamless use across devices.

Real-time quiz updates and tracking.

Backend API for quiz management, scoring, and tracking user progress.



Technologies Used


Backend:

Node.js: For the server runtime environment.

Express.js: For creating RESTful APIs.

MongoDB: For storing quizzes and user progress.

Mongoose: For schema-based interaction with MongoDB.


Backend

The backend is built using Node.js and Express.js, with MongoDB as the database.

Backend Setup

Clone the repository:

git clone : https://github.com/MuhammedSafvanMP/quiz-app-backend.git
cd quiz-app-backend

Install dependencies:

npm install

Set up environment variables:
Create a .env file in the root directory and add the following:

PORT=3456
MONGO_URI=<your-mongodb-connection-string>

Start the server:

npm start or npm run dev

Access the API at:

http://localhost:3456/api

Backend Key Features

Quiz Management: Endpoints to fetch, add, and update quizzes.

User Progress: Tracks and stores user responses and scores.

RESTful API: Designed for efficient communication with the frontend.

Database Integration: Utilizes MongoDB for data storage and retrieval.

Important Endpoints:

ADMIN

GET /api/admin/quizzes: Fetches all available quizzes.

POST /api/admin/quizzes: Adds a new quiz to the database.


USER

GET /api/users/quizzes: Fetches all available quizzes.

GET /api/users/quizzes/:id: Fetches a specific quiz by ID.

PUT /api/users/quizzes/:id: Updates an existing quiz.
