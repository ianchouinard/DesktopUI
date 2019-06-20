import React, { Component } from 'react';
import injectSheet from 'react-jss';
import MaterialIcon from 'material-icons-react';
import ContextMenu from '../../ContextMenu/ContextMenu';

const styles = {
    contextActions: {
        display: 'flex',
        paddingLeft: '10px'
    },
    actionsMenuTrigger: {
        display: 'flex',
        alignItems: 'center',
        height: '40px',
        paddingTop: '5px'
    }
};

class ContextActions extends Component {

    state = {

    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.contextActions}>
                <div className={classes.actionsMenuTrigger}>
                    <ContextMenu
                        anchor={<MaterialIcon icon="view_list" size={27} />} />
                </div>
            </div>
        );
    }

}

export default injectSheet(styles)(ContextActions);
