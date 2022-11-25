import { Form } from './components/Form'
import { Header } from './components/Header'

import styles from './App.module.css';
import { TaskDashboard } from './components/TaskDashboard';
import { TasksDone } from './components/TasksDone';
import { TasksUndone } from './components/TasksUndone';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrap}>
        <main className={styles.main}>
          <Form />

          <div className={styles.tasksContainer}>
            <TaskDashboard />

            {/* <div className={styles.noTasks}>
              <img src={Clipboard} />
              <strong>You still don't have any task</strong>
              <span>Create some tasks and organize your Todo's 😎</span>
            </div> */}

            <div className={styles.tasks}>
              <TasksUndone />
              <TasksDone />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

