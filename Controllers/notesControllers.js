import db from '../Databases/config.js';

export const getAllNotes = (req, res) => {
  db.query('SELECT * FROM notes WHERE user_id = ?', [req.user.id], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

export const getNoteById = (req, res) => {
  db.query('SELECT * FROM notes WHERE id = ? AND user_id = ?', [req.params.id, req.user.id], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results[0]);
  });
};

export const createNote = (req, res) => {
  const { title, content } = req.body;
  db.query('INSERT INTO notes (title, content, user_id) VALUES (?, ?, ?)', [title, content, req.user.id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ id: result.insertId, title, content });
  });
};

export const updateNote = (req, res) => {
  const { title, content } = req.body;
  db.query('UPDATE notes SET title = ?, content = ? WHERE id = ? AND user_id = ?', [title, content, req.params.id, req.user.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ id: req.params.id, title, content });
  });
};

export const deleteNote = (req, res) => {
  db.query('DELETE FROM notes WHERE id = ? AND user_id = ?', [req.params.id, req.user.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Note deleted' });
  });
};
