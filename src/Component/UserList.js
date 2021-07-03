import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllUsers } from '../actions/usersActions';
import UserItems from './UserItems';


function UserList(props) {
    useEffect(() => {
      props.getAllUsers();
    }, [])

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
    users:state.userState.users,
  }
}
const mapDispatchToProps ={
  getAllUsers,
};


export default connect(mapStateToProps,mapDispatchToProps) (UserList);

  
  