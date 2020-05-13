import React from 'react'
import {
    List as UseList,
    ListItem as UseListItem,
    ListItemIcon as UseListItemIcon,
    ListItemText as UseListItemText,
} from '@material-ui/core'

const List = (props) => {
    const { component, ariaLabel, children, ...rest } = props
    console.log('List props', props)
    return (
        <UseList component={component} aria-label={ariaLabel} {...rest}>
            {children}
        </UseList>
    )
}
const ListItem = (props) => {
    const { button, component, children, ...rest } = props
    return (
        <UseListItem button component={component}{...rest}>
            {children}
        </UseListItem>
    )
}
const ListItemIcon = (props) => {
    const { children, ...rest } = props
    return (
        <UseListItemIcon {...rest}>
            {children}
        </UseListItemIcon>
    )
}
const ListItemText = (props) => {
    const { primary, children, ...rest } = props
    return (
        <UseListItemText primary={primary} {...rest}>
            {children}
        </UseListItemText>
    )
}

export default List;
export { ListItem, ListItemIcon, ListItemText }
