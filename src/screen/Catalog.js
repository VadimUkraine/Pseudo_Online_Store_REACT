import React, { Component } from 'react';
import  {Goods} from '../constans';
import  SingleGood  from '../components/SingleGood';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { connect } from 'react-redux';
import deleteGood from '../store/actions/delSingleActions';
import deleteWholeGoods from '../store/actions/delAllActions';



const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },

});

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}



class Catalog extends Component {
  constructor(){
    super()

    this.state = {
      goods: Goods,
      isSnackbarOpen: false,
      isDeleteGood:'Good was deleted',
      Transition: TransitionLeft
    }

    this.deleteGood = this.deleteGood.bind(this);
    this.deleteAllGoods = this.deleteAllGoods.bind(this);


  }


  deleteGood(id){
    this.props.deleteGoodFromState(id);
    this.setState({
      isSnackbarOpen: true
    });


  }

  deleteAllGoods(){
    this.props.deleteAllGoodsFromState();
    this.setState({
      isSnackbarOpen: true,
      isDeleteGood:'All the goods were deleted'
    });

  }

  render() {
    const { classes } = this.props;

    return (
      <div className="goods_wrap">     
        <div className="list_wrap">
  	    {this.props.allGoods.goods.map((good) => (
              <SingleGood
                  key={good.id}
                  id={good.id}
                  name={good.name}
                  descr={good.descr}
                  imagegood={good.image}
                  onDelete={this.deleteGood}
              />
          ))}
        </div>
        {this.props.role === "USER" ? null :  <p>
          <Button variant="contained" color="secondary" className={classes.button} onClick={this.deleteAllGoods}>
              Delete all goods
          </Button>
        </p>}
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
          message={<span id="message-id">{this.state.isDeleteGood}</span>}
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
      </div>
    );
  }
}


Catalog.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  allGoods: state.goods,
  role: state.character.role,
})

function mapDispatchToProps(dispatch) {
  return {
    deleteGoodFromState: (id) => dispatch(deleteGood(id)),
    deleteAllGoodsFromState: () => dispatch(deleteWholeGoods()),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Catalog));

