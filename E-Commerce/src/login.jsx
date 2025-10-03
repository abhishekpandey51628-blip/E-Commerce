import React from 'react';
function login(){
    return(
        <>
       
            <form>
                <label for="name">Name : </label>
              <input type="text" placeholder="Full Name" id="name" required />
              <label for="password">Password : </label>
              <input type="password" placeholder="Password"  id="password" required />
              <button type="submit">login</button>
            </form>
     
         
        </>
    )
}
export default login;