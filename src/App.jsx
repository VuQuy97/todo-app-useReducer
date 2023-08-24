import React, { useReducer } from 'react'
import { v4 } from 'uuid'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'


const initialTasks = [
  { id: v4(), text: 'Buy Food', done: true },
  { id: v4(), text: 'Watch TV', done: false },
  { id: v4(), text: 'Eat cakes', done: false }
];

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      const trimmedText = action.text.trim();

      if (trimmedText !== '') {
        return [
          ...tasks,
          {
            id: action.id,
            text: trimmedText,
            done: false
          }
        ];
      }
      return tasks;
    }

    case 'changed': {
      return tasks.map(t => { if (t.id === action.task.id) { return action.task } else { return t } })
    }

    case 'deleted': {
      return tasks.filter(t => t.id !== action.id)
    }

    default: {
      throw Error('Unknown Action:  ' + action.type)
    }
  }
}

export default function App() {

  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

  const handleAddTask = (text) => {
    dispatch(
      {
        type: 'added',
        id: v4(),
        text: text
      }
    )
  }

  const handleChangeTask = (task) => {
    dispatch(
      {
        type: 'changed',
        task: task
      }
    )
  }

  const handleDeleteTask = (taskID) => {
    dispatch(
      {
        type: 'deleted',
        id: taskID
      }
    )
  }

  return (
    <div>
      <h1 style={{ marginLeft: '100px', marginBottom: '30px' }}>TODO APP</h1>
      <AddTask
        onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask} />
    </div>
  )
}
