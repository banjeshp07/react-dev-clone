import React from 'react';
import { NavLink } from 'react-router-dom';

const DocsSidebar = () => {
  return (
    <div className="col-md-3">
      <div className="list-group sticky-top" style={{ top: '80px' }}>
        <NavLink className="list-group-item list-group-item-action" to="/docs#intro">Introduction</NavLink>
        <NavLink className="list-group-item list-group-item-action" to="/docs#getting-started">Getting Started</NavLink>
        <NavLink className="list-group-item list-group-item-action" to="/docs#components">Components</NavLink>
        <NavLink className="list-group-item list-group-item-action" to="/docs#hooks">Hooks</NavLink>
        <NavLink className="list-group-item list-group-item-action" to="/docs#advanced">Advanced</NavLink>
      </div>
    </div>
  );
};

export default DocsSidebar;
