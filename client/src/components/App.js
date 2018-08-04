import React, { Component } from "react";
import logo from "../logo.svg";
import "./App.css";
import axios from "axios";
import { Route } from 'react-router-dom';
import Dishes from "./Dishes";
import Recipes from "./Recipes";
import Home from "./Home";
import { Navigation } from "./Navigation";
import Dish from "./Dish";
import Recipe from "./Recipe";

class App extends Component {
    constructor() {
        super();
        this.state = {
            api: "http://localhost:8000"
        };
    }

    render() {
        return (
            <div className="App">
                <Navigation />
                <Route exact path="/" component={Home} />
                <Route path="/dishes"
                    render={props => (
                        <Dishes {...props} api={this.state.api} />
                    )}
                />
                <Route path="/dishes/:id"
                    render={props => (
                        <Dish {...props} api={this.state.api} />
                    )}
                />    
                <Route path="/recipes"
                    render={props => (
                        <Recipes {...props} api={this.state.api} />
                    )}
                />
                <Route path="/recipes/:id"
                    render={props => (
                        <Recipe {...props} api={this.state.api} />
                    )}
                />
            </div>
        );
    }
}

export default App;
