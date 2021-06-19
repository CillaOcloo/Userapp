 export function getAllUsers(){
    return (dispatch, state, {getFirestore})=>{
        const db = getFirestore();
         db.collection('users')
         .get()
         .then((results) => {             
             let users =[];
             results.forEach((doc)=> {
               users.push(doc.data());
           });
            dispatch({
                type:'ADD_ALL_USERS',
                payload:users,
             });
            })
            .catch ((error)=> {
                console.log(error)

             });
       
       
     }
 }









export function addUser(newUser) {
    return (dispatch, state, {getFirestore})=>{
        const db = getFirestore();
        db.collection('users')
        .add(newUser)
        .then(()=>{
            dispatch({
                type:"ADD_USER",
            payload: newUser,
            });

        })
            .catch((error)=>{
                console.log(error);
            })
       

 }
}

     

export function editUser(id, updatedUser) {
    return{
        type:"EDIT_USER",
        payload: { id: id, updatedUserInfo: updatedUser },
    }

}
 export function deleteUser(id) {
     return{
         type: "DELETE_USER",
         payload: id,
     };
 }


export default addUser;