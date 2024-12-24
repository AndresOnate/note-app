import React from 'react';
import NoteItem from './NoteItem';

const NotesGrid = ({ notes, onDelete, onEdit, onArchive, onUnarchive }) => {
  return (
    <div className="notes-row">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDelete={onDelete}
          onEdit={onEdit}
          onArchive={onArchive}
          onUnarchive={onUnarchive}
        />
      ))}
    </div>
  );
};

export default NotesGrid;
