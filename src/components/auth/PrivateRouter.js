import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={({props, location}) => (
      localStorage.getItem("token")
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/user/login',
        state: {from: location}
      }} />
  )} />
)

export default PrivateRoute;