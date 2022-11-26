import Clipboard from '../../assets/Clipboard.svg';
import styles from './NoTasksDisplay.module.css';

export function NoTasksDisplay() {
  return (
    <div className={styles.noTasks}>
      <img src={Clipboard} />
      <strong>You still don't have any task</strong>
      <span>Create some tasks and organize your Todo's 😎</span>
    </div>
  )
}