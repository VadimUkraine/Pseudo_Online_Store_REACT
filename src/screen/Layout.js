import React, { Component } from 'react';
import Header from'../components/Header';
import Sidebar from'../components/Sidebar';
import Footer  from '../components/Footer';
import { connect } from 'react-redux';





class Layout extends Component {

	constructor(props){
	    super(props)

	    this.state = {
	      isDrawerOpen: false,

	    }

	}




  render() {


    return (
      <div className="App">
        <Header 
        	onLeftIconClick={() =>this.setState({isDrawerOpen: true})}
        />
        <Sidebar
        	open={this.state.isDrawerOpen}
         	onToggle={()=> this.setState({isDrawerOpen: false})}
        />
        <main>
          {this.props.children}
        </main>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userData: state.character,
})


export default connect(mapStateToProps, null)(Layout);