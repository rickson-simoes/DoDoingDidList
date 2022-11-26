import { Trash, CheckCircle } from 'phosphor-react';
import { TasksContent } from '../../@Types';
import styles from './TasksDone.module.css';

export function TasksDone({ task }: TasksContent) {
  return (
    <section className={styles.taskDone}>
      <CheckCircle size={18} weight="fill" className={styles.svgCheckCircle} />

      <span className={styles.taskText}>
        {task}
      </span>

      <Trash size={18} className={styles.svgTrash} />
    </section>
  )
}