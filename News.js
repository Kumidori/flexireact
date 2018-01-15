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
                <div className="col s12 m6">
            <div className="card light-green darken-3">
            <i class="material-icons left white-text">chat_bubble_outline</i>
            
                <div className="card-content white-text">
                    
                    <span className="card-title">Projekt FlexiLearn</span>
                    <p>
                        Nachricht:
                        GraphQL mit Javascript
                    </p>
                    <p>Ich habe es geschafft, über JavaScript auf GraphQL zuzugreifen. Informationen im Forum und im Materialordner</p>
                </div>
                
                <div className="card-action white-text">
                    <a className="white-text">Text anzeigen</a>
                    <Link to="/Forum/96536472673363/nodeId/96536472680149"><a className="right white-text">Zum Forum</a></Link>
                </div>
            </div>
        </div>

            </div>
        );
    }
}
