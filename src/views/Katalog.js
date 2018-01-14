import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Topbar from '../components/Topbar';

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
    truncate(string){
        let length = 40;
        if(string.length>length) return string.substring(0,length)+"...";
        return string;
    }
        render(){
            let {data} = this.props;
            if(data.loading) return <div>Loading..</div>;
            return(
            <div>
                <Topbar/>
                <Navbar/>
                <div>
                    <Link to="/">
                        <span className="waves-effect waves-light btn my-btn light-green darken-3">Meine Kurse</span>
                    </Link>
                    <form className="suche">
                        <div className="input-field suche">
                            <input className="suche" id="search" type="search" required></input>
                            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                            <i className="material-icons">close</i>
                        </div>
                    </form>
                </div>
                {data.Kataloge.map((Katalog) => (
                    <ul className="collection">
                        <Link key={Katalog.key} to={`/Kurs/${Katalog.key}/`}>
                            <li className="collection-item  light-green darken-3 white-text"><div>{this.truncate(Katalog.displayname)}<span className="secondary-content"><i className="material-icons white-text">subdirectory_arrow_right</i></span></div></li>
                        </Link>
                    </ul>

                ))}

                </div>

            );
        }
}


export default Kataloge = graphql(query)(Kataloge)
