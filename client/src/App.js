import React from 'react'
import axios from 'axios'

export default class App extends React.Component {
    state = { dishes: [] }

    componentDidMount() {
        axios
            .get('http://localhost:8000/api/recipes')
            .then(data => this.setState({ dishes: data.data }))
            .catch(e => console.log(e))
    }

    render() {
        return (
            <div className='app'>
                <ol>
                    {this.state.dishes.map(dish => {
                        return <li key={dish.id}>{dish.name}</li>
                    })}
                </ol>
            </div>
        )
    }
}
