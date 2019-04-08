import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

class Footer extends Component {
  
  render(){
  const { classes } = this.props;

  let goods = 0;
  let priceSum = 0;

  for (var b=0; b<this.props.allGoods.goods.length; b++){
    goods += this.props.allGoods.goods[b].qnt;
    if(this.props.allGoods.goods[b].price <0){
    priceSum -= (this.props.allGoods.goods[b].price*this.props.allGoods.goods[b].qnt);
    }else{
      priceSum += (this.props.allGoods.goods[b].price*this.props.allGoods.goods[b].qnt);
    }
  
  }
  priceSum = priceSum.toFixed(2);
  let average = (priceSum/goods).toFixed(2);
  if(average === 'NaN'){
    average = 0.00;
    average = average.toFixed(2);
  }
  
  return (
    <footer>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          General information
        </Typography>
        <Typography component="p">
          Total amount of goods: <span style={{color:'blue'}}>{goods}</span>
        </Typography>
        <Typography component="p">
          The sum of the prices of all goods:  <span style={{color:'blue'}}>{priceSum}</span>
        </Typography>
        <Typography component="p">
          Average price:  <span style={{color:'blue'}}>{average}</span>
        </Typography>
      </Paper>
    </footer>
  );
}
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  allGoods: state.goods,
});

export default connect(mapStateToProps, null)(withStyles(styles)(Footer));