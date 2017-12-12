import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class Verzeichnis extends Component{
    render(){
        let {data} = this.props;
        console.log(this.props.match.params);
        
            return(
                <div className="row">
                {data.Files.map((File) => (
                    <div className="col s12 m6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <Link to={`/Kurs/${this.props.match.params.id}/Files/${this.props.match.params.nodeId}/${this.props.match.params.title}/${File.title}`}>
                                <span className="card-title">{File.title}</span>
                                </Link>
                                <p>{File.href}</p>
                                <p>{File.size || "Ordner"}</p>
                                <a target="_blank" href={File.href}>Anzeigen</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            )
    }
}
