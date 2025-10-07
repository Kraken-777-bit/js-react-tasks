import { uniqueId } from 'lodash';
import React from 'react';
import Item from './Item.jsx';

// BEGIN (write your solution here)
export default class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      inputValue: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({
      inputValue: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    if (this.state.inputValue.trim() === '') {
      return;
    }
    
    const newItem = {
      id: uniqueId(),
      task: this.state.inputValue
    };
    
    this.setState(prevState => ({
      items: [newItem, ...prevState.items],
      inputValue: ''
    }));
  }

  handleRemoveItem = (id) => {
    this.setState(prevState => ({
      items: prevState.items.filter(item => item.id !== id)
    }));
  }

  render() {
    const { items, inputValue } = this.state;
    
    return (
      <div>
        <div className="mb-3">
          <form className="d-flex" onSubmit={this.handleSubmit}>
            <div className="me-3">
              <input
                type="text"
                value={inputValue}
                required
                className="form-control"
                placeholder="I am going..."
                onChange={this.handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">add</button>
          </form>
        </div>
        
        {items.map(item => (
          <Item
            key={item.id}
            task={item.task}
            onRemove={() => this.handleRemoveItem(item.id)}
          />
        ))}
      </div>
    );
  }
}
// END
