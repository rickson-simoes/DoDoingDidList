import { Trash, CheckCircle } from 'phosphor-react';
import { ITaskList, TasksContent } from '../../@Types';
import styles from './TasksDone.module.css';

export function TasksDone({ Task, onDeleteTask, onCompleteTask }: TasksContent) {

  function handleCompleteTask(taskToComplete: ITaskList) {
    onCompleteTask(taskToComplete);
  }

  function handleDeleteTask(id: string) {
    onDeleteTask(id);
  }

  return (
    <section className={styles.taskDone}>
      <CheckCircle size={18} weight="fill" className={styles.svgCheckCircle} onClick={() => handleCompleteTask(Task)} />

      <span className={styles.taskText}>
        {Task.value}
      </span>

      <Trash size={18} className={styles.svgTrash} onClick={() => handleDeleteTask(Task.id)} />
    </section>
  )
}