import React, { Component } from 'react';
import { Scene, Router, ActionConst, Actions } from 'react-native-router-flux';
import Home from './Home';

const scene = Actions.create(
    <Scene key="app">
        <Scene key="root" hideNavBar inital={true} type={ActionConst.RESET}>
            <Scene key="home" component={Home} inital={true} />
        </Scene>
    </Scene >
)
class Root extends Component {

    constructor(props) {
        super(props);
	}
	
    render() {
        return (
            <Router scenes={scene} />
        );
    }

}

module.exports = Root;
