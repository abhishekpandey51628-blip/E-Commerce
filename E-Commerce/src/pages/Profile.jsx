import React, { useEffect, useState } from "react";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    
    fetch("http://localhost:5000/profile/test@example.com")
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      {user ? (
        <p>Welcome, {user.name}! Your email: {user.email}</p>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
}

export default Profile;
