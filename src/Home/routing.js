import React from 'react'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import App from '../components/App/App';

export default function routing() {
    return (
        <div>
            <Router>
                <Link to="/App"></Link>
                <Link to="/home">users</Link>
                <Switch>
                    <Route path="/App" >
                        <App />
                    </ Route>
                    <Route exact path="/home" >
                        <Home />
                    </Route>
                </ Switch>
            </Router>

        </div>
    )
}
