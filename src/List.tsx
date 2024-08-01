import { Task } from './types';

type ListProps = {
  tasks: Task[];
  toggle: ({ id }: { id: string }) => void;
  deleteTask: ({ id }: { id: string }) => void;
};

const List = ({ tasks, toggle, deleteTask }: ListProps) => {
  return (
    <div>
      <ul>
        {tasks.map((task) => {
          const { id, description, isCompleted } = task;
          return (
            <li key={id}>
              <input
                type="checkbox"
                checked={isCompleted}
                onChange={() => toggle({ id })}
              />
              <p>{description}</p>
              <button type="button" onClick={() => deleteTask({ id })}>
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
