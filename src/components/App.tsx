import React from 'react'
import TaskContainer from './tasks/TaskContainer'
import { ActionsProvider } from '../contexts/ActionsContext';
import { useTaskActions } from '../store/task/useTaskActions';

function App(): JSX.Element {
  const actions = useTaskActions();
  return (
    <ActionsProvider value={{ actions }}>
      <TaskContainer />
    </ActionsProvider>
  )
}

export default App
