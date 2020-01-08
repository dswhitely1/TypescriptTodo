import { TaskState, TaskActions, TaskTypes, Task } from "./taskTypes";

const initialState: TaskState = {
  tasks: []
}

export const taskReducer = (state = initialState, action: TaskActions): TaskState => {
  switch (action.type) {
    case TaskTypes.ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] }
    case TaskTypes.TOGGLE_COMPLETE:
      return {
        ...state, tasks: state.tasks.map((task: Task) => {
          if (task.id === action.payload) {
            return { ...task, completed: !task.completed }
          } else {
            return task
          }
        })
      }
    case TaskTypes.CLEAR_COMPLETED:
      return { ...state, tasks: state.tasks.filter((task: Task) => !task.completed) }
    default:
      return state;
  }
}
