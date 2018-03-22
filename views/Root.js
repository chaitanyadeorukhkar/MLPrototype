import React, { Component } from 'react';
import { Scene, Router, ActionConst, Actions } from 'react-native-router-flux';
import Home from './Home';
import EmployeeHome from './EmployeeHome';

const scene = Actions.create(
    <Scene key="app" hideNavBar>
            <Scene key="home" component={Home} initial={true}  />
            <Scene key="EmployeeHome" component={EmployeeHome} type={ActionConst.RESET}/>
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
