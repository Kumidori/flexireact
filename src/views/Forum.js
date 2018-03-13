
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
    truncate(string){
        let length = 170;
        if(string.length>length) return string.substring(0,length)+"...";
        return string;
    }
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
                    <Link key={Post.id} to={`/Forum/${data.Kurs.key}/nodeId/${data.Forum.courseNodeId}/messages/${Post.key}`}>
                        <div className="col s12 m6">
                            <div className="card light-green darken-3">
                            <i class="material-icons left white-text">chat_bubble_outline</i>
                                <div className="card-content white-text">
                                    
                                    <span className="card-title">{Post.title}</span>
                                    <p>
                                        Nachricht:
                                        <span dangerouslySetInnerHTML={{ __html: this.truncate(Post.body) }}/>
                                    </p>
                                </div>
                                <div className="card-action white-text">
                                    <p>Author: {Post.author}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
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