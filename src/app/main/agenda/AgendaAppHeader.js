import React from 'react';
import {Hidden, Icon, IconButton, Paper} from '@material-ui/core';
import {useSelector} from 'react-redux';
import {ThemeProvider} from '@material-ui/styles';
import InboxSharpIcon from '@material-ui/icons/InboxSharp';
import {FuseAnimate} from '@fuse';
import Typography from '@material-ui/core/Typography';

function AgendaAppHeader(props)
{
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

                    <InboxSharpIcon color="action" />

                    <FuseAnimate animation="transition.slideLeftIn" delay={1500}> 
                    <Typography color="inherit" className="text-15 sm:text-28 pt-16 pl-16 font-light mb-16">
                        So, what's on the agenda for today?
                     </Typography>
                    </FuseAnimate>
                </Paper>
            </div>
        </ThemeProvider>
    );
}

export default AgendaAppHeader;