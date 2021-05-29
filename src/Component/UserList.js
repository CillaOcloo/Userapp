import React from 'react';
import { connect } from 'react-redux';
import UserItems from './UserItems';

function UserList(props) {
    return (
      <div>
        {props.users.map((user) => (
          <UserItems user={user} 
          delete={props.delete}
          updateUser={props.updateUser}
          />
          
        ))}
      </div>
    );
  }
  
 function mapStateToProps(state) {
  return {
    users:state.users,
  }
}


export default connect(mapStateToProps,{}) (UserList);

  
  