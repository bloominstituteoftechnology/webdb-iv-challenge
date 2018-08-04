import React, { Component } from "react";
import logo from "../logo.svg";
import "./App.css";
import axios from "axios";
import { Navigation } from "./Navigation";
import { NavLink } from "../../node_modules/react-router-dom";

class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            arr1: [],
            arr2: []
        };
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        axios
            .get(`${this.props.api}/recipes/${id}`)
            .then(({ data }) => {
                console.log(data);
                this.setState({
                    data,
                    arr1: data.ingredients,
                    arr2: data.directions
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="App">
                <div>
                    {this.state.arr1.map(item => {
                        return (
                            <p>{`${item.quantity} ${item.measurements} ${item.name}`}</p>
                        );
                    })}
                </div>
                <div>
                    {this.state.arr2.map(item => {
                        return (
                            <p>{item.description}</p>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Recipe;
