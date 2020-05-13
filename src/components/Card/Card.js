import React from "react";
import {
    makeStyles, Card as UseCard
} from "@material-ui/core";
const style = {
    card: {
        border: "0",
        marginBottom: "30px",
        marginTop: "30px",
        borderRadius: "6px",
        background: 'white',
        width: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minWidth: "0",
        wordWrap: "break-word",
        fontSize: ".875rem"
    },
}
const useStyles = makeStyles(style);

export default function Card(props) {
    const classes = useStyles();
    const { children, ...rest } = props;
    return (
        <UseCard {...rest} className={classes.card}>
            {children}
        </UseCard>
    );
}
