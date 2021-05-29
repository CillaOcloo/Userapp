import { createStore } from 'redux';
import usersReducer from '../reducers/UsersReducer';

 export const store= createStore (usersReducer)
 