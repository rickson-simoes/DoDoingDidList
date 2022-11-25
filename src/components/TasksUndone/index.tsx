import { Trash, Circle } from 'phosphor-react';
import styles from './TasksUndone.module.css';

export function TasksUndone() {
  return (
    <section className={styles.taskUndone}>
      <Circle size={22} className={styles.svgCircle} />

      <span className={styles.taskText}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
      </span>

      <Trash size={18} className={styles.svgTrash} />
    </section>
  )
}