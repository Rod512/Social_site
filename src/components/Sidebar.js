import { Article, GroupAdd, Home, ModeNight, People, Person, Settings, Store } from '@mui/icons-material';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import React from 'react';
import { Fragment } from 'react';

const Sidebar = () => {
    return (
        <Fragment>
            <Box flex={1} p={2} sx={{display:{xs:"none",sm:"block"}}}>
                <List>
                    <ListItem disablePadding>
                    <ListItemButton component='a' href='#home'>
                        <ListItemIcon>
                            <Home/>
                        </ListItemIcon>
                        <ListItemText primary="Home page" />
                    </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                    <ListItemButton component='a' href='#home'>
                        <ListItemIcon>
                            <Article/>
                        </ListItemIcon>
                        <ListItemText primary="pages" />
                    </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                    <ListItemButton component='a' href='#home'>
                        <ListItemIcon>
                            <GroupAdd/>
                        </ListItemIcon>
                        <ListItemText primary="group" />
                    </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                    <ListItemButton component='a' href='#home'>
                        <ListItemIcon>
                            <Store/>
                        </ListItemIcon>
                        <ListItemText primary="Marketplace" />
                    </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                    <ListItemButton component='a' href='#home'>
                        <ListItemIcon>
                            <People/>
                        </ListItemIcon>
                        <ListItemText primary="Friend" />
                    </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                    <ListItemButton component='a' href='#home'>
                        <ListItemIcon>
                            <Settings/>
                        </ListItemIcon>
                        <ListItemText primary="settings" />
                    </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                    <ListItemButton component='a' href='#home'>
                        <ListItemIcon>
                            <Person/>
                        </ListItemIcon>
                        <ListItemText primary="profile" />
                    </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                    <ListItemButton component='a' href='#home'>
                        <ListItemIcon>
                            <ModeNight/>
                        </ListItemIcon>
                        <Switch/>
                    </ListItemButton>
                    </ListItem>


                </List>
            </Box>
        </Fragment>
        
    );
};

export default Sidebar;