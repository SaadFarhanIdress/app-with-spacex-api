import { useCallback, useState } from 'react';

import { Route, Switch } from 'react-router-dom';

import LaunchListContainer from '../components/LaunchList';
import LaunchProfileContainer from '../components/LaunchProfile';

import MissionListContainer from '../components/MissionList';
import MissionProfileContainer from '../components/MissionProfile';

import RocketListContainer from '../components/RocketList';
import RocketProfileContainer from '../components/RocketProfile';

import Home from '../components/Home/Home';

const Routes = () => {

    const [id, setId] = useState('42');
    const handleIdChange = useCallback((newId) => {
        setId(newId);
    }, []);

    return (
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/launches'>
                <LaunchListContainer handleIdChange={handleIdChange} />
            </Route>
            <Route path='/launch'>
                <LaunchProfileContainer id={id} />
            </Route>
            <Route path='/missions'>
                <MissionListContainer handleIdChange={handleIdChange} />
            </Route>
            <Route path='/mission'>
                <MissionProfileContainer id={id} />
            </Route>
            <Route path='/rockets'>
                <RocketListContainer handleIdChange={handleIdChange} />
            </Route>
            <Route path='/rocket'>
                <RocketProfileContainer id={id} />
            </Route>
        </Switch>
    )
}

export default Routes
