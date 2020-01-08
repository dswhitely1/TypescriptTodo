import React from 'react';
import TaskItem from './TaskItem';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';
import { Task } from '../../store/task/taskTypes';

const TaskList = (): JSX.Element => {
  const tasks = useSelector((state: AppState) => state.taskList);

  return (
    <ul>
      {tasks.tasks.map((task: Task) => <TaskItem task={task} key={task.id} />)}
    </ul>
  )
}

export default TaskList;
