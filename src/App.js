import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import HomePage from "./views/HomePage";
import React from "react";
import Register from "./views/Register";
import NavBar from "./components/NavBar";
import AdminPage from "./views/AdminPage";
import LoginPage from "./views/LoginPage";
import Logout from "./views/Logout";
import MyDashboard from "./views/MyDashboard";
import NotFound from "./views/NotFound";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar/>
                <Switch>
                    <AuthContextProvider>
                        <Route exact path='/' component={HomePage}/>
                        <Route path='/register' component={Register}/>
                        <Route path='/admin' component={AdminPage}/>
                        <Route path='/login' component={LoginPage}/>
                        <Route path='/logout' component={Logout}/>
                        <Route path='/myDashboard' component={MyDashboard}/>
                        {/*<Route path='*' component={NotFound}/>*/}
                    </AuthContextProvider>
                </Switch>
            </Router>

        </div>
    );
}

export default App;
