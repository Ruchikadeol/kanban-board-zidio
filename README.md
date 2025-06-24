# 📋 Kanban Board Application

A full-stack Kanban Board application built with React (frontend) and Express.js (backend) that allows users to manage tasks through a drag-and-drop interface with user authentication.

## 🏗️ Architecture Overview

This project consists of two main components:
- **Client**: React-based frontend with TypeScript and TailwindCSS
- **Server**: Express.js backend with PostgreSQL database and JWT authentication

## 🚀 Technology Stack

### Frontend (Client)
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Drag & Drop**: @dnd-kit
- **State Management**: React Context API
- **HTTP Client**: Axios
- **Routing**: React Router DOM
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Notifications**: Sonner

### Backend (Server)
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **Database**: PostgreSQL
- **ORM**: Sequelize
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcrypt
- **Validation**: class-validator
- **Security**: Helmet, CORS, HPP
- **Environment**: dotenv
- **Development**: Nodemon, SWC

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **bun** package manager
- **PostgreSQL** (version 12 or higher)
- **Git**

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Ruchikadeol/kanban-board-zidio.git
cd kanban-board-zidio
```

### 2. Database Setup

#### Install and Start PostgreSQL
```bash
# On macOS with Homebrew
brew install postgresql
brew services start postgresql

# On Ubuntu/Debian
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql

# On Windows
# Download and install from https://www.postgresql.org/download/windows/
```

#### Create Database and User
```bash
# Access PostgreSQL
psql -U postgres

# Create database
CREATE DATABASE kanban_board;

# Create user (optional)
CREATE USER kanban_user WITH ENCRYPTED PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE kanban_board TO kanban_user;

# Exit PostgreSQL
\q
```

### 3. Backend Setup

#### Install Dependencies
```bash
cd server
npm install
```

#### Environment Configuration
Create a `.env.development.local` file in the `server` directory:

```env
# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=kanban_board
DB_USERNAME=postgres
DB_PASSWORD=your_database_password

# Server Configuration
PORT=5000
NODE_ENV=development

# Security
SECRET_KEY=your-super-secret-jwt-key-here

# Logging
LOG_FORMAT=tiny

# CORS (optional)
ORIGIN=http://localhost:5173
```

#### Start the Backend Server
```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm run build
npm start
```

The server will run on `http://localhost:5000`

### 4. Frontend Setup

#### Install Dependencies
```bash
cd client
npm install
```

#### Start the Frontend Application
```bash
# Development mode
npm run dev

# Build for production
npm run build
npm run preview
```

The client will run on `http://localhost:5173`

## 🖥️ Running the Application

1. **Start the Backend Server** (from the `server` directory):
   ```bash
   npm run dev
   ```

2. **Start the Frontend Application** (from the `client` directory):
   ```bash
   npm run dev
   ```

3. **Access the Application**:
   - Open your browser and navigate to `http://localhost:5173`
   - The backend API will be available at `http://localhost:5000`

## 🔐 API Documentation

The application provides the following API endpoints:

### Authentication Routes
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - User login
- `GET /api/auth/logout` - User logout

### Column Routes
- `GET /api/column` - Get all columns for authenticated user
- `POST /api/column` - Create a new column
- `PUT /api/column/:id` - Update a column
- `DELETE /api/column/:id` - Delete a column

### Task Routes
- `GET /api/task` - Get all tasks for authenticated user
- `POST /api/task` - Create a new task
- `PUT /api/task/:id` - Update a task
- `DELETE /api/task/:id` - Delete a task
- `PUT /api/task/move/:id` - Move task between columns

### API Testing
Import the `Kanban-board-backend.postman_collection.json` file into Postman to test all API endpoints with sample requests and responses.

## 📁 Project Structure

