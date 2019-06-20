import React from 'react';
import injectSheet from 'react-jss';
import TaskbarAction from './TaskbarAction/TaskbarAction';
import styles from './Taskbar.styles';

const Taskbar = ({classes, desktopContext}) => {

    const applications = desktopContext.state.applications;

    return (
        <div className={classes.taskbar} style={{background: desktopContext.state.theme.taskbarBg}}>
            {Object.keys(applications).map((appId) => (
                <div
                    key={appId}
                    className={
                        classes.task 
                        + (desktopContext.state.openApplications[appId] ? ' open' : '')
                        + (desktopContext.state.applications[appId].minimized ? ' minimized' : '')}>
                    <TaskbarAction
                        desktopContext={desktopContext}
                        appId={appId}
                        application={desktopContext.state.applications[appId]} />
                </div>
            ))}
        </div>
    );
};

export default injectSheet(styles)(Taskbar);
