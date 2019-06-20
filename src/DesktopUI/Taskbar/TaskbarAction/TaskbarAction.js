import React from 'react';
import SystemIcon from '../../SystemIcon/SystemIcon';
import PropTypes from 'prop-types';

const TaskbarAction = ({desktopContext, appId, application}) => {

    const toggleApplication = () => {
        const isOpen = desktopContext.state.openApplications[appId];
        const isMinimized = desktopContext.state.applications[appId].minimized;

        if (!isOpen) {
            desktopContext.toggleApplication(appId, true);
        } else if (isMinimized) {
            desktopContext.toggleMinimizedApplication(appId, false);
        }
    };

    return (
        <SystemIcon
            icon={application.icon}
            title={application.name}
            onClick={toggleApplication}
            color={desktopContext.state.theme.text}
            background={desktopContext.state.theme.taskbarActionBg} />
    )
};

TaskbarAction.propTypes = {
    desktopContext: PropTypes.any.isRequired,
    appId: PropTypes.string.isRequired,
    application: PropTypes.object.isRequired
};

export default TaskbarAction;
