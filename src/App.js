import React from "react";
import {Switch, BrowserRouter, Route,Redirect} from "react-router-dom"
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./index.scss"
import Home from "./pages/home/Home";
import UiElements from "./pages/random/uiElements";
import Widgets from "./pages/random/Widgets";
import Users from "./pages/users/Users";


const Router = () => {
    return(
        <BrowserRouter>
            <Topbar/>
            <div className="d-flex">
                <Sidebar/>
                    <div className="contentSection">
                        <Switch>
                            <Route exact path="/"  component={Home}></Route>
                            <Route exact path="/apps" exact component={Users} />
                            <Route exact path="/uielements" exact component={UiElements} />
                            <Route exact path="/widgets" exact component={Widgets} />
                        </Switch>
                    </div>
            </div>
        </BrowserRouter>
    )
}

export default Router;