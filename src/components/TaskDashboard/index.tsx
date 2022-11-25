import styles from './TaskDashboard.module.css';

export function TaskDashboard() {
  return (
    <div className={styles.tasksDashboard}>
      <div className={styles.tasksCreated}>
        <strong>Created tasks</strong>
        <span className={styles.tasksCounter}>0</span>
      </div>

      <div className={styles.tasksFinished}>
        <strong>Finished</strong>
        <span className={styles.tasksCounter}>2 de 5</span>
      </div>
    </div>
  )
}