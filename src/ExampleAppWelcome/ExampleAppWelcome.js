import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles = {
    welcome: {
        padding: '20px',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto',
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
            </div>
        );
    };

}

export default injectSheet(styles)(ExampleWelcomeApp);
