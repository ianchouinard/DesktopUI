import React from 'react';
import injectSheet from 'react-jss';
import ContextMenuItem from '../ContextMenuItem/ContextMenuItem';
import styles from './ContextSubMenu.styles';

const ContextSubMenu = ({classes, options}) => {
    return (
        <ul className={classes.contextSubMenu}>
            {options.map((option) => (
                <ContextMenuItem key={option.id} option={option} isSubOption={true} />
            ))}
        </ul>
    );
};

export default injectSheet(styles)(ContextSubMenu);
