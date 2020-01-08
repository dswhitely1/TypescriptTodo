import React, { useState } from 'react';
import { Task } from '../../store/task/taskTypes';
import { useTaskActions } from '../../store/task/useTaskActions';

const TaskForm = (): JSX.Element => {
  const { addTask } = useTaskActions();
  const [values, setValues] = useState<Task>({
    id: Date.now(),
    title: '',
    completed: false
  })

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    setValues({ ...values, id: Date.now() })
    addTask(values)
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name='title' onChange={handleChange} value={values.title} />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default TaskForm;
