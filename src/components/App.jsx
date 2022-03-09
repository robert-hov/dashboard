import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import styled from "styled-components";
import Login from "../pages/Login/Login";
import colors from "../utils/theme";
import UserBoard from "../pages/UsersBoard/UserBoard";
import PrivateRoute from "../pages/PrivateRoute";
import PublicRoute from "../pages/PublicRoute";

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: ${colors.primaryGrayLight};
`

const App = () => {
    return (
        <StyledLayout>
            <Router>
                <Switch>
                    <PublicRoute exact path="/login">
                        <Switch>
                            <Route path="/login">
                                <Login/>
                            </Route>
                        </Switch>
                    </PublicRoute>
                    {/*<Route path="*">*/}
                    {/*    <div>404 NOT FOUND</div>*/}
                    {/*</Route>*/}
                    <PrivateRoute path="/dashboard" component={() => <UserBoard/>}/>
                </Switch>
            </Router>
        </StyledLayout>
    )
}

export default App;