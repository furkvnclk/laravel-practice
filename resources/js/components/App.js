import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import ProjectsList from './ProjectsList'
import CreateProject from "./CreateProject";
import SingleProject from "./SingleProject";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={ProjectsList} />
                        <Route exact path='/create' component={CreateProject} />
                        <Route exact path='/:id' component={SingleProject} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
