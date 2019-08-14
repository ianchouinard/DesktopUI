import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import styles from './Desktop.styles';

const Desktop = ({classes, children, id, desktopContext, wallpaper}) => (
    <div
        id={id}
        className={classes.desktop}
        style={{
            color: desktopContext.state.theme.text,
            backgroundImage: `url(${wallpaper})`
        }}>
        { children }
    </div>
);

Desktop.propTypes = {
    classes: PropTypes.object,
    children: PropTypes.any,
    id: PropTypes.string.isRequired,
    desktopContext: PropTypes.any,
    wallpaper: PropTypes.any
};

export default injectSheet(styles)(Desktop);
