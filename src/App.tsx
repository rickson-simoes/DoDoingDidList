import { Form } from './components/Form'
import { Header } from './components/Header'

import { ClipboardText } from 'phosphor-react';
import Clipboard from './assets/Clipboard.svg';

import styles from './App.module.css';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrap}>
        <main className={styles.main}>
          <Form />

          <div className={styles.tasksContainer}>
            <div className={styles.tasksDashboard}>
              <div className={styles.tasksCreated}>
                <strong>Created tasks</strong>
                <span className={styles.tasksCounter}>0</span>
              </div>

              <div className={styles.tasksFinished}>
                <strong>Finished</strong>
                <span className={styles.tasksCounter}>0</span>
              </div>
            </div>


            <div className={styles.noTasks}>
              <img src={Clipboard} />
              <strong>You still don't have any task</strong>
              <span>Create some tasks and organize your Todo's 😎</span>
            </div>

          </div>
        </main>
      </div>
    </>
  )
}

