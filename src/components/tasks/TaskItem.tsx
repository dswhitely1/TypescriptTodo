import React from 'react';
import { Task } from '../../store/task/taskTypes';
import { useTaskActions } from '../../store/task/useTaskActions';
import './task.css';

interface IProps {
  task: Task
}

const TaskItem = (props: IProps): JSX.Element => {
  const { toggleComplete } = useTaskActions();
  return <li className={props.task.completed ? 'completed' : undefined} onClick={() => toggleComplete(props.task.id)}>{props.task.title}</li>
}

export default TaskItem;
