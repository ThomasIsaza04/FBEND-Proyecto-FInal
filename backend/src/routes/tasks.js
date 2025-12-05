import express from 'express';
import { getAll, getOne, createTask, updateTask, deleteTask } from '../controllers/tasksController.js';


const router = express.Router();


router.get('/task', getAll);
router.get('/task/:id', getOne);
router.post('/task', createTask);
router.put('/task/:id', updateTask);
router.delete('/task/:id', deleteTask);


export default router;