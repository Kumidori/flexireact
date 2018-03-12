import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';
const query = gql`
query{
    Kurse(userId:"77725698") {
    displayName,
    authors,
    description,
    key
  }
 Veranstaltungen{
  name
  short
  id
}
}
`;

class Courses extends Component {
    render(){
        let {data} = this.props;
        if(data.loading) return <div>Loading..</div>;
        return(

            <div>
                <Topbar/>
                <Navbar/>
                <div>
                    <Link to="/Katalog">
                <span className="waves-effect waves-light btn my-btn light-green darken-3">Katalog</span>
                    </Link>
                    <form className="suche">
                        <div className="input-field suche">
                            <input classname="suche" id="search" type="search" required></input>
                                <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                                <i className="material-icons">close</i>
                        </div>
                    </form>
                </div>
                {data.Kurse.map((Kurs) => (

                        <ul class="collection">
                            <Link key={Kurs.key} to={`/Kurs/${Kurs.key}/`}>
                                 <li class="collection-item  light-green darken-3 white-text"><div>{Kurs.displayName}<span class="secondary-content"><i class="material-icons white-text">subdirectory_arrow_right</i></span></div></li>
                            </Link>
                        </ul>

                ))}
                {data.Veranstaltungen.map((Kurs) => (

                    <ul class="collection">
                        <Link key={Kurs.id} to={`/Kurs/${Kurs.id}/`}>
                            <li class="collection-item  light-green darken-3 white-text"><div>{Kurs.name}<span class="secondary-content"><i class="material-icons white-text">subdirectory_arrow_right</i></span></div></li>
                        </Link>
                    </ul>

                ))}
            </div>
        );
    }
}
export default Courses = graphql(query)(Courses)