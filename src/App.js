import React, { Component } from 'react';
import CardsList from './CardsList.js';
import Searchbox from './Searchbox.js';
import './App.css';
import Scroll from './Scroll.js';

class App extends Component {
    constructor () {
        super();

        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( result => result.json())
        .then( result => this.setState({ robots: result }));
    }
    
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render () {
        let filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
         });

         if (this.state.robots.length === 0) {
             return <h1 className='tc'>Loading...</h1>
         } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <Searchbox searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <CardsList robots = {filteredRobots}/>
                    </Scroll>
                </div>
            );
         } 
    }    
}

export default App;