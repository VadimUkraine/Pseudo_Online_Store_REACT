import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';
import inputRoleName from '../store/actions/roleNameActions';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    width: '100%',
    backgroundColor: '#FFF',
  },
});

const roles = [
  {
    value: 'USER',
    label: 'User',
  },
  {
    value: 'ADMIN',
    label: 'Admin',
  },
];

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}


class SignIn extends React.Component { 

    constructor(){
    super()

    this.state = {
        warning:'All fields must be filled',
        Transition: TransitionDown,
        isSnackbarOpen: false,
        name: '',
        role:'',
    };

    this.submitForm = this.submitForm.bind(this);
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });

  };


  submitForm(event){
    event.preventDefault();
    if(this.state.name.length && this.state.role.length){
      this.props.changeCharacter(this.state.name, this.state.role);
      this.setState({name:'', role:''});
    }else if(!this.state.name.length && !this.state.role.length){
      this.setState({isSnackbarOpen: true,});
    }else if(!this.state.name.length){
      this.setState({isSnackbarOpen: true, warning: 'Fill in the name box'});
    }else if(!this.state.role.length){
      this.setState({isSnackbarOpen: true, warning: 'Select role'});
    }
  }


  render() {
    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Сhoose your role
          </Typography>
          <form className={classes.form}>
            <TextField
              id="standard-name"
              label="User name"
              placeholder="User Name"
              className={classes.textField}
              value={this.state.name}
              onChange={this.handleChange('name')}
              margin="normal"
            />
            <TextField
              id="select_role"
              select
              label="Role"
              className={classes.textField}
              value={this.state.role}
              onChange={this.handleChange('role')}
              SelectProps={{
                MenuProps: {
                  className: classes.menu,
                },
              }}
              helperText="Please select your role"
              margin="normal"
            >
              {roles.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.submitForm}
            >
              Sign in
            </Button>
          </form>
        </Paper>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={this.state.isSnackbarOpen}
          TransitionComponent={this.state.Transition}
          autoHideDuration={3000}
          onClose={() =>this.setState({isSnackbarOpen: false})}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.state.warning}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={() =>this.setState({isSnackbarOpen: false})}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />      
      </main>
    );
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};



function mapDispatchToProps(dispatch) {
  return {
    changeCharacter: (name, role) => dispatch(inputRoleName(name, role)),
  };
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(SignIn));