import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import usersReducer from '../reducers/UsersReducer';
import {firebaseReducer, getFirebase, reduxReactFirebase} from 'react-redux-firebase'
import {getFirestore, reduxFirestore} from 'redux-firestore'
import firebase from '../firebase/config'
import thunk from 'redux-thunk'



const reducer =combineReducers ({
    userState: usersReducer,
    firebaseState: firebaseReducer,
})

export const store= createStore (
     reducer, 
     compose(
     applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
     reduxReactFirebase(firebase),
     reduxFirestore(firebase),
 ));

  

 