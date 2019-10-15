import React from 'react';
import {Hidden, Icon, IconButton, Input, Paper, Button} from '@material-ui/core';
import {useSelector} from 'react-redux';
import { createMuiTheme, withStyles, makeStyles } from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import MonetizationOnSharpIcon from '@material-ui/icons/MonetizationOnSharp';
import GroupAddSharpIcon from '@material-ui/icons/GroupAddSharp';
import DateRangeSharpIcon from '@material-ui/icons/DateRangeSharp';
import BlockSharpIcon from '@material-ui/icons/BlockSharp';
import InboxSharpIcon from '@material-ui/icons/InboxSharp';
import {FuseUtils, FuseAnimate, FuseAnimateGroup} from '@fuse';
import Typography from '@material-ui/core/Typography';

import { green, purple } from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';

function AgendaAppHeader(props)
{
    //const searchText = useSelector(({mailApp}) => mailApp.mails.searchText);
    const mainTheme = useSelector(({fuse}) => fuse.settings.mainTheme);

    const ColorFab = withStyles(theme => ({
        root: {
          color: theme.palette.getContrastText('#d14a21'),
          backgroundColor: '#d14a21',
          '&:hover': {
            backgroundColor: purple[700],
          },
        },
      }))(Fab);

    const buttons = {
        button: [
            {
                text: 'ADD APPOINTMENT',
                icon: <DateRangeSharpIcon className="mr-16" />
            },
            {
                text: 'PROCESS SALE',
                icon: <MonetizationOnSharpIcon className="mr-16" />
            },
            {
                text: 'REGISTER CLIENT',
                icon: <GroupAddSharpIcon className="mr-16" />
            },
            {
                text: 'BLOCK TIME SLOT',
                icon: <BlockSharpIcon className="mr-16" />
            }]
    };

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
{/*                     <FuseAnimateGroup
                        enter={{
                            animation: "transition.slideLeftBigIn",
                            delay:300
                        }}
                    > 
                                    {
                    buttons.button.map((buttonx) => (
                        <Fab variant="extended" size="medium" color="primary" aria-label="delete" className="w-216 ml-16 mr-16">
                            {buttonx.icon}
                        {buttonx.text}
                      </Fab>
                        )
                    )
                }
            </FuseAnimateGroup> */}
                </Paper>
            </div>
        </ThemeProvider>
    );
}

export default AgendaAppHeader;