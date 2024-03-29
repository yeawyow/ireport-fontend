import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withRouter } from "react-router-dom";
import * as loginActions from "./../../../actions/login.action";
import { useDispatch } from "react-redux";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <div>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: props.open,
        })}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={clsx(classes.menuButton, props.open && classes.hide)}
            color="inherit"
            aria-label="menu"
            onClick={props.handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            I REPORT ระบบรายงานออนไลน์ โรงพยาบาลอากาศอำนวย
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              dispatch(loginActions.logout({ ...props }));
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default withRouter(Header);
