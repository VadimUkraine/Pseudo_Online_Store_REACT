import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ClearIcon from '@material-ui/icons/Clear';
import CardMedia from '@material-ui/core/CardMedia';
import { connect } from 'react-redux';

const styles = {
  card: {
    maxWidth: 210,
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 5,
    minHeight: 288,
  },
  media: {
    height: 140,
    width: 195,

  },
  card_wrap:{
    paddingTop: 12,
    paddingLeft: 8,
    paddingRight: 8,
  },
  card_action:{
    display: 'flex',
    justifyContent: 'flex-end',
   
  },
  icon: {
    cursor: 'pointer',
    transition: 'all .3s linear',
    '&:hover':{
      color: 'red',
    }

  }
};

class SingleGood extends Component {

  render() {
    const { id, name, descr, imagegood, classes} = this.props;

    return (
      <Card className={classes.card}>
        <CardActionArea className={classes.card_wrap}>     
          <CardMedia
            className={classes.media}
            image={require(`../images/${imagegood}`)}
            title={name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography component="p">
              {descr}
            </Typography>
          </CardContent>
        </CardActionArea>
        {this.props.role === "USER" ? null :
        <CardActions className={classes.card_action}>
          <ClearIcon className={classes.icon}  onClick={()=> this.props.onDelete(id)}/>
        </CardActions>}
    </Card>
    );
  }
}


SingleGood.propTypes = {
  classes: PropTypes.object.isRequired,
};


const mapStateToProps = (state) => ({
  role: state.character.role,
})


export default connect(mapStateToProps, null)(withStyles(styles)(SingleGood));


