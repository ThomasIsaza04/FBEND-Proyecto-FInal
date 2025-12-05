import { prisma } from '../prisma.js';


export const getAll = async (req, res) => {
const task = await prisma.task.findMany({ orderBy: { createdAt: 'desc' } });
res.json(task);
};


export const getOne = async (req, res) => {
const id = Number(req.params.id);
const task = await prisma.task.findUnique({ where: { id } });
if (!task) return res.status(404).json({ message: 'Task not found' });
res.json(task);
};


export const createTask = async (req, res) => {
const { title, description } = req.body;
if (!title) return res.status(400).json({ message: 'Title is required' });
const task = await prisma.task.create({ data: { title, description } });
res.status(201).json(task);
};


export const updateTask = async (req, res) => {
const id = Number(req.params.id);
const { title, description, completed } = req.body;
try {
const task = await prisma.task.update({
where: { id },
data: { title, description, completed }
});
res.json(task);
} catch (err) {
res.status(404).json({ message: 'Task not found' });
}
};


export const deleteTask = async (req, res) => {
const id = Number(req.params.id);
try {
await prisma.task.delete({ where: { id } });
res.status(204).send();
} catch (err) {
res.status(404).json({ message: 'Task not found' });
}
};