export enum TaskTypes {
  ADD_TASK = "ADD_TASK",
  TOGGLE_COMPLETE = "TOGGLE_COMPLETE",
  CLEAR_COMPLETED = "CLEAR_COMPLETED"
}

export interface Task {
  id: number,
  title: string,
  completed: boolean
}

export interface TaskState {
  tasks: Task[]
}

interface AddTask {
  type: typeof TaskTypes.ADD_TASK
  payload: Task
}

interface ToggleComplete {
  type: typeof TaskTypes.TOGGLE_COMPLETE
  payload: number
}

interface ClearCompleted {
  type: typeof TaskTypes.CLEAR_COMPLETED
}

export type TaskActions = AddTask | ToggleComplete | ClearCompleted
