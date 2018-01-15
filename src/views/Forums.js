import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';

export default class Forums extends Component {
    render(){
        return(
            <div>
                <Topbar/>
                <Navbar/>
                <div>
                    <ul class="collection">
                            <li class="collection-item  light-green darken-3 white-text"><div>Allgemeines Forum OMB<span class="secondary-content"><i class="material-icons white-text">subdirectory_arrow_right</i></span></div></li>
                    </ul>
                </div>
            </div>
        );
    }
}
