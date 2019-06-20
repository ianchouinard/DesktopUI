import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles = {
    welcome: {
        padding: '20px',
        textAlign: 'center',
        '& h3, & ul': {
            textAlign: 'left'
        }
    }
};

class ExampleWelcomeApp extends Component {

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.welcome}>
                <h2>React Desktop UI Experiment.</h2>
                <p>
                    Experimenting with a desktop style ui using react. Currentl supports multiple applications which are essentially child
                    components wrapped in an application component. The allows for a flexible implementation (would play nicely with MUI),
                    applications could be treated as separate projects or plugins. A DesktopContext is provided to manage open applications and desktop state. 
                    Could be useful as an intranet ui, or as an interface for controlling a remote desktop.
                </p>
                <hr />
                <h3>Todo</h3>
                <ul>
                    <li>Finish the context menu component</li>
                    <li>Documentation for components</li>
                    <li>Responsive UI</li>
                    <li>Starter applications in a separate repo. (Ex: settings, file manager, etc...)</li>
                </ul>
            </div>
        );
    };

}

export default injectSheet(styles)(ExampleWelcomeApp);
