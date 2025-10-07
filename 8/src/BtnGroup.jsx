import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
export default class BtnGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: null
    };
  }

  handleLeftClick = () => {
    this.setState({ activeButton: 'left' });
  }

  handleRightClick = () => {
    this.setState({ activeButton: 'right' });
  }

  render() {
    const { activeButton } = this.state;

    const leftClass = cn('btn', 'btn-secondary', 'left', {
      active: activeButton === 'left'
    });

    const rightClass = 'btn btn-secondary right' + 
    (activeButton === 'right' ? ' active' : '');

    return (
      <div className="btn-group" role="group">
        <button 
          type="button" 
          className={leftClass} 
          onClick={this.handleLeftClick}
        >
          Left
        </button>
        <button 
          type="button" 
          className={rightClass} 
          onClick={this.handleRightClick}
        >
          Right
        </button>
      </div>
    );
  }
}
// END
