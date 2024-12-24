import React, { useState, useEffect } from 'react';
import NoteForm from './components/NoteForm';
import NotesGrid from './components/NotesGrid';
import {
  fetchNotes,
  fetchActiveNotes,
  fetchArchivedNotes,
  createNote,
  updateNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from './api/notesApi';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [view, setView] = useState('active'); 

  useEffect(() => {
    loadNotes();
  }, [loadNotes]); 

  const loadNotes = async () => {
    try {
      let data;
      if (view === 'active') {
        data = await fetchActiveNotes();
        data = data.filter((note) => !note.archived); 
      } else if (view === 'archived') {
        data = await fetchArchivedNotes();
      } else {
        data = await fetchNotes(); 
      }
      setNotes(data);
    } catch (error) {
      console.error('Error loading notes:', error);
    }
  };

  const addOrUpdateNote = async (note) => {
    try {
      if (editingId !== null) {
        const updatedNote = await updateNote(editingId, note);
        setNotes((prev) =>
          prev.map((n) => (n.id === editingId ? updatedNote : n))
        );
        setEditingId(null);
      } else {
        const newNote = await createNote(note);
        setNotes((prev) => [...prev, newNote]);
      }
    } catch (error) {
      console.error('Error saving note:', error);
    }
  };

  const deleteNoteHandler = async (id) => {
    try {
      await deleteNote(id);
      setNotes((prev) => prev.filter((note) => note.id !== id));
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  const editNoteHandler = (id) => {
    setEditingId(id);
  };

  const archiveNoteHandler = async (id) => {
    try {
      const archivedNote = await archiveNote(id); 
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.id === id ? { ...note, archived: archivedNote.archived } : note
        )
      );
      if (view === 'active') {
        setNotes((prevNotes) => prevNotes.filter((note) => !note.archived));
      }
    } catch (error) {
      console.error('Error archiving note:', error);
    }
  };

  const unarchiveNoteHandler = async (id) => {
    try {
      const unarchivedNote = await unarchiveNote(id); 
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.id === id ? { ...note, archived: unarchivedNote.archived } : note
        )
      );
      if (view === 'archived') {
        setNotes((prevNotes) => prevNotes.filter((note) => note.archived));
      }
    } catch (error) {
      console.error('Error unarchiving note:', error);
    }
  };

  return (
    <div className="app-container">
      <div className="header-container">
        <div className="view-buttons">
          <button
            onClick={() => setView('active')}
            className={view === 'active' ? 'active' : ''}
          >
            Active Notes
          </button>
          <button
            onClick={() => setView('archived')}
            className={view === 'archived' ? 'active' : ''}
          >
            Archived Notes
          </button>
        </div>
      </div>
      <div className="content-container">
        <NoteForm
          onSave={addOrUpdateNote}
          editingNote={notes.find((n) => n.id === editingId)}
        />
        <NotesGrid
          notes={notes}
          onDelete={deleteNoteHandler}
          onEdit={editNoteHandler}
          onArchive={archiveNoteHandler} 
          onUnarchive={unarchiveNoteHandler}
        />
      </div>
    </div>
  );
};

export default App;
