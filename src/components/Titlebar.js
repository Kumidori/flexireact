import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class Titlebar extends Component{
    static contextTypes = {
        router: () => true, // replace with PropTypes.object if you use them
    };

    truncate(string){
        let length = 20
        if(string.length>length) return string.substring(0,length)+"...";
        return string;
    }
    render(){
        return(
            <div className="navbar-fixed">
                <nav className="z-depth-0 light-green">
                    <div className="nav-wrapper">
                            <span className="brand-logo center font-small">{this.truncate(this.props.title)}</span>

                        <ul className="left">
                            <li onClick={this.context.router.history.goBack}><a><i className="material-icons">arrow_back</i></a></li>
                        </ul>

                    </div>
                </nav>
            </div>
        );
    }
}
