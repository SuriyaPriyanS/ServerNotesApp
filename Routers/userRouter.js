// routes/users.js
import express from 'express';
import { register, login , getUser, getAllUsers, updateUser, deleteUser} from '../Controllers/userControllers.js';


const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/user/:id', getUser)
router.get('/user', getAllUsers);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);


export default router;
