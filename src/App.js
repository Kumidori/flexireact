import React, { Component } from 'react';
import './App.css';
import Home from './views/Home';
import Courses from './views/Courses';
import Forums from './views/Forums';
import Postings from './views/Postings';
import News from './views/News';
import Kataloge from './views/Katalog';
import Kurs from './views/Kurs';
import Files from './views/Files';
import SubFiles from './views/SubFiles';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';
import Forum from './views/Forum'
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

                <Route exact path="/" component={Courses}/>
                <Route exact path="/Kurse" component={Courses}/>
                <Route exact path="/News" component={News}/>
                <Route exact path="/Forum" component={Forums}/>
                <Route exact path="/Katalog" component={Kataloge}/>
                <Route exact path="/Kurs/:id/" component={Kurs}/>
                <Route exact path="/Kurs/:id/Files/:nodeId" component={Files}/>
                <Route exact path="/Forum/:id/nodeId/:nodeId" component={Forum}/>
                <Route exact path="/Forum/:id/nodeId/:nodeId/messages/:key" component={Postings}/>
                <Route  path="/Kurs/:id/Files/:nodeId/:title" component={SubFiles}/>
            </div>
        </Router>
    </ApolloProvider>
    );
  }
}

export default App;
