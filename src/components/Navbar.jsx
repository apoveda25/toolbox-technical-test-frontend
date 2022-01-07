import PropTypes from 'prop-types';
import React from 'react';

const Navbar = ({ color, justifyContent, first, center, last }) => {
  return (
    <nav className="navbar" style={{ backgroundColor: color ?? "#888888" }}>
      <div className={`d-flex justify-content-${justifyContent ?? 'start'} py-1 px-3 w-100`}>
        <>{first}</>
        <>{center}</>
        <>{last}</>
      </div>
    </nav >
  )
}

Navbar.propTypes = {
  color: PropTypes.string,
  first: PropTypes.node,
  center: PropTypes.node,
  last: PropTypes.node,
  justifyContent: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around', 'evenly'])
}

export default Navbar
