import express from 'express';
import { authenticate } from '../Middleware/auth.js';
import { getAllNotes, getNoteById, createNote, updateNote, deleteNote } from '../Controllers/notesControllers.js';

const router = express.Router();
router.use(authenticate);

router.get('/', getAllNotes);
router.get('/:id', getNoteById);
router.post('/', createNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);

export default router;
