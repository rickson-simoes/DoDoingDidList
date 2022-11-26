export interface ITaskList {
  id: string,
  value: string,
  isTaskComplete: boolean
}

export interface TasksContent {
  Task: ITaskList;
  onDeleteTask: (id: string) => void;
  onCompleteTask: (task: ITaskList) => void;
}

export interface IForm {
  onSubmitNewTask: (task: string) => void;
};