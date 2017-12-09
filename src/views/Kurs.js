import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom'

const query = gql`
query KursDetails($key:String){
  Kurs(key:$key) {
    displayName,
    authors,
    description,
    key
  }
  Folders(courseKey:$key){
    detailsName,
    courseNodeId,
    name
  }
  Forum(courseKey: $key) {
    courseNodeId,
    detailsName,
    subscribed
  }
}
`;

class Kurs extends Component {
    render(){
        let {data} = this.props;
        if(data.loading) return <div>Loading..</div>;
        let forumLink = null;
        if(data.Forum) {
            forumLink = (
                <Link to={`/Forum/${data.Kurs.key}/nodeId/${data.Forum.courseNodeId}`}>
                    <p>{data.Forum.detailsName}</p>
                </Link>
            );
        }

        return(
            <div className="row">
                    <div>
                    <p>{data.Kurs.displayName}</p>
                    <p dangerouslySetInnerHTML={{ __html: data.Kurs.description }}/>
                    <Link to={`/Kurs/${data.Kurs.key}/Files/${data.Folders.courseNodeId}`}>
                         <p>{data.Folders.detailsName}</p>
                    </Link>

                        {forumLink}
                    </div>
            </div>
        );
    }
}
const queryOptions = {
    options: props => ({
        variables: {
            key: props.match.params.id
        }
    })
};


export default Kurs = graphql(query, queryOptions)(Kurs)