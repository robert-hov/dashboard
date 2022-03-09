import React from 'react'
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: RouteComponent, location, ...rest }) => {
    console.log(123)
    const expireDate = localStorage.getItem('accessTokenExpiresAt');
    const now = new Date().getTime();
    let isTokenExpired;
    if (expireDate) {
        const activeExpiredDate = new Date(expireDate).getTime();
        if (activeExpiredDate > now) {
            isTokenExpired = true;
        }
    }
    const hasToken = !!localStorage.getItem('token');
    let Component;
    if (isTokenExpired) {
        Component = props => (<RouteComponent {...props} />);
    } else {
        localStorage.clear();
        localStorage.token && window.location.reload();
        hasToken && window.location.reload();
        Component = () => (
            <Redirect to={{
                pathname: '/login',
                state: { from: location }
            }} />);
    }
    return (
        <Route {...rest} render={props => Component(props)} />
    )
};
PrivateRoute.propTypes = {
    component: PropTypes.any,
    location: PropTypes.object,
    rest: PropTypes.object,
};

export default PrivateRoute;