import React, { Component } from "react";
import logo from "../logo.svg";
import "./App.css";
import axios from "axios";
import { NavLink } from "../../node_modules/react-router-dom";

class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        axios
            .get(`${this.props.api}/recipes`)
            .then(({ data }) => {
                this.setState({ data });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="App">
                {this.state.data.map(item => {
                    return (
                        <NavLink to={`/recipes/${item.id}`}><p>{item.name}</p></NavLink>
                    );
                })}
            </div>
        );
    }
}

export default Recipes;
