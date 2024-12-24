const BASE_URL = process.env.REACT_APP_API;
;

export const fetchNotes = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) throw new Error('Error fetching notes');
  return await response.json();
};

export const createNote = async (note) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(note),
  });
  if (!response.ok) throw new Error('Error creating note');
  return await response.json();
};

export const updateNote = async (id, note) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(note),
  });
  if (!response.ok) throw new Error('Error updating note');
  return await response.json();
};

export const deleteNote = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Error deleting note');
};

export const fetchActiveNotes = async () => {
  const response = await fetch(`${BASE_URL}/active`);
  if (!response.ok) {
    throw new Error('Error fetching active notes');
  }
  return response.json();
};

export const fetchArchivedNotes = async () => {
  const response = await fetch(`${BASE_URL}/archived`);
  if (!response.ok) {
    throw new Error('Error fetching archived notes');
  }
  return response.json();
};

export const archiveNote = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}/archive`, {
    method: 'PUT',
  });
  if (!response.ok) throw new Error('Error archiving note');
  return await response.json();
};

export const unarchiveNote = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}/unarchive`, {
    method: 'PUT',
  });
  if (!response.ok) throw new Error('Error unarchiving note');
  return await response.json();
};

