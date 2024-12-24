import React, { useState, useEffect } from 'react';

const NoteForm = ({ onSave, editingNote }) => {
  const [form, setForm] = useState({ title: '', content: '' });

  useEffect(() => {
    if (editingNote) {
      setForm(editingNote);
    }
  }, [editingNote]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
    setForm({ title: '', content: '' });
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <textarea
        name="content"
        value={form.content}
        onChange={handleChange}
        placeholder="Content"
        required
        rows={10}
      ></textarea>
      <button type="submit">
        {editingNote ? 'Update Note' : 'Add Note'}
      </button>
    </form>
  );
};

export default NoteForm;
