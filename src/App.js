import React, { Component } from 'react';
import './App.css';
import { DesktopConsumer, DesktopProvider } from './DesktopUI/DesktopContext';
import Example from './Example';
import { DesktopTheme } from './DesktopUI/DesktopTheme';

class App extends Component {

  render() {
    return (
      <div className="App">
        <DesktopProvider theme={DesktopTheme}>
          <DesktopConsumer>
            {context => (
              <Example desktopContext={context} />
            )}
          </DesktopConsumer>
        </DesktopProvider>
      </div>
    );
  }
}

export default App;
