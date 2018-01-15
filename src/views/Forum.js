
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom'
import Titlebar from "../components/Titlebar";
import Coursebar from "../components/Coursebar";

const query = gql`
  query Posts($courseKey: String, $courseNodeId: String) {
     Posts(courseKey: $courseKey, courseNodeId: $courseNodeId) {
        key,
        title,
        body,
        author
      }
       Kurs(key:$courseKey) {
            displayName,
            authors,
            description,
            key
          }
          Folders(courseKey:$courseKey){
            detailsName,
            courseNodeId,
            name
          }
          Forum(courseKey: $courseKey) {
            courseNodeId,
            detailsName,
            subscribed
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
                <Titlebar title={data.Kurs.displayName}/>
                <Coursebar courseKey={data.Kurs.key} nodeId={data.Folders.courseNodeId} forumId={data.Forum.courseNodeId}/>
                {data.Posts.map((Post) => (
                        <div className="col s12 m6">
                            <div className="card light-green darken-3">
                            <i class="material-icons left white-text">chat_bubble_outline</i>
                                <div className="card-content white-text">
                                    
                                    <span className="card-title">{Post.title}</span>
                                    <p>
                                        Nachricht:
                                        <span dangerouslySetInnerHTML={{ __html: Post.body }}/>
                                    </p>
                                </div>
                                <div className="card-action white-text">
                                    <p>Author: {Post.author}</p>
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