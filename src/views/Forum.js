
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom'

const query = gql`
  query Posts($courseKey: String, $courseNodeId: String) {
     Posts(courseKey: $courseKey, courseNodeId: $courseNodeId) {
        key,
        title,
        body,
        author
      }
    }
`;

class Forum extends Component {
    render(){
        let {data} = this.props;
        console.log(data);
        console.log(data.Posts);
        if(data.loading) return <div>Loading..</div>;
        return(
            <div className="row center">
                <h1>Forum</h1>
                {data.Posts.map((Post) => (
                        <div className="col s12 m6">
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title">{Post.title}</span>
                                    <p>Author: {Post.author}</p>
                                    <p>Nachricht: {Post.body}</p>
                                </div>
                            </div>
                        </div>
                ))}
            </div>
        );
    }
}
const queryOptions = {
    options: props => ({
        variables: {
            courseKey: props.match.params.id,
            courseNodeId: props.match.params.nodeId
        }
    })
};


export default Forum = graphql(query, queryOptions)(Forum)