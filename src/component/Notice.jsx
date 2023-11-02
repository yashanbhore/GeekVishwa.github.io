import React from 'react'
import { Messages } from 'primereact/messages';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AlertTitle from '@mui/material/AlertTitle';

const Notice = () => {

  return (
    <div>
        {/* <Messages ref={msgs} /> */}
        <Stack sx={{ width: '100%' }} spacing={2} className='flex justify-center items-center' >
      <Alert variant="outlined" severity="info" className='note-body'  >
        <AlertTitle className='note-title'>Note:</AlertTitle>
        Individial registrations won't be considered !
      </Alert>
    </Stack>
    </div>
  )
}

export default Notice