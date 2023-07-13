import React, { Fragment } from 'react';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Navbar from './components/Navbar'
import { Box, Container, Stack } from '@mui/material';



const App = () => {
  return (
    <Fragment>
      <Box>
        <Navbar></Navbar>
        <Stack direction="row" spacing={2} justifyContent="space-between"> 
          <Sidebar></Sidebar>
          <Feed></Feed>
          <Rightbar></Rightbar>
        </Stack>
      </Box>
    </Fragment>
  );
};

export default App;