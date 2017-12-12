
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom'
import Verzeichnis from './Verzeichnis';


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
        <Verzeichnis datafiles={data}/>
        )
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