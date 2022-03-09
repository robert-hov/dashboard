import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PublicRoute = ({ children, ...rest }) => {
    const loggedIn = () => !!localStorage.token
    if (loggedIn()) return <Redirect to={`/dashboard`} />
    return (<>
            <Route {...rest}>{children}</Route>
        </>
    )
};
PublicRoute.propTypes = {
    children: PropTypes.objectOf(PropTypes.any).isRequired,
    rest: PropTypes.object,
};

export default PublicRoute;