import { useState } from 'react';
import { v4 as UuidV4 } from 'uuid';

import { Form } from './components/Form'
import { Header } from './components/Header'
import { TaskDashboard } from './components/TaskDashboard';
import { TasksDone } from './components/TasksDone';
import { TasksUndone } from './components/TasksUndone';
import Clipboard from './assets/Clipboard.svg';

import styles from './App.module.css';

import { ITaskList } from './@Types';

export function App() {
  const [taskList, setTaskList] = useState<ITaskList[]>([]);

  function onSubmitNewTask(newTask: string) {
    const newTaskObj: ITaskList = {
      id: UuidV4(),
      task: newTask,
      isTaskComplete: false
    };

    setTaskList([...taskList, newTaskObj]);
  }

  return (
    <>
      <Header />

      <div className={styles.wrap}>
        <main className={styles.main}>
          <Form handleSubmitForm={onSubmitNewTask} />

          <div className={styles.tasksContainer}>
            <TaskDashboard />

            {taskList.length == 0
              ?
              <div className={styles.noTasks}>
                <img src={Clipboard} />
                <strong>You still don't have any task</strong>
                <span>Create some tasks and organize your Todo's 😎</span>
              </div>
              :
              <div className={styles.tasks}>
                {taskList.map(prop =>
                  prop.isTaskComplete ?
                    <TasksDone task={prop.task} key={prop.id} /> :
                    <TasksUndone task={prop.task} key={prop.id} />)}
              </div>
            }
          </div>
        </main>
      </div>
    </>
  )
}

