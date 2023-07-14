import { Box } from '@mui/material';
import React from 'react';
import { Fragment } from 'react';

const Rightbar = () => {
    return (
        <Fragment>
            <Box flex={2} p={2} sx={{display:{xs:"none",sm:"block"}}}>
                <Box position={'fixed'}>
                rightbar
                </Box>
            </Box>
        </Fragment>
    );
};

export default Rightbar;