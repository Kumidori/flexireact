import React, { Component } from 'react';

export default class Navbar extends Component{
    render(){
            return(
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo">FlexiLearn</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="/">Meine Kurse</a></li>
                            <li><a href="/Katalog">Katalog</a></li>
                        </ul>
                    </div>
                </nav>
            )
    }
}
