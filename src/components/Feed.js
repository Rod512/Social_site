import {Box} from '@mui/material';
import React from 'react';
import { Fragment } from 'react';
import Post from './Post';


const Feed = () => {
    return (
        <Fragment>
            <Box  flex={4} p={2}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </Box>
        </Fragment>
    );
};

export default Feed;