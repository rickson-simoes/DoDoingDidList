import { PlusCircle } from 'phosphor-react';
import { FormEvent, FormHTMLAttributes, useRef } from 'react';
import styles from './Form.module.css';

export interface IForm {
  handleSubmitForm: (task: string) => void;
};

export function Form({ handleSubmitForm }: IForm) {
  const newTask = useRef<HTMLInputElement>(null);

  function handleNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    handleSubmitForm(newTask.current?.value!);
  }

  return (
    <>
      <form onSubmit={(e) => handleNewTask(e)} className={styles.form}>
        <input
          type="text"
          ref={newTask}
          placeholder='Add a new task 📝'
        />

        <button type="submit">
          Criar <PlusCircle />
        </button>
      </form>
    </>
  )
}