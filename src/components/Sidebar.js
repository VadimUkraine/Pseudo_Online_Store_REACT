import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';


const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class Sidebar extends React.Component {
  state = {
    left: false,
  };



  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
          <List component="nav">
            <li>
              <ListItem button component={Link} to="/">
                <ListItemText primary="Main" />
              </ListItem>
            </li>
            <li>
              <ListItem button component={Link} to="/catalog">
                <ListItemText primary="Catalog" />
              </ListItem>
            </li>
            <li>
              <ListItem button component={Link} to="/add-good">
                <ListItemText primary="Add Good" />
              </ListItem>
            </li>
          </List>
      </div>
    );

    return (
      <div>
        <Drawer 
			    open={this.props.open} 
	        onClose={()=> this.props.onToggle()}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={()=> this.props.onToggle()}
            onKeyDown={()=> this.props.onToggle()}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidebar);