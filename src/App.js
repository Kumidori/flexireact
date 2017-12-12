import React, { Component } from 'react';
import './App.css';
import Home from './views/Home';
import Kataloge from './views/Katalog';
import Kurs from './views/Kurs';
import Files from './views/Files';
import SubFiles from './views/SubFiles';
import Navbar from './views/Navbar';
import Verzeichnis from './views/Verzeichnis';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const client = new ApolloClient({
    // By default, this client will send queries to the
    //  `/graphql` endpoint on the same host
    link: new HttpLink({ uri: 'https://flexigraphql.herokuapp.com/' }),
    cache: new InMemoryCache()
});

class App extends Component {
  render() {
    return (
    <ApolloProvider client={client}>
        <Router>
            <div>
                <Navbar/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/Katalog" component={Kataloge}/>
                <Route exact path="/Kurs/:id/" component={Kurs}/>
                <Route exact path="/Kurs/:id/Files/:nodeId" component={Files}/>
                <Route  path="/Kurs/:id/Files/:nodeId/:title/" component={SubFiles}/>
            </div>
        </Router>
    </ApolloProvider>
    );
  }
}

export default App;
