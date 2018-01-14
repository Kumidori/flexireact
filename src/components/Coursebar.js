
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Coursebar extends Component{
    render(){
        return(
            <div className="navbar-fixed ">
                <nav className="z-depth-0 light-green">
                    <div className="nav-wrapper">
                        <ul className="flex">
                            <Link className="flex-grow center flex" to={`/Kurs/${this.props.courseKey}`}>
                                <li className="flex-grow center">Info</li>
                            </Link>
                            <Link className="flex-grow center flex" to={`/Kurs/${this.props.courseKey}/Files/${this.props.nodeId}`}>
                                <li className="flex-grow center">Dateien</li>
                            </Link>
                            <Link className="flex-grow center flex" to={`/Forum/${this.props.courseKey}/nodeId/${this.props.forumId}`}>
                                <li className="flex-grow center">Forum</li>
                            </Link>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
