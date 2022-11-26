import { useEffect, useState } from 'react';
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

  function handleSubmitNewTask(newTask: string) {
    const newTaskObj: ITaskList = {
      id: UuidV4(),
      value: newTask,
      isTaskComplete: false
    };

    setTaskList([newTaskObj, ...taskList]);
  }

  function handleDeleteTask(id: string) {
    const newTaskList = taskList.filter(task => task.id != id);

    setTaskList(newTaskList);
  }

  function handleCompleteTask(taskUpdated: ITaskList) {
    const completedTask: ITaskList = {
      ...taskUpdated,
      isTaskComplete: true
    };

    const findTaskIndex = taskList.findIndex(task => task.id === taskUpdated.id);
    const updateTaskList = taskList;
    updateTaskList.splice(findTaskIndex, 1, completedTask);

    setTaskList([...updateTaskList]);
  }

  return (
    <>
      <Header />

      <div className={styles.wrap}>
        <main className={styles.main}>
          <Form onSubmitNewTask={handleSubmitNewTask} />

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
                    <TasksDone Task={prop} key={prop.id} onDeleteTask={handleDeleteTask} onCompleteTask={handleCompleteTask} />
                    :
                    <TasksUndone Task={prop} key={prop.id} onDeleteTask={handleDeleteTask} onCompleteTask={handleCompleteTask} />
                )
                }
              </div>
            }
          </div>
        </main>
      </div>
    </>
  )
}

