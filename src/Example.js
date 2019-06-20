import React, { useEffect } from 'react';
import MaterialIcon from 'material-icons-react';
import Desktop from './DesktopUI/Desktop/Desktop';
import Application from './DesktopUI/Application/Application';
import AppZone from './DesktopUI/AppZone/AppZone';
import Taskbar from './DesktopUI/Taskbar/Taskbar';
import ExampleAppWelcome from './ExampleAppWelcome/ExampleAppWelcome';
import InfoIcon from 'mdi-react/InfoCircleIcon';

const Example = (props) => {

    useEffect(() => {
        props.desktopContext.registerApplications([
            {
                id: 'welcome-app',
                icon: <InfoIcon style={{fill: props.desktopContext.state.theme.text}} />,
                name: 'Welcome'
            },
            {
                id: 'components-app',
                icon: <MaterialIcon icon="widgets" color={props.desktopContext.state.theme.text} />,
                name: 'components'
            }
        ]);
    }, []);

    return (
        <Desktop id="desktop" desktopContext={props.desktopContext}>
            <AppZone id="apps">
                {Boolean(props.desktopContext.state.openApplications['welcome-app']) && (
                    <Application
                        title="Welcome"
                        zoneId="apps"
                        appId="welcome-app"
                        desktopContext={props.desktopContext}>
                        <ExampleAppWelcome ctx={props.desktopContext} />
                    </Application>
                )}

                {Boolean(props.desktopContext.state.openApplications['components-app']) && (
                    <Application
                        title="Components"
                        zoneId="apps"
                        appId="components-app"
                        desktopContext={props.desktopContext}>
                        Components
                    </Application>
                )}
            </AppZone>
    
            <Taskbar desktopContext={props.desktopContext} />
        </Desktop>
    );
};

export default Example;
