import React from 'react';
function signup(){
    return(
        <>
       
            <form>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Signup</button>
            </form>
     
         
        </>
    )
}
export default signup;