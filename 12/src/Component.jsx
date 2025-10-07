import get from 'lodash/get';
import uniqueId from 'lodash/uniqueId';
import React from 'react';

// BEGIN (write your solution here)
export default class EventLogger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    
    this.handlePlusClick = this.handlePlusClick.bind(this);
    this.handleMinusClick = this.handleMinusClick.bind(this);
  }

  handlePlusClick() {
    const currentItems = this.state.items;
    let newValue = 0;
    
    if (currentItems.length > 0) {
      newValue = currentItems[0] + 1;
    } else {
      newValue = 1;
    }
    
    this.setState({
      items: [newValue, ...currentItems]
    });
  }

  handleMinusClick() {
    const currentItems = this.state.items;
    let newValue = 0;
    
    if (currentItems.length > 0) {
      newValue = currentItems[0] - 1;
    } else {
      newValue = -1;
    }
    
    this.setState({
      items: [newValue, ...currentItems]
    });
  }

  handleItemClick(index) {
    const newItems = [...this.state.items];
    newItems.splice(index, 1);
    
    this.setState({
      items: newItems
    });
  }

  render() {
    const { items } = this.state;
    
    return (
      <div>
        <div className="btn-group font-monospace" role="group">
          <button 
            type="button" 
            className="btn btn-outline-success"
            onClick={this.handlePlusClick}
          >
            +
          </button>
          <button 
            type="button" 
            className="btn btn-outline-danger"
            onClick={this.handleMinusClick}
          >
            -
          </button>
        </div>
        
        {items.length > 0 && (
          <div className="list-group">
            {items.map((item, index) => (
              <button
                key={index}
                type="button"
                className="list-group-item list-group-item-action"
                onClick={() => this.handleItemClick(index)}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
}
// END
