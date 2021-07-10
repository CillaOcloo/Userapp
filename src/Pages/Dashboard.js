
import UserForms from '../Component/UserForms';
import UserList from '../Component/UserList';
import { useState } from 'react';
import { connect } from 'react-redux';
import {logout} from '../actions/authActions';

function Dashboard(props) {
  function handleLogout() {
    props.logout();

}
  
 
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          
          <UserForms  />
          <button type="button" style={{backgroundColor:'red',color:'black'}} onClick={handleLogout}>Logout</button>
        </div>
        
        <div className="col-md-6">
          <UserList  />

        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps ={logout}; 
export default connect (null,mapDispatchToProps) (Dashboard);
