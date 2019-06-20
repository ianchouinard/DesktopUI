import React from 'react';
import injectSheet from 'react-jss';
import MaterialIcon from 'material-icons-react';
import PropTypes from 'prop-types';
import styles from './WindowActions.styles';

const WindowActions = ({ classes, onSizeChange, onMinimize, onClose, desktopContext }) => (
    <div className={classes.windowActions}>
        <button
            title="Maximize Window"
            style={{background: desktopContext.state.theme.applicationBarActionBg}}
            onClick={onSizeChange}>
            <MaterialIcon icon="tab_unselected" size={12} color={desktopContext.state.theme.text} />
        </button>
        <button
            title="Minimize Window"
            style={{background: desktopContext.state.theme.applicationBarActionBg}}
            onClick={onMinimize}>
            <MaterialIcon icon="remove" size={14} color={desktopContext.state.theme.text} />
        </button>
        <button
            title="Close Window"
            style={{background: desktopContext.state.theme.applicationBarActionBg}}
            onClick={onClose}>
            <MaterialIcon icon="clear" size={14} color={desktopContext.state.theme.text} />
        </button>
    </div>
);

WindowActions.propTypes = {
    classes: PropTypes.object,
    onSizeChange: PropTypes.func.isRequired,
    onMinimize: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    desktopContext: PropTypes.any
};

export default injectSheet(styles)(WindowActions);
