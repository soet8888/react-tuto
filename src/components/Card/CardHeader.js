import React from "react";
import { makeStyles, CardHeader as UseCardHeader } from "@material-ui/core";
const style = {
    cardHeader: {
        marginLeft: "0px !important",
        marginRight: "0px !important",
        backgroundColor: "blue"

    },
}
const useStyles = makeStyles(style);

const CardHeader = (props) => {
    const classes = useStyles();
    const { children, ...rest } = props;
    console.log('card header child', children)
    return (
        <UseCardHeader {...rest} className={classes.cardHeader}>
            {children}
        </UseCardHeader>
    );
}
export default CardHeader