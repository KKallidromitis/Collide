import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import Navigation from '../Navigation/index';
import LandingPage from '../Landing/index';
// import SignUpPage from '../SignUp/index';
import SignInPage from '../SignIn/index';
// import PasswordForgetPage from '../PasswordForget/index';
import HomePage from '../Home/index';
import EventPage from '../Event/index';
// import AccountPage from '../Account/index';
// import AdminPage from '../Admin/index';
import * as ROUTES from '../../constants/routes';
const App = () => (
  <Router>
    <div>
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      {/* <Route path={ROUTES.SIGN_UP} component={SignUpPage} /> */}
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      {/* <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} /> */}
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.EVENT} component={EventPage} />
      {/* <Route path={ROUTES.ACCOUNT} component={AccountPage} /> */}
      {/* <Route path={ROUTES.ADMIN} component={AdminPage} /> */}
    </div>
  </Router>
);
export default App;
