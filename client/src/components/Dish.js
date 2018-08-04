import React, { Component } from "react";
import logo from "../logo.svg";
import "./App.css";
import axios from "axios";
import { Navigation } from "./Navigation";
import { NavLink } from "../../node_modules/react-router-dom";

class Dish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        axios
            .get(`${this.props.api}/dishes/${id}`)
            .then(({ data }) => {
                console.log(data);
                this.setState({ data: data.recipes });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="App">
                {this.state.data ? this.state.data.map(item => {
                    return (
                        <NavLink to={`/recipes/${item.id}`}><p>{item.name}</p></NavLink>
                    );
                }): null}
            </div>
        );
    }
}

export default Dish;
