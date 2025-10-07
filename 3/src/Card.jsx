import React from 'react';

// BEGIN (write your solution here)
export default class Card extends React.Component {
    render () {
    
    const title = this.props.title || "title";
    const text = this.props.text || "text";

        return (
            <div className="card">
                <div className="card-body">
                    {title && <h4 className="card-title">{title}</h4>}
                    {text && <p className="card-text">{text}</p>}
                </div>
            </div>
        );
    }
}
// END
