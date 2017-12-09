import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom'

const query = gql`
{
  Kataloge{
    displayname,
    description,
    key
  }
}
`;

class Kataloge extends Component {
        render(){
            let {data} = this.props;
            if(data.loading) return <div>Loading..</div>;
            return(
                <div className="row center">
                    <h1>Katalog</h1>
                    {data.Kataloge.map((Katalog) => (
                        <Link to={`/Kurs/${Katalog.key}/`}>
                            <div className="col s12 m6">
                                <div className="card blue-grey darken-1">
                                    <div className="card-content white-text">
                                        <span className="card-title">{Katalog.displayname}</span>
                                        <p dangerouslySetInnerHTML={{ __html: Katalog.description }}/>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            );
        }
}


export default Kataloge = graphql(query)(Kataloge)
