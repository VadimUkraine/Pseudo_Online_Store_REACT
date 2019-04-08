import React, { Component } from 'react';
import FormAdd from'../components/FormAdd';
import Warning  from '../components/Warning';
import { connect } from 'react-redux';




class AddGood extends Component {

	constructor(props){
	    super(props)

	    this.state = {

	    }
	}





  render() {
    return ( 
        this.props.role === "USER" ? <Warning open={true}/> : <FormAdd/>
    );
  }
}


const mapStateToProps = (state) => ({
  role: state.character.role,
})


export default connect(mapStateToProps, null)(AddGood);
