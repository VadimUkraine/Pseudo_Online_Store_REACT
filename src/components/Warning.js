import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';


const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  attention_title:{
    color: 'red',
    fontWeight: 'bold',
    paddingLeft:'20px',
  },
  attention_content:{
    fontWeight: 'bold',
    paddingLeft:'20px',
  },
  modal_wrapper:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

class Warning extends React.Component {
  state = {
    open: this.props.open,
  };


  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
          className={classes.modal_wrapper}
        >
          <div className={classes.paper}>
            <Typography variant="h6" id="modal-title" className={classes.attention_title}>
              ATTENTION!
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description" className={classes.attention_content}>              
              This page for adding a product is available only for users with the ADMIN role.
            </Typography>
          </div>
        </Modal>
      </div>
    );
  }
}

Warning.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Warning);