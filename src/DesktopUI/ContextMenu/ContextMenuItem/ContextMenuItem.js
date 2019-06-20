import React from 'react';
import ContextSubMenu from '../ContextSubMenu/ContextSubMenu';
import injectSheet from 'react-jss';
import styles from './ContextMenuItem.styles';

const ContextMenuItem = ({classes, option, isSubOption}) => (
    <li className={classes.contextMenuOption + ' ' + (isSubOption ? classes.subOption : '')}>
        { option.label }
        { (option.options && option.options.length > 0) && <ContextSubMenu options={option.options} />}
    </li>
);

export default injectSheet(styles)(ContextMenuItem);
