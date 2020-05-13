import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List, { ListItem, ListItemIcon, ListItemText } from './List'
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

function ListItemLink(props) {
    return <ListItem button={true} component="a" {...props} />;
}
export default function SimpleList() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <List component="nav" ariaLabel="main mailbox folders">
                <ListItem button={true}>
                    <ListItemIcon button={true}>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                </ListItem>
                <ListItem button={true}>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                </ListItem>
            </List>
            <Divider />
            <List component="nav" ariaLabel="secondary mailbox folders">
                <ListItem button>
                    <ListItemText primary="Trash" />
                </ListItem>
                <ListItemLink href="#simple-list">
                    <ListItemText primary="Spam" />
                </ListItemLink>
            </List>
        </div>
    );
}
