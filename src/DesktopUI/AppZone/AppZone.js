import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import styles from './AppZone.styles';

const AppZone = ({classes, id, children}) => (
    <div id={id} className={classes.appZone}>
        { children }
    </div>
);

AppZone.propTypes = {
    classes: PropTypes.object,
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default injectSheet(styles)(AppZone);
