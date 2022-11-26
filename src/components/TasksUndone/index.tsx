import { Trash, Circle } from 'phosphor-react';
import { ITaskList, TasksContent } from '../../@Types';
import styles from './TasksUndone.module.css';

export function TasksUndone({ Task, onDeleteTask, onCompleteTask }: TasksContent) {
  function handleCompleteTask(taskToComplete: ITaskList) {
    onCompleteTask(taskToComplete);
  }

  function handleDeleteTask(id: string) {
    onDeleteTask(id);
  }

  return (
    <section className={styles.taskUndone}>
      <Circle size={18} className={styles.svgCircle} onClick={() => handleCompleteTask(Task)} />

      <span className={styles.taskText}>
        {Task.value}
      </span>

      <Trash size={18} className={styles.svgTrash} onClick={() => handleDeleteTask(Task.id)} />
    </section>
  )
}