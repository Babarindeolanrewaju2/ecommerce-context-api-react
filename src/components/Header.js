import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Header extends Component {
  render() {
    const {cart} = this.context;
    return (
      <div className="nav">
          <div className="nav-list">
                        <p><Link to="/">Home</Link></p>
                        <p><Link to="/product">Product</Link></p>
                        <p><Link to="/cart">Cart  <span>{cart && cart.length > 0}</span></Link></p>
                    </div>

      </div>
    );
  }
}

export default Header;
