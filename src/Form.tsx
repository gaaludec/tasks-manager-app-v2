import { useState } from 'react';
import { Task } from './types';

type FormProps = {
  addTask: (task: Task) => void;
};

const Form = ({ addTask }: FormProps) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text) {
      alert('please enter a task');
      return;
    }

    addTask({
      id: new Date().getTime().toString(),
      description: text,
      isCompleted: false,
    });

    setText('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">addTask</button>
      </form>
    </div>
  );
};

export default Form;
