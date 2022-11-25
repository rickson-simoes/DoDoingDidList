import { Trash, CheckCircle } from 'phosphor-react';
import styles from './TasksDone.module.css';

export function TasksDone() {
  return (
    <section className={styles.taskDone}>
      <CheckCircle size={18} weight="fill" className={styles.svgCheckCircle} />

      <span className={styles.taskText}>
        Integer urna interdum massa libero auctor neque turpis te turpis turpis semper.
      </span>

      <Trash size={18} className={styles.svgTrash} />
    </section>
  )
}