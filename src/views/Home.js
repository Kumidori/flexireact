import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom'
const query = gql`
{
    Kurse(userId:"77725698") {
    displayName,
    authors,
    description,
    key
  }
}
`;

class Home extends Component {
    render(){
        let {data} = this.props;
        if(data.loading) return <div>Loading..</div>;
        return(
            <div className="row center">
                <h1>Meine Kurse</h1>
                {data.Kurse.map((Kurs) => (
                <Link to={`/Kurs/${Kurs.key}/`}>
                    <div className="col s12 m6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">{Kurs.displayName}</span>
                                {Kurs.description.replace(/<p>/g,"").replace(/<\/p>/g,"")}
                            </div>
                        </div>
                    </div>
                </Link>
                ))}
            </div>
        );
    }
}
export default Home = graphql(query)(Home)