
import UserForms from '../Component/UserForms';
import UserList from '../Component/UserList';
import { useState } from 'react';

function Dashboard() {
  
 
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          
          <UserForms  />
        </div>
        <div className="col-md-6">
          <UserList  />

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
