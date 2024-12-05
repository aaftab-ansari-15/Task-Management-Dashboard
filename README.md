# Compito

Compito is a dynamic Task Management Dashboard where users can create, update, delete, and filter tasks. The dashboard support multiple users and include features like categories, priority levels, and task deadlines.

# Live Link: https://compito-dashboard.netlify.app/

## Features:

### 1. Task CRUD (Create, Read, Update, Delete) Operations:

- Allow users to add new tasks.
- Display a list of all tasks.
- Provide the option to update and delete tasks.

### 2. Filtering and Sorting:

- Provide options to filter tasks based on:
- Priority (Low, Medium, High).
- Category (Work, Personal, Study, etc.).
- Status (Completed, In-progress, Pending).
- Allow sorting by due date and priority.

### 3. User Management:

- Multi-user system where each user sees only their tasks.
- Users can log in and log out.

### 4. Search Functionality:

- Allow users to search for tasks by title or description.

### 5. UI/UX:

- Used React components to ensure the UI is modular and reusable.
- Form validation for task input fields (e.g., required title and due date).
- Used libraries like Material-UI.

### 6. State Management:

- Used React Hooks (e.g., `useState`, `useEffect`).
- Implement state management library like Redux to manage the app's state.

### 7. Other Features:

- Task Timer for each task, where users can track the time spent on a task.
- Implemented drag-and-drop functionality to reorder tasks.
- Notifications/reminders for upcoming tasks (due in 1 day, etc.).
- Implemented Dark Mode.
