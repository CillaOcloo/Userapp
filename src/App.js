import './App.css';
import UserForms from './Component/UserForms';
import UserList from './Component/UserList';
import { useState } from 'react';

function App() {
  
  const [users, setUsers] = useState([]);

  const [userToUpdate, setUserToUpdate] = useState({
    username: '',
    email: '',
    password: '',
    contry: '',

  })

  function addUser(user) {
    setUsers([...users, user]);
  }
  function deleteUser(id) {
    let newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  }

  function updateUser(id, updateUserInfo) {
    let newUsers = users.map((user) => {
      if (user.id === id) {

        return updateUserInfo;
      }

      return user;

    });

    setUsers(newUsers)

  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          
          <UserForms addUser={addUser} />
        </div>
        <div className="col-md-6">
          <UserList allUsers={users}
           delete={deleteUser}
           updateUser= {updateUser} />

        </div>
      </div>
    </div>
  );
}

export default App;
