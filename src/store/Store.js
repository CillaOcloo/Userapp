import { createStore, compose, applyMiddleware } from 'redux';
import usersReducer from '../reducers/UsersReducer';
import {getFirebase, reduxReactFirebase} from 'react-redux-firebase'
import {getFirestore, reduxFirestore} from 'redux-firestore'
import firebase from '../firebase/config'
import thunk from 'redux-thunk'

export const store= createStore (usersReducer, compose(
     applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
     reduxReactFirebase(firebase),
     reduxFirestore(firebase),
 ));

  

 