import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { IForm } from '../../@Types';
import styles from './Form.module.css';

export function Form({ onSubmitNewTask }: IForm) {
  const [newTask, setNewTask] = useState<string>("")

  function handleNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    onSubmitNewTask(newTask);
    setNewTask("")
  }

  function handleTaskName(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  return (
    <>
      <form onSubmit={(e) => handleNewTask(e)} className={styles.form}>
        <input
          type="text"
          value={newTask}
          onChange={handleTaskName}
          placeholder='Add a new task 📝'
        />

        <button type="submit">
          Create <PlusCircle />
        </button>
      </form>
    </>
  )
}