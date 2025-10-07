import React from 'react';

// BEGIN (write your solution here)
export default function getCard(props) {

    const { title, text } = props;

    if(!title && !text) return null;

    const titleElement = title ? <h4 className="card-title">{title}</h4> : null;
    const textElement = text ? <p className="card-text">{text}</p> : null;

    return (
        <div className="card">
            <div className="card-body">
                {titleElement}
                {textElement}
            </div>
        </div>
    );
    
}
// END
