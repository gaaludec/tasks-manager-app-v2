import { Task } from './types';

export const loadTasks = (): Task[] => {
  const storedTask = localStorage.getItem('task');
  return storedTask ? JSON.parse(storedTask) : [];
};

export const updateLocalStorage = (tasks: Task[]): void => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
