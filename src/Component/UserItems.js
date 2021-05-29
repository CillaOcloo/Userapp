import React,{useState} from 'react';
import { Modal } from 'react-bootstrap';
import EditUserForm from './EditUserForm'; 
import { deleteUser} from '../actions/usersActions';
import { connect } from 'react-redux';


function UserItem(props) {
  const [isModalVisible, setShowModal] = useState(false);

  function showModal() {
    setShowModal(true);
  }

  function hideModal() {
    setShowModal(false);
  }


  
  return (
    <div className="row UserItems">
      <div className="col-md-3"> <h4>Username</h4> {props.user.username}</div>
      <div className="col-md-3"> <h4>Email</h4> {props.user.email}</div>
      <div className="col-md-2"> <h4>Country</h4> {props.user.country}</div>
      <div className="submit">
        <button className="renew" onClick={showModal}> Edit</button>
        <Modal show={isModalVisible} onHide={hideModal}>
          <Modal.Header clodeButton>
            <Modal.Title>Edit User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditUserForm
            user={props.user}
            updateUser={props.updateUser}
            hideModal={hideModal}/>
          </Modal.Body>
        </Modal>

        <button className="remove" onClick={() => { 
          props.deleteUser(props.user.id);
        }}
        >Delete</button>
      </div> 
    </div>
  );
}
var mapDispatchTpProps = {
  deleteUser,
}
var mapStateToProps= () =>{}

export default  connect(mapStateToProps,mapDispatchTpProps)( UserItem);

