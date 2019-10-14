import React from 'react';
import {Hidden, Icon, IconButton, Input, Paper} from '@material-ui/core';
import {useSelector} from 'react-redux';
import {ThemeProvider} from '@material-ui/styles';

function AgendaAppHeader(props)
{
    //const searchText = useSelector(({mailApp}) => mailApp.mails.searchText);
    const mainTheme = useSelector(({fuse}) => fuse.settings.mainTheme);

    return (
        <ThemeProvider theme={mainTheme}>
            <div className="flex flex-1">
                <Paper className="flex items-center w-full h-48 sm:h-56 p-16 pl-4 md:pl-16 rounded-8 " elevation={1}>
                    <Hidden lgUp>
                        <IconButton
                            onClick={(ev) => props.pageLayout.current.toggleLeftSidebar()}
                            aria-label="open left sidebar"
                        >
                            <Icon>menu</Icon>
                        </IconButton>
                    </Hidden>

                    <Icon color="action">search</Icon>

                    <Input
                        placeholder="Search Appointments"
                        className="pl-16"
                        disableUnderline
                        fullWidth
                        inputProps={{
                            'aria-label': 'Search'
                        }}
                    />
                </Paper>
            </div>
        </ThemeProvider>
    );
}

export default AgendaAppHeader;