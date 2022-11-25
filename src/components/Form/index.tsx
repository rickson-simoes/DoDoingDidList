import { PlusCircle } from 'phosphor-react';
import styles from './Form.module.css';

export function Form() {
  return (
    <>
      <form className={styles.form}>
        <input
          type="text"
          placeholder='Add a new task 📝'
        />

        <button type="submit">
          Criar <PlusCircle />
        </button>
      </form>
    </>
  )
}