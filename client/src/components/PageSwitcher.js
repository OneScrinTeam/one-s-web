import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export class PageSwitch extends Component {
    render() {
        return (
            <div>
                <div className="PageSwitcher">
                <NavLink to="/sign-in" activeClassName="PageSwitcher-Item-Active" className="PageSwitcher-Item">Sign In</NavLink>
                <NavLink exact to="/" activeClassName="PageSwitcher-Item-Active" className="PageSwitcher-Item" >Sign Up</NavLink>
              </div>
            </div>
        )
    }
}

export default PageSwitch;
