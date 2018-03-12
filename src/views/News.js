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
    sortDate
    message
    date
    time
  }
}
`;


class News extends Component {
    render(){
        let {data} = this.props;
        console.log(data);
        console.log(data.News);
        if(data.loading) return <div>Loading..</div>;
        return(
            <div>
                <Topbar/>
                <Navbar/>
            {data.News.map((News) => (
            <div className="card light-green darken-3">
                <i className="material-icons left white-text">
                    chat_bubble_outline
                </i>
                <div className="card-content white-text">
                    <span className="card-title">
                        {News.title}
                    </span>
                    <p dangerouslySetInnerHTML={{ __html: News.message }}/>
                    <p>{News.date} {News.time}</p>
                </div>
            </div>
            ))}
            </div>
        );
    }
}
export default News = graphql(query)(News)