```
kanban-board-app-main/
├── client/                          # Frontend React application
│   ├── public/
│   │   └── kanban-bg.png           # Background image
│   ├── src/
│   │   ├── components/             # Reusable UI components
│   │   │   ├── ColumnWrapper.tsx   # Column container component
│   │   │   ├── KanbanBoard.tsx     # Main board component
│   │   │   ├── NavBar.tsx          # Navigation bar
│   │   │   └── TaskCard.tsx        # Individual task component
│   │   ├── contexts/               # React Context providers
│   │   │   ├── KanbanBoardContext.tsx  # Board state management
│   │   │   └── UserContext.tsx     # User authentication state
│   │   ├── icons/                  # Custom SVG icons
│   │   │   ├── AddIcon.tsx
│   │   │   └── DeleteIcon.tsx
│   │   ├── pages/                  # Main application pages
│   │   │   ├── KanbanBoardPage.tsx # Main kanban interface
│   │   │   ├── Login.tsx           # Login page
│   │   │   └── SignUp.tsx          # Registration page
│   │   ├── App.tsx                 # Main app component
│   │   ├── main.tsx                # Application entry point
│   │   └── types.ts                # TypeScript type definitions
│   ├── index.html                  # HTML template
│   ├── package.json                # Frontend dependencies
│   ├── tailwind.config.js          # TailwindCSS configuration
│   ├── vite.config.ts              # Vite configuration
│   └── tsconfig.json               # TypeScript configuration
├── server/                          # Backend Express.js application
│   ├── src/
│   │   ├── config/                 # Configuration files
│   │   │   └── index.ts            # Environment variables
│   │   ├── controllers/            # Route controllers
│   │   │   ├── auth.controller.ts  # Authentication logic
│   │   │   ├── column.controller.ts # Column management
│   │   │   ├── task.controller.ts  # Task management
│   │   │   └── index.controller.ts # Health check
│   │   ├── databases/              # Database connection
│   │   │   └── index.ts            # Sequelize configuration
│   │   ├── dtos/                   # Data Transfer Objects
│   │   │   ├── users.dto.ts        # User validation schemas
│   │   │   ├── columns.dto.ts      # Column validation schemas
│   │   │   └── tasks.dto.ts        # Task validation schemas
│   │   ├── exceptions/             # Custom error handling
│   │   │   └── HttpException.ts
│   │   ├── interfaces/             # TypeScript interfaces
│   │   │   ├── auth.interface.ts
│   │   │   ├── users.interface.ts
│   │   │   ├── columns.interface.ts
│   │   │   ├── tasks.interface.ts
│   │   │   └── routes.interface.ts
│   │   ├── middlewares/            # Express middlewares
│   │   │   ├── auth.middleware.ts  # JWT authentication
│   │   │   ├── error.middleware.ts # Error handling
│   │   │   └── validation.middleware.ts # Request validation
│   │   ├── models/                 # Database models
│   │   │   ├── users.model.ts      # User model
│   │   │   ├── columns.model.ts    # Column model
│   │   │   ├── tasks.model.ts      # Task model
│   │   │   └── associations.ts     # Model relationships
│   │   ├── routes/                 # API routes
│   │   │   ├── auth.route.ts       # Authentication routes
│   │   │   ├── column.route.ts     # Column routes
│   │   │   ├── task.route.ts       # Task routes
│   │   │   └── index.route.ts      # Health check route
│   │   ├── services/               # Business logic
│   │   │   ├── auth.service.ts     # Authentication service
│   │   │   ├── column.service.ts   # Column service
│   │   │   └── task.service.ts     # Task service
│   │   ├── utils/                  # Utility functions
│   │   │   ├── util.ts             # Helper functions
│   │   │   └── validateEnv.ts      # Environment validation
│   │   ├── app.ts                  # Express app configuration
│   │   └── server.ts               # Server entry point
│   ├── package.json                # Backend dependencies
│   ├── tsconfig.json               # TypeScript configuration
│   ├── nodemon.json                # Nodemon configuration
│   └── .swcrc                      # SWC compiler configuration
├── Kanban-board-backend.postman_collection.json  # API testing collection
└── README.md                       # This file
```

## ✨ Features

### User Authentication
- User registration and login
- JWT-based authentication
- Secure password hashing with bcrypt
- Protected routes and API endpoints

### Kanban Board Management
- Create, read, update, and delete columns
- Create, read, update, and delete tasks
- Drag and drop tasks between columns
- Real-time position updates
- User-specific board data

### User Interface
- Responsive design with TailwindCSS
- Smooth animations with Framer Motion
- Intuitive drag-and-drop interface
- Toast notifications for user feedback
- Clean and modern design

### Security Features
- CORS protection
- Helmet security headers
- Request validation
- Environment variable protection
- SQL injection prevention through Sequelize ORM

## 🚨 Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Ensure PostgreSQL is running
   - Check database credentials in `.env.development.local`
   - Verify database and user exist

2. **Port Already in Use**
   - Change PORT in `.env.development.local`
   - Kill existing processes: `sudo lsof -ti:5000 | xargs kill -9`

3. **CORS Errors**
   - Ensure backend is running on port 5000
   - Check ORIGIN setting in environment variables

4. **JWT Token Issues**
   - Clear browser cookies/localStorage
   - Ensure SECRET_KEY is set in environment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👥 Authors

- **Ruchika Deol**
- Additional contributors welcome!

## 🙏 Acknowledgments

- Zidio for this amazing opportunity
- React team for the amazing framework
- Express.js community
- PostgreSQL team
- All open-source contributors

---

**Happy Kanban Boarding! 🎉**
