import express from 'express';
import { getAll, getOne, createTask, updateTask, deleteTask } from '../controllers/tasksController.js';


const router = express.Router();


router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);


export default router;