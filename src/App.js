import React ,{ useEffect} from 'react'
import clsx from 'clsx';
import Header from './componets/pages/fragments/Header';
import Menu from './componets/pages/fragments/Menu';
import Login from './componets/pages/Login';
import { Container } from '@material-ui/core'
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles';
import Jobservice from './componets/pages/Jobservice';
import JobserviceEdit from './componets/pages/JobserviceEdit';
import JobserviceCreate from './componets/pages/JobserviceCreate';
import { useSelector,useDispatch } from 'react-redux';
import * as loginActions from "./actions/login.action";
import Dashboard from './componets/pages/Dashboard';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));


// Protected Route
const SecuredRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      // ternary condition
      loginActions.isLoggedIn() ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

const LoginRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      // ternary condition
      loginActions.isLoggedIn() ? (
        <Redirect to="/jobservice" />
      ) : (
        <Login {...props} />
      )
    }
  />
);
export default function App() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = React.useState(true);
  
  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };
  
  const dispatch = useDispatch()
  React.useEffect(() => {
    console.log("App created");
    dispatch(loginActions.reLogin());
  }, []);
  const loginReducer = useSelector(({ loginReducer }) => loginReducer);
  return (
    <Router>
      {loginReducer.result && !loginReducer.error && (
        <Header handleDrawerOpen={handleDrawerOpen} open={openDrawer} />
      )}
      {loginReducer.result && !loginReducer.error && (
        <Menu open={openDrawer} handleDrawerClose={handleDrawerClose} />
      )}
     
       
      <Switch>
      <LoginRoute path="/login" component={Login}/>
      <SecuredRoute path="/dashboard" component={Dashboard}/>  
      <SecuredRoute path="/jobservice" component={Jobservice}/>  
      <SecuredRoute path="/jobserviceCreate" component={JobserviceCreate}/>  
      <SecuredRoute path="/jobserviceEdit/:id" component={JobserviceEdit}/>  
      <Route exact={true} path="/" Redirect to="/login" component={Login}/>
      
    </Switch>
  
   </Router>
  )
}
