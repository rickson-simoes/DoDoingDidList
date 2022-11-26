import { useState } from 'react';

import { ITaskList } from '../../@Types';
import styles from './TaskDashboard.module.css';

interface ITaskDashboard {
  created: number;
  finished: number;
  total: number;
}

export function TaskDashboard({ created = 0, finished = 0, total = 0 }: ITaskDashboard) {

  return (
    <div className={styles.tasksDashboard}>
      <div className={styles.tasksCreated}>
        <strong>Created tasks</strong>
        <span className={styles.tasksCounter}>{created}</span>
      </div>

      <div className={styles.tasksFinished}>
        <strong>Finished</strong>
        <span className={styles.tasksCounter}>{finished} of {total}</span>
      </div>
    </div>
  )
}