import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState('')
  return (
    <div style={{ marginLeft: '100px', marginBottom: '30px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <TextField id="add-task" label="Enter Task" variant="filled" value={text} onChange={(e) => { setText(e.target.value) }} />
        <Button variant="contained" size="large" onClick={() => { setText(''); onAddTask(text) }}>Add</Button>
      </Box>
    </div>
  )
}
