import React, { Component } from 'react';
import { DesktopTheme } from './DesktopTheme';

const DesktopContext = React.createContext();

export class DesktopProvider extends Component {

    state = {
        applications: {},
        openApplications: {},
        theme: this.props.theme || DesktopTheme
    };

    /**
     * Register an appliction by passing an application object.
     * Allows an application component to be tracked so it can
     * be interacted with via taskbar and window actions.
     * @param { array<application> } applications
     * @param { string } application.id Unique id for this app to use.
     * @param { component } application.icon Icon to appear in taskbar when app is open.
     * @param { string } application.name Name of the application.
     */
    registerApplications = (applicationsList) => {
        const applications = {...this.state.applications};

        applicationsList.forEach((application) => {
            applications[application.id] = application;
        });

        this.setState({
            applications: applications
        });
    };

    /**
     * Either opens or closes an application based on the app id.
     * @param { string } applicationId
     * @param { boolean } open 
     */
    toggleApplication = (applicationId, open) => {
        const openApplications = {...this.state.openApplications};
        openApplications[applicationId] = open;

        this.setState({
            openApplications: openApplications
        });
    };

    /**
     * Sets an open application to either be minimized or not.
     * @param { string } applicationId
     * @param { boolean } minimized
     */
    toggleMinimizedApplication = (applicationId, minimized) => {
        const applications = {...this.state.applications};

        if (applications[applicationId]) {
            applications[applicationId].minimized = minimized;
        }

        this.setState({
            applications: applications
        });
    };

    updateTheme = (theme) => {
        this.setState({
            theme: theme
        });
    };

    render() {
        return (
            <DesktopContext.Provider 
                value={{
                    state: this.state,
                    toggleApplication: this.toggleApplication,
                    registerApplications: this.registerApplications,
                    toggleMinimizedApplication: this.toggleMinimizedApplication,
                    updateTheme: this.updateTheme
                }}>
            { this.props.children }
            </DesktopContext.Provider>
        );
    }

}

export const DesktopConsumer = DesktopContext.Consumer;
