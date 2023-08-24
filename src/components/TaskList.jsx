import { Button, Checkbox, TextField } from '@mui/material';
import { useState } from 'react';


function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <TextField
          size='small'
          value={task.text}
          onChange={e => {
            onChange({
              ...task,
              text: e.target.value
            });
          }} />
        <Button size='small' variant='contained' onClick={() => setIsEditing(false)}>
          Save
        </Button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <Button size='small' variant='contained' onClick={() => setIsEditing(true)}>
          Edit
        </Button>
      </>
    );
  }
  return (
    <div style={{ marginLeft: '100px' }}>
      <label style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Checkbox
          checked={task.done}
          onChange={e => {
            onChange({
              ...task,
              done: e.target.checked
            });
          }}
        />
        {taskContent}
        <Button sx={{ backgroundColor: 'red' }} size='small' variant='contained' onClick={() => onDelete(task.id)}>
          Delete
        </Button>
      </label>
    </div>
  );
}

export default function TaskList({
  tasks,
  onChangeTask,
  onDeleteTask
}) {
  return (
    <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
      {tasks.map(task => (
        <li key={task.id}>
          <Task
            task={task}
            onChange={onChangeTask}
            onDelete={onDeleteTask}
          />
        </li>
      ))}
    </ul>
  );
}


