import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';
import Titlebar from "../components/Titlebar";
import Coursebar from "../components/Coursebar";

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

        return(
            <div className="row">
                <Titlebar title={data.Kurs.displayName}/>
                <Coursebar courseKey={data.Kurs.key} nodeId={data.Folders.courseNodeId} forumId={data.Forum.courseNodeId}/>
                    <div>
                    <p>{data.Kurs.displayName}</p>
                    <p dangerouslySetInnerHTML={{ __html: data.Kurs.description }}/>
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