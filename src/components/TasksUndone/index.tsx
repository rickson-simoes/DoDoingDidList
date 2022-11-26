import { Trash, Circle } from 'phosphor-react';
import { TasksContent } from '../../@Types';
import styles from './TasksUndone.module.css';

export function TasksUndone({ task }: TasksContent) {
  return (
    <section className={styles.taskUndone}>
      <Circle size={22} className={styles.svgCircle} />

      <span className={styles.taskText}>
        {task}
      </span>

      <Trash size={18} className={styles.svgTrash} />
    </section>
  )
}