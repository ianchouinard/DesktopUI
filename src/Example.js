import React, { useEffect } from 'react';
import Desktop from './DesktopUI/Desktop/Desktop';
import Application from './DesktopUI/Application/Application';
import AppZone from './DesktopUI/AppZone/AppZone';
import Taskbar from './DesktopUI/Taskbar/Taskbar';
import ExampleAppWelcome from './ExampleAppWelcome/ExampleAppWelcome';
import InfoIcon from 'mdi-react/InfoCircleIcon';
import WidgetsIcon from 'mdi-react/WidgetsIcon'; 

const Example = (props) => {

    useEffect(() => {
        props.desktopContext.registerApplications([
            {
                id: 'welcome-app',
                icon: <InfoIcon color="#1472D0" />,
                name: 'Welcome'
            },
            {
                id: 'components-app',
                icon: <WidgetsIcon color="#F06141" />,
                name: 'components'
            }
        ]);
    }, []);

    return (
        <Desktop
            id="desktop"
            desktopContext={props.desktopContext}>
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
