import Register from '../pages/register';
import Login from '../pages/login';
import Home from '../pages/home';

export const PAGES = {
  "register": {
    title: "Register",
    component: <Register/>,
    ifUser: false,
    ifNoUser: true
  },
  "login": {
    title: "Login",
    component: <Login/>,
    ifUser: false,
    ifNoUser: true
  },
  "home": {
    title: "Home",
    component: <Home/>,
    ifUser: true,
    ifNoUser: true
  },
  "services": {
    title: "Services",
    component: <h1>Services</h1>,
    ifUser: true,
    ifNoUser: false
  },
  "alldata": {
    title: "All Data",
    component: <h1>All Data</h1>,
    ifUser: true,
    ifNoUser: true
  }
}