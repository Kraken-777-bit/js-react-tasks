import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import Home from './Home.jsx';
import Profile from './Profile.jsx';
import ThemeSwitcher from './ThemeSwitcher.jsx';
import ThemeContext from './contexts';

const themes = [
  {
    id: 1,
    name: 'White',
    className: 'light',
  },
  {
    id: 2,
    name: 'Black',
    className: 'dark',
  },
  {
    id: 3,
    name: 'Blue',
    className: 'dark-blue',
  },
];

class App extends React.Component {
  // BEGIN (write your solution here)
  constructor(props) {
    super(props);
    this.state = {
      currentTheme: themes[0],
      activeTab: 'login'
    };
  }

  setCurrentTheme = (theme) => {
    this.setState({ currentTheme: theme });
  }

  handleTabSelect = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const { currentTheme, activeTab } = this.state;
    const contextValue = {
      themes,
      currentTheme,
      setCurrentTheme: this.setCurrentTheme
    };

    return (
      <ThemeContext.Provider value={contextValue}>
        <Tabs activeKey={activeTab} onSelect={this.handleTabSelect}>
          <Tab eventKey="login" title="Login">
            <Home />
          </Tab>
          <Tab eventKey="registration" title="Registration">
            <Profile />
          </Tab>
        </Tabs>
        <ThemeSwitcher />
      </ThemeContext.Provider>
    );
  }
  // END
}

export default App;
