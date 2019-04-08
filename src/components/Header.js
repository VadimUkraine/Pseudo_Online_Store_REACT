import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import logo from '../images/cola.png';


const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  user_role_name:{
    color: '#FFF',
  },
};

class Header extends Component {

  constructor(){
    super()

    this.state = {

    }



  }

render() {
  const { classes } = this.props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="Menu"
            onClick={()=> this.props.onLeftIconClick()}>
            <MenuIcon />
          </IconButton>
          <img src={logo} className="logo" alt="logo" />
          <Typography variant="subtitle2" gutterBottom className={classes.user_role_name} >
            
            {this.props.role}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};


const mapStateToProps = (state) => ({
  role: state.character.role,
})




export default connect(mapStateToProps, null)(withStyles(styles)(Header));

