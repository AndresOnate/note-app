# Frontend - Notes Application

## Overview
This is the frontend for the Notes Application. It is built using React and communicates with the backend to manage notes. The app allows users to create, update, delete, and view notes, and also supports archiving and unarchiving notes.

## Requirements
- **Node.js** (v18.17 or higher)
- **npm** (v8.0 or higher) or **yarn** (v1.22 or higher)
- **React** (latest version)

## Setup Instructions

### Install Dependencies
Run the following command to install the required dependencies:
   ```bash
        npm install
        # or
        yarn install
   ```
### Running the Application
To run the frontend application, use the following command:
   ```bash
    npm start
    # or
    yarn start
   ```

## Configuration
By default, the frontend is set up to communicate with the backend running on http://localhost:8080. If your backend runs on a different URL, you can modify the API base URL in the environment variables or in the api/notesApi.js file.

### File Structure
   ```
frontend/
├── src/
│   ├── api/
│   │   └── notesApi.js         # API functions for interacting with backend
│   ├── components/
│   │   ├── NoteForm.jsx        # Form for adding and updating notes
│   │   ├── NoteItem.jsx        # Display individual note
│   │   └── NotesGrid.jsx       # Grid displaying all notes
│   ├── App.jsx                 # Main component for managing notes
│   ├── App.css                 # Styles for the app
│   └── index.js                # React entry point
├── .env                        # Environment variables (if applicable)
└── package.json                # Project dependencies and scripts
   ```

## How to Use the Application

1. Create a Note: Enter a title and content in the form and click "Add Note" to create a new note.
2. Edit a Note: Click the pencil icon next to a note to edit it. After making changes, click "Update Note" to save.
3. Delete a Note: Click the trash can icon next to a note to delete it.
4. Archive/Unarchive a Note: Click the "Archive" button to archive a note, and the "Unarchive" button to move it back to active.

## Troubleshooting
If the frontend doesn't load correctly, make sure your backend is running at http://localhost:8080.
If you encounter issues with CORS (Cross-Origin Resource Sharing), ensure that the backend includes the necessary CORS headers to allow communication from http://localhost:3000.
If you face issues related to missing dependencies, try deleting the node_modules folder and running npm install or yarn install again.