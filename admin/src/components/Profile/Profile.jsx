import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

const ProfilePage = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Retrieve JWT token from local storage
    const token = localStorage.getItem('token');

    // Decode the JWT token to extract user's name
    if (token) {
      const decodedToken = jwt_decode(token);
      if (decodedToken && decodedToken.name) {
        setUserName(decodedToken.name);
      }
    }
  }, []);

  return (
    <div>
      <h1>Welcome, {userName}!</h1>
      {/* Other profile information can also be displayed here */}
    </div>
  );
};

export default ProfilePage;
