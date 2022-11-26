import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './Form.module.css';

export interface IForm {
  handleSubmitForm: (task: string) => void;
};

export function Form({ handleSubmitForm }: IForm) {
  const [newTask, setNewTask] = useState<string>("")

  function handleNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    handleSubmitForm(newTask);
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
          Criar <PlusCircle />
        </button>
      </form>
    </>
  )
}