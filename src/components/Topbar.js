import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class Topbar extends Component{
    render(){
        return(
            <div className="navbar-fixed">
            <nav className="z-depth-0 light-green">
                <div className="nav-wrapper">
                    <Link to="/">
                    <span className="brand-logo center">FlexiLearn</span>
                    </Link>
                    <ul className="right">
                        <li><a><i className="material-icons">person</i></a></li>
                    </ul>

                </div>
            </nav>
            </div>
        )
    }
}
