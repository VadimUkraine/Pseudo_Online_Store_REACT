import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as uuid from 'uuid/v4';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { connect } from 'react-redux';
import addGood from '../store/actions/addSingleActions';

const styles = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 20,
    overflow: 'hidden', 
    minHeight: '100vh',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
    backgroundColor: '#FFF'
  },
  button: {
    margin: theme.spacing.unit,
  },
});

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}



class FormAdd extends React.Component { 

  constructor(){
    super()

    this.state = {
      name: '',
      description: '',
      quantity: '',
      price: '',
      multiline: 'Controlled',
      isSnackbarOpen: false,
      isAddGood:'Good was added',
      Transition: TransitionLeft
    };

    this.handleSave = this.handleSave.bind(this);
  }

  handleChange = name => event => {
    if(name ===  'quantity'){
      this.setState({ [name]: event.target.value.split('.', 1)});
    }else{
      this.setState({ [name]: event.target.value});
    }

   


  };

  handleSave(){
    let item = {
        id: uuid(),
        name:this.state.name,
        image: 'img1.png', 
        descr: this.state.description,
        qnt: Number(this.state.quantity),
        price: Number(this.state.price)
    }
    if(this.state.name.length && this.state.description.length && this.state.price.length && this.state.quantity.length){
      this.props.addGoodToState(item);
      this.saveLocally();
      this.setState({isAddGood:'Good was added', name: '', description: '', price:'', quantity: '', isSnackbarOpen: true,});
    }else{
      this.setState({isAddGood: 'All fields must be filled ', isSnackbarOpen: true,});
    }
    
  };

  saveLocally(){
    if(JSON.parse(localStorage.getItem('goods'))){
      var existGoods = JSON.parse(localStorage.getItem('goods'));
      existGoods.push({
        id: uuid(),
        name:this.state.name,
        image: 'img1.png', 
        descr: this.state.description,
        qnt: Number(this.state.quantity),
        price: Number(this.state.price)
      });
      localStorage.setItem("goods", JSON.stringify(existGoods));

    }else{
      localStorage.setItem("goods", JSON.stringify([{
        id: uuid(),
        name:this.state.name, 
        image: 'img1.png',
        descr: this.state.description,
        qnt: Number(this.state.quantity),
        price: Number(this.state.price)
      }]))
    }

  }
  



  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off"> 
        <Typography variant="h4" gutterBottom>
          Adding Good
        </Typography>
        <TextField
          id="standard-with-placeholder"
          label="Name of good"
          placeholder="Name of good"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />

        <TextField
          id="standard-textarea"
          label="Short description"
          placeholder="Short description"
          multiline
          className={classes.textField}
          margin="normal"
          value={this.state.description}
          onChange={this.handleChange('description')}          
        /> 
        <TextField
          id="filled-number"
          label="Quantity"
          placeholder="Quantity"
          value={this.state.quantity}
          onChange={this.handleChange('quantity')}
          type="number"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="filled-number"
          label="Price per good"
          placeholder="Price per good"
          value={this.state.price}
          onChange={this.handleChange('price')}
          type="number"
          className={classes.textField}
          margin="normal"
        />
        <p>
          <Button variant="contained" color="primary" className={classes.button} onClick={this.handleSave}>
              Add new good
          </Button>
        </p> 
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
          message={<span id="message-id">{this.state.isAddGood}</span>}
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
      </form>
    );
  }
}

FormAdd.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    addGoodToState: (item) => dispatch(addGood(item)),   
  };
}


export default connect(null, mapDispatchToProps)(withStyles(styles)(FormAdd));

