import ReactDOM from 'react-dom/client';
import React from 'react';

import Card from './Card.jsx';

// BEGIN (write your solution here)
const mountNode = document.getElementById('container');
const root = ReactDOM.createRoot(mountNode);
root.render(<Card />);
// END
