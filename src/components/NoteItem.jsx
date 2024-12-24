import React from 'react';

const NoteItem = ({ note, onDelete, onEdit, onArchive, onUnarchive }) => {
  const handleArchiveToggle = () => {
    if (note.archived) {
      onUnarchive(note.id); 
    } else {
      onArchive(note.id); 
    }
  };

  return (
    <div className="note-item">
      <div className="notes-header">
        <button onClick={() => onEdit(note.id)}>✏️</button>
        <button onClick={() => onDelete(note.id)}>🗑️</button>
        <button
          onClick={handleArchiveToggle}
          className={`archive-button ${note.archived ? 'archived' : 'active'}`}
        >
          {note.archived ? 'Unarchive' : 'Archive'}
        </button>
      </div>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </div>
  );
};

export default NoteItem;

