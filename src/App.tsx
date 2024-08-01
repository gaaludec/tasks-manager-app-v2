import Form from './Form';
import List from './List';
import { Task } from './types';
import { useState, useEffect } from 'react';
import { loadTasks, updateLocalStorage } from './utils';

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => loadTasks());

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const toggleTask = ({ id }: { id: string }) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      })
    );
  };

  const deleteTask = ({ id }: { id: string }) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  useEffect(() => {
    updateLocalStorage(tasks);
  }, [tasks]);

  return (
    <main>
      <h1>Tasks Manager App V2</h1>
      <section>
        <Form addTask={addTask} />
        <List tasks={tasks} toggle={toggleTask} deleteTask={deleteTask} />
      </section>
    </main>
  );
}

export default App;
