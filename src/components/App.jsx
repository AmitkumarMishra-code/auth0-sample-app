import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home';
import Login from './Login';

export default function App() {
    const { isLoading } = useAuth0()
    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <Router>
            <Switch>
                <Route exact path='/login'>
                    <Login />
                </Route>
                <PrivateRoute exact path='/' component={Home} />
            </Switch>
        </Router>
    )
}

function PrivateRoute ({ component: Component,path, ...rest }) {
    const { loading, isAuthenticated } = useAuth0();
  
    useEffect(() => {
      if (loading || isAuthenticated) {
        return;
      }
    }, [loading, isAuthenticated]);
  
    const render = props =>
      isAuthenticated === true ? <Component {...props} /> : <Login />;
  
    return <Route path={path} render={render} {...rest} />;
  };
  