import React, { Component } from 'react';
import SignIn  from '../components/SignIn';
import { connect } from 'react-redux';



class Login extends Component {

	constructor(props){
	    super(props)

	    this.state = {

	    }

	}


  render() {

    return ( 
        !this.props.userData.role.length && <div className="signin_wrap">
          <SignIn /></div>      
    );
  }
}

const mapStateToProps = (state) => ({
  userData: state.character,
})


export default connect(mapStateToProps, null)(Login);