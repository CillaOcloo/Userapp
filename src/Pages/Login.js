import React, { useState } from 'react'
import { connect } from 'react-redux';
import{ login} from '../actions/authActions';


 function Login(props) {
     const [credentials, setCredentials]= useState({ email:"", password:"" });

     function handleOnChange(event) {
         setCredentials({
             ...credentials,
             [event.target.name]: event.target.value
         });
     }
     function handleSubmit() {
         props.login(credentials.email, credentials.password);

     }
    return (
        <div className="info">
            <form>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value= {credentials.email} placeholder="Enter Your Email" onChange= {handleOnChange} />

                </div>
                <div>
                    <label>Password</label>
                    <input type="password"  name="password" value={credentials.password} placeholder="Enter Your Password" onChange= {handleOnChange} />
                </div>
                <div>
                <button type="button" className="btn" onClick={handleSubmit}>
                   Login
                  </button>
                </div>
                

            </form>
            
        </div>
    )
}
const mapDdispatchToProps = { login };
export default connect(null, mapDdispatchToProps) (Login);
