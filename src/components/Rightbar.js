import { Box } from '@mui/material';
import React from 'react';
import { Fragment } from 'react';

const Rightbar = () => {
    return (
        <Fragment>
            <Box bgcolor={'pink'} flex={2} p={2} sx={{display:{xs:"none",sm:"block"}}}>
                rightbar
            </Box>
        </Fragment>
    );
};

export default Rightbar;