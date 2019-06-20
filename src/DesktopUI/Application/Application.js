import React, { Component } from 'react';
import injectSheet from 'react-jss';
import ApplicationBar from '../ApplicationBar/ApplicationBar';
import uuid from 'uuid/v1';
import PropTypes from 'prop-types';
import styles from './Application.styles';

class Application extends Component {

    state = {
        guid: `application-${uuid()}`,
        width: 800,
        height: 520,
        x: 0,
        y: 0,
        clickTrack: 0,
        dragXTrack: 0,
        dragYTrack: 0
    };

    componentDidMount() {
        this.setInitialPosition();
        this.setLayer();
    }

    /**
     * Sets the starting position of the app window in the center of the app zone.
     */
    setInitialPosition = () => {
        const zone = document.getElementById(this.props.zoneId);

        if (!zone) {
            console.error('zoneId must match an id of a app zone');
            return;
        }

        const width = zone.offsetWidth;
        const height = zone.offsetHeight;

        this.setState({
            x: (width / 2) - (this.state.width / 2),
            y: (height / 2) - (this.state.height / 2)
        });
    };

    /**
     * Set position tracking state on app bar drag.
     * @param { event } e
     */
    dragBar = (e) => {
        e.preventDefault();

        this.setState({
            dragXTrack: e.clientX,
            dragYTrack: e.clientY
        }, () => {
            document.addEventListener('mouseup', this.removeAppDrag);
            document.addEventListener('mousemove', this.dragAppWindow);
        });
    };

    /**
     * Update the position of the app window on appbar drag.
     * @param { event } e
     */
    dragAppWindow = (e) => {
        e.preventDefault();
        const appWindow = document.getElementById(this.state.guid);

        this.setState({
            dragXTrack: e.clientX,
            dragYTrack: e.clientY,
            x: (appWindow.offsetLeft - (this.state.dragXTrack - e.clientX)),
            y: (appWindow.offsetTop - (this.state.dragYTrack - e.clientY))
        });
    };

    /**
     * Clear appbar drag related drag handlers on the document.
     * Happens after the window has finsished dragging rather than on unmount.
     */
    removeAppDrag = () => {
        document.removeEventListener('mouseup', this.removeAppDrag);
        document.removeEventListener('mousemove', this.dragAppWindow);
    };

    /**
     * Handle actions when clicking the center of the app bar. Actions...
     * 1. Handle double click action of the appbar to expand the app window.
     */
    onBarClick = () => {
        this.setState({
            clickTrack: this.state.clickTrack + 1
        }, () => {
            if (this.state.clickTrack === 2) {
                this.setSize();
            } else {
                setTimeout(() => {
                    this.setState({
                        clickTrack: 0
                    });
                }, 1200);
            }

        });
    };

    /**
     * Set the width of the app window.
     */
    setSize = () => {
        const desktop = document.getElementById(this.props.zoneId);

        const dtWidth = desktop.offsetWidth;
        const dtHeight = desktop.offsetHeight;
        
        let width = 800;
        let height = 520;

        if (this.state.width !== dtWidth && this.state.height !== dtHeight) {
            width = dtWidth;
            height = dtHeight;
        }

        this.setState({
            width: width,
            height: height
        }, this.setInitialPosition);
    };

    /**
     * Sets the "layer" of this application window. This means...
     * 1. Setting the z-index of all open app windows to 1.
     * 2. Setting the z-index of this app window to 2.
     */
    setLayer = () => {
        const allBars = document.querySelectorAll('.desktop-ui-application');

        if (allBars) {
            allBars.forEach((bar) => {
                bar.style.zIndex = 1;
            });
        }

        const desktop = document.getElementById(this.state.guid);
        desktop.style.zIndex = 2;
    };

    /**
     * Toggle the minimized state in the desktop context.
     * This state manages the minimized styling for this app window.
     */
    minimizeApplication = () => {
        this.setInitialPosition();

        this.props.desktopContext.toggleMinimizedApplication(this.props.appId, true);
    };

    /**
     * Call into the desktop context to remove this application from the open list.
     */
    closeApplication = () => {
        this.props.desktopContext.toggleApplication(this.props.appId, false);
    };

    render() {
        const {
            classes,
            children,
            title,
            desktopContext,
            appId
        } = this.props;

        const {
            guid,
            width,
            height,
            x,
            y
        } = this.state;

        const minimized = desktopContext.state.applications[appId].minimized;

        const styling = {
            width: minimized ? ' 0px' : `${width}px`,
            height: minimized ? '0px' : `${height}px`,
            top: `${y}px`,
            left: `${x}px`,
            background: desktopContext.state.theme.windowBg
        };

        return (
            <div id={guid} style={styling} className={classes.application + ' desktop-ui-application'} onClick={this.setLayer}>
                <div id={`bar-${guid}`} className={classes.barArea} onMouseDown={this.dragBar}>
                    <ApplicationBar
                        title={title}
                        onSizeChange={this.setSize}
                        onClose={this.closeApplication}
                        onMinimize={this.minimizeApplication}
                        desktopContext={desktopContext} />
                    <div className={classes.barMask} onClick={this.onBarClick}></div>
                </div>
                <div className={classes.appArea}>
                    { children }
                </div>
            </div>
        );
    }

}

Application.propTypes = {
    title: PropTypes.string,
    zoneId: PropTypes.string.isRequired,
    appId: PropTypes.string.isRequired,
    desktopContext: PropTypes.any,
    children: PropTypes.any
};

export default injectSheet(styles)(Application);

