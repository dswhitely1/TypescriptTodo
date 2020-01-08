import { createContext } from 'react';
import { Task } from '../store/task/taskTypes';

interface TaskActionFunctions {
  addTask: (newTask: Task) => void,
  toggleComplete: (id: number) => void,
  clearCompleted: () => void
}

export const ActionsContext = createContext({});
export const ActionsProvider = ActionsContext.Provider;
