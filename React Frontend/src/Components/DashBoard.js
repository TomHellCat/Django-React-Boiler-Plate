import React, { Component } from "react";
import { withRouter } from "react-router-dom";  
import { connect } from "react-redux";      

import PropTypes from "prop-types";  

import { logout } from "./Login/LoginActions.js"; 
import axios from 'axios'
import WebSocketInstance from '../websocket'; 



class DashBoard extends Component{
     constructor(props){
      super(props);
      this.state = {active:null,roomName:"Welcome"};
      this.chatBox = null;
    }

    onLogout = () => {
        this.props.logout();
    };
    
    render(){
            return(
            <div>
                <a href="#" onClick={this.onLogout}>Logout</a>
            </div>
        );
    }    
}

DashBoard.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {
  logout
})(withRouter(DashBoard));