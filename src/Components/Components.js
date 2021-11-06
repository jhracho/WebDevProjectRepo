import React from "react";
import HomePage from "./Home/HomePage.js";
import AboutPage from "./About/AboutPage.js";
import ExplorePage from "./Explore/ExplorePage.js";
import CreateProtected from "./Create/CreateProtected.js";
import LogInPage from "./Log In/LogInPage.js";
import SignUpPage from "./Sign Up/SignUpPage.js";

import NavBar from "./NavBar/NavBar.js";

import{
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

const Components = () => {
  return(
     <Router>
       <NavBar />
       <Switch>
         <Route path="/" exact component={HomePage} />
         <Route path="/about" component={AboutPage} />
         <Route path="/explore" component={ExplorePage} />
         <Route path="/create" component={CreateProtected} />
         <Route path="/login" component={LogInPage} />
         <Route path="/signup" component={SignUpPage} />
         <Redirect to="/" />
       </Switch>
     </Router>
  );
};

export default Components;