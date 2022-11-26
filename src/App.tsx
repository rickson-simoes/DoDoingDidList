import { useState } from 'react';
import { v4 as UuidV4 } from 'uuid';

import { Form } from './components/Form'
import { Header } from './components/Header'
import { TaskDashboard } from './components/TaskDashboard';
import { TasksDone } from './components/TasksDone';
import { TasksUndone } from './components/TasksUndone';
import { NoTasksDisplay } from './components/NoTasksDisplay';

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
            <TaskDashboard
              created={taskList.length}
              finished={taskList.filter(task => task.isTaskComplete).length}
              total={taskList.length}
            />

            {taskList.length == 0
              ?
              <NoTasksDisplay />
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

