import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';

export default class News extends Component {
    render(){
        return(
            <div className="row center">
                <Topbar/>
                <Navbar/>

            </div>
        );
    }
}
