import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from '../Landing/index';
import * as ROUTES from '../../constants/routes';

/*import SignUpPage from '../SignUp/index';
import SignInPage from '../SignIn/index';
import PasswordForgetPage from '../PasswordForget/index';
import HomePage from '../Home/index';
import AccountPage from '../Account/index';
import AdminPage from '../Admin/index'; */

/* const App = () => (
  <Router>
    <div>
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
    </div>
  </Router> */

const App = () => (
  <Router>
    <div>
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
    </div>
  </Router>

);
export default App;
