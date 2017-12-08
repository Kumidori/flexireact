import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom'

const query = gql`
  query Files($key: String, $courseNodeId: String) {
     Files(courseKey: $key, courseNodeId: $courseNodeId) {
        href
        title
        size
      }
    }
`;

class Files extends Component {
    render(){
        let {data} = this.props;
        console.log(data);
        if(data.FilesById) console.log("NIGGOOOOOOOO");
        if(data.loading) return <div>Loading..</div>;
        return(
            <div className="row">
                {data.Files.map((File) => (
                   <Link to={`/Kurs/${this.props.match.params.id}/Files/${this.props.match.params.nodeId}/${File.title}`}>
                        <div className="col s12 m6">
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title">{File.title}</span>
                                    <p>{File.href}</p>
                                    <p>{File.size || "Ordner"}</p>
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
            key: props.match.params.id,
            courseNodeId: props.match.params.nodeId
           // href: `https://felix.hs-furtwangen.de/restapi/repo/courses/${props.match.params.id}/elements/folder/${props.match.params.nodeId}/files/${props.match.params.title}`
        }
    })
};


export default Files = graphql(query, queryOptions)(Files)