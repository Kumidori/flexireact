import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';

const query = gql`
{
  News {
    title
    link
    description
  }
}
`;


class News extends Component {
    render(){
        let {data} = this.props;
        console.log(data);
        if(data.loading) return <div>Loading..</div>;
        return(
            <div>
                <Topbar/>
                <Navbar/>
            {data.News.map((News) => (
            <div class="card light-green darken-3">
                <i class="material-icons left white-text">
                    chat_bubble_outline
                </i>
                <div class="card-content white-text">
                    <span class="card-title">
                        {News.title}
                    </span>
                    
                    {News.description}
                </div>
            </div>
            ))}
            </div>
        );
    }
}
export default News = graphql(query)(News)