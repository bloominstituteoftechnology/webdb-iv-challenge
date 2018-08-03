import React, { Component } from "react";
import logo from "../logo.svg";
import "./App.css";
import axios from "axios";

class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    render() {
        return <div className="App" />;
    }
}

export default Recipes;
