import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { IForm } from '../../@Types';
import styles from './Form.module.css';

export function Form({ onSubmitNewTask }: IForm) {
  const [newTask, setNewTask] = useState<string>("");

  function handleNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    onSubmitNewTask(newTask);
    setNewTask("")
  }

  function handleTaskName(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleInvalidComment(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("How about start with some tasks?");
  }

  return (
    <>
      <form onSubmit={(e) => handleNewTask(e)} className={styles.form}>
        <input
          type="text"
          value={newTask}
          onChange={handleTaskName}
          onInvalid={handleInvalidComment}
          placeholder='Add a new task 📝'
          required
        />

        <button type="submit">
          Create <PlusCircle />
        </button>
      </form>
    </>
  )
}