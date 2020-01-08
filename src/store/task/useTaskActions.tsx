import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Task, TaskTypes } from './taskTypes';

export const useTaskActions = () => {
  const dispatch = useDispatch();

  const addTask = useCallback((newTask: Task) => {
    dispatch({ type: TaskTypes.ADD_TASK, payload: newTask })
  }, [dispatch])

  const toggleComplete = useCallback((id: number) => {
    dispatch({ type: TaskTypes.TOGGLE_COMPLETE, payload: id })
  }, [dispatch])

  const clearCompleted = useCallback(() => {
    dispatch({ type: TaskTypes.CLEAR_COMPLETED })
  }, [dispatch])

  return { addTask, toggleComplete, clearCompleted }
}
