import React from 'react';
import { useNavigate } from 'react-router-dom';
  
const Unauthorised = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      <h1>You are unauthorised to access these resources.</h1>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
};
  
export default Unauthorised;