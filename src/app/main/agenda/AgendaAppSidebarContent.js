import React from 'react';
import {Icon, List, ListItem, ListItemText, ListSubheader, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {FuseAnimate, NavLinkAdapter} from '@fuse';
import {useSelector} from 'react-redux';


const useStyles = makeStyles(theme => ({
    listItem: {
        color              : 'inherit!important',
        textDecoration     : 'none!important',
        height             : 40,
        width              : 'calc(100% - 16px)',
        borderRadius       : '0 20px 20px 0',
        paddingLeft        : 24,
        paddingRight       : 12,
        '&.active'         : {
            backgroundColor    : theme.palette.secondary.main,
            color              : theme.palette.secondary.contrastText + '!important',
            pointerEvents      : 'none',
            '& .list-item-icon': {
                color: 'inherit'
            }
        },
        '& .list-item-icon': {
            fontSize   : 16,
            width      : 16,
            height     : 16,
            marginRight: 16
        }
    }
}));

function AgendaAppSidebarContent(props)
{
    const classes = useStyles();

    return (
        <FuseAnimate animation="transition.slideUpIn" delay={400}>

            <div className="flex-auto border-l-1">

                <Button>
                    Test
                </Button>
            </div>
        </FuseAnimate>
    );
}

export default AgendaAppSidebarContent;