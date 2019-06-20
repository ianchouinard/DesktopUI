import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import styles from './SystemIcon.styles';

const SystemIcon = ({classes, icon, title, onClick, color, background}) => (
    <div
        className={classes.systemIcon}
        title={title}
        onClick={onClick}
        color={color}
        style={{background: background}}>
        { icon }
    </div>
);

SystemIcon.propTypes = {
    classes: PropTypes.object,
    icon: PropTypes.any,
    title: PropTypes.string,
    onClick: PropTypes.func,
    color: PropTypes.string,
    background: PropTypes.string
};

export default injectSheet(styles)(SystemIcon);
