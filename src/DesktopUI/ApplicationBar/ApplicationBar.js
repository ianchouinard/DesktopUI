import React from 'react';
import injectSheet from 'react-jss';
import WindowActions from './WindowActions/WindowActions';
import ContextActions from './ContextActions/ContextActions';
import PropTypes from 'prop-types';
import styles from './ApplicationBar.styles';

const ApplicationBar = ({classes, title, onSizeChange, onMinimize, onClose, desktopContext}) => (
    <div className={classes.applicationBar} style={{background: desktopContext.state.theme.applicationBarBg}}>
        <div className={classes.actions}>
            <ContextActions />
        </div>

        <div className={classes.meta}>
            <div className={classes.title}>
                { title }
            </div>
        </div>

        <div className={classes.window}>
            <WindowActions
                onSizeChange={onSizeChange}
                onClose={onClose}
                onMinimize={onMinimize}
                desktopContext={desktopContext} />
        </div>
    </div>
);

ApplicationBar.propTypes = {
    classes: PropTypes.object,
    title: PropTypes.string,
    onSizeChange: PropTypes.func.isRequired,
    onMinimize: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
};

export default injectSheet(styles)(ApplicationBar);
