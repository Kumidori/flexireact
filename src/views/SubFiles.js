
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom'

const query = gql`
  query Files($href: String) {
     Files(href: $href) {
        href
        title
        size
      }
    }
`;

class SubFiles extends Component {
    render(){
        let {data} = this.props;
        console.log(data);
        console.log(this.props.match.params);
        if(data.loading) return <div>Loading..</div>;
        return(
            <div className="row">
                {data.Files.map((File) => (
                    <Link to={`/Kurs/${this.props.match.params.id}/Files/${this.props.match.params.nodeId}/${this.props.match.params.title}/${File.title}`}>
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
            href: `https://felix.hs-furtwangen.de/restapi/repo/courses/${props.match.params.id}/elements/folder/${props.match.params.nodeId}/files/${props.match.params.title}`
        }
    })
};


export default SubFiles = graphql(query, queryOptions)(SubFiles)