import React, { Component } from "react";
import logo from "../logo.svg";
import "./App.css";
import axios from "axios";

class Dishes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        axios
            .get(`${this.props.url}/dishes`)
            .then(({ data }) => {
                this.setState({ data });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="App">
                {this.state.data.map(item => {
                    return <p>{item.name}</p>;
                })}
            </div>
        );
    }
}

export default Dishes;
