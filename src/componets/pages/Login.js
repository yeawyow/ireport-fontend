import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import * as loginActions from './../../actions/login.action'
import {useDispatch,useSelector} from 'react-redux'
import { Alert } from '@material-ui/lab';
const useStyles = makeStyles(theme=>({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login(props) {
  const classes = useStyles();
const [account, setAccount] = React.useState({
  username:"",
  passwordjwt:""
})
const dispatch = useDispatch()
const loginReducer = useSelector(({ loginReducer }) => loginReducer);
  return (
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
           I REPORT ระบบรายงานออนไลน์ โรงพยาบาลอากาศอำนวย
        </Typography>
        </div>
        <form className={classes.form} noValidate onSubmit={e=>{
          e.preventDefault();
          dispatch(loginActions.login({ ...account, ...props }));
        }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={e => {
              setAccount({
                ...account,
                username: e.target.value
              });
            }}
            id="Username"
            label="Username"
            name="Username"
            autoComplete="UserName"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={e => {
              setAccount({
                ...account,
                passwordjwt: e.target.value
              });
            }}
            name="Passwordjwt"
            label="Password"
            type="password"
            id="Passwordjwt"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In1
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
    </Container>
     
   
  );
}
