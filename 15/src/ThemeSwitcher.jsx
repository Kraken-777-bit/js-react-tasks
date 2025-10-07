import React from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

import ThemeContext from './contexts';

class ThemeSwitcher extends React.Component {
  // BEGIN (write your solution here)
  static contextType = ThemeContext;

  render() {
    const { themes, currentTheme, setCurrentTheme } = this.context;

    return (
      <ButtonGroup className="mb-2">
        {themes.map((theme) => (
          <ToggleButton
            key={theme.id}
            id={`theme-${theme.id}`}
            type="radio"
            variant="secondary"
            name="theme"
            value={theme.id}
            checked={currentTheme.id === theme.id}
            onChange={() => setCurrentTheme(theme)}
          >
            {theme.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    );
  }
  // END
}

export default ThemeSwitcher;
