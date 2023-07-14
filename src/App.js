import React, { Fragment, useState } from 'react';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Navbar from './components/Navbar'
import { Box, Container, Stack, ThemeProvider, createTheme } from '@mui/material';
import Add from './components/Add';





const App = () => {
  const [mode,setMode] = useState("light")
  const darkTheme = createTheme ({
    palette:{
      mode:mode
    }
  })
  return (
    <Fragment>
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={'text.primary'}>
        <Navbar></Navbar>
        <Stack direction="row" spacing={2} justifyContent="space-between"> 
          <Sidebar setMode={setMode} mode={mode}></Sidebar>
          <Feed></Feed>
          <Rightbar></Rightbar>
        </Stack>
        <Add></Add>
      </Box>
    </ThemeProvider>
    </Fragment>
  );
};

export default App;