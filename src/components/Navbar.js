import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Navbar extends Component{
    render(){
            return(
                <div className="navbar-fixed ">
                <nav className="z-depth-0 light-green">
                    <div className="nav-wrapper">
                        <ul className="flex">
                            <Link className="flex-grow center flex" to={`/News`}>
                            <li className="flex-grow center">News</li>
                            </Link>
                            <Link className="flex-grow center flex" to={`/Kurse`}>
                            <li className="flex-grow center">Meine Kurse</li>
                            </Link>
                            <Link className="flex-grow center flex" to={`/Forum`}>
                            <li className="flex-grow center">Forum</li>
                            </Link>
                        </ul>
                    </div>
                </nav>
                </div>
            )
    }
}
