    import React, { Component } from 'react';
    import { graphql } from 'react-apollo';
    import gql from 'graphql-tag';
    import { Link } from 'react-router-dom'
    import Titlebar from "../components/Titlebar";
    import Coursebar from "../components/Coursebar";

    const query = gql`
      query Files($key: String, $courseNodeId: String) {
         Files(courseKey: $key, courseNodeId: $courseNodeId) {
            href
            title
            size
          }
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

    class Files extends Component {
        render(){
            let {data} = this.props;
            console.log(data);
            if(data.loading) return <div>Loading..</div>;
            return(
                <div className="row">
                    <Titlebar title={data.Kurs.displayName}/>
                    <Coursebar courseKey={data.Kurs.key} nodeId={data.Folders.courseNodeId} forumId={data.Forum.courseNodeId}/>
                    {data.Files.map((File) => (
                        <ul class="collection">
                            {!File.size ?
                                <Link
                                    to={`/Kurs/${this.props.match.params.id}/Files/${this.props.match.params.nodeId}/${File.title}`}>

                                            <li class="collection-item  light-green darken-3 white-text"><div>{File.title}<span class="secondary-content"><i class="material-icons white-text">subdirectory_arrow_right</i></span></div></li>

                                </Link>
                                :
                                <a href={File.href} download>
                                    <li class="collection-item  light-green darken-3 white-text"><div>{File.title}<span class="secondary-content"><i class="material-icons white-text">file_download</i></span></div></li>
                                </a>
                            }
                        </ul>
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