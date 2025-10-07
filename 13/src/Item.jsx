import React from 'react';

// BEGIN (write your solution here)
export default class Item extends React.Component {
  handleRemove = () => {
    this.props.onRemove();
  };

  render() {
    const { task } = this.props;
    
    return (
      <div>
        <div className="row">
          <div className="col-auto">
            <button 
              type="button" 
              className="btn btn-primary btn-sm"
              onClick={this.handleRemove}
            >
              -
            </button>
          </div>
          <div className="col">{task}</div>
        </div>
        <hr />
      </div>
    );
  }
}
// END
