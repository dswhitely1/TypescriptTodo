import React from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm'
import { useTaskActions } from '../../store/task/useTaskActions';

function TaskContainer(): JSX.Element {
  const { clearCompleted } = useTaskActions();
  return (
    <div>
      <TaskList />
      <TaskForm />
      <button onClick={clearCompleted}>Clear Completed Tasks</button>
    </div>
  )
}

export default TaskContainer;
