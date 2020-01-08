import { useState, ChangeEvent, FormEvent } from 'react';
import { Task } from '../store/task/taskTypes';

export const useForm = (initialState: Task, cb: () => void) => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => setValues({ ...values, [e.target.name]: e.target.value })

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    cb();
    setValues(initialState);
  }

  return [values, handleChange, handleSubmit]
}
