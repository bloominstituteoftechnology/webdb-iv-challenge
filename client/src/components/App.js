import React, { Component } from "react";
import logo from "../logo.svg";
import "./App.css";
import axios from "axios";
import { Route } from 'react-router-dom';
import Dishes from "./Dishes";
import Recipes from "./Recipes";

class App extends Component {
    constructor() {
        super();
        this.state = {
            url: "http://localhost:8000"
        };
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to DB-RECIPE-BOOK</h1>
                </header>
                
                {/* <Navigation /> */}
                {/* <Route exact path="/" component={Home} /> */}
                <Route path="/dishes"
                    render={props => (
                        <Dishes {...props} url={this.state.url} />
                    )}
                />
                <Route path="/recipes" component={Recipes} />
            </div>
        );
    }
}

export default App;
