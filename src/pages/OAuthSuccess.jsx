// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const OAuthSuccess = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const token = params.get('token'); 
//     if (token) {
//       localStorage.setItem('token', token); 
//       navigate('/'); 
//     } else {
//       navigate('/login'); 
//     }
//   }, [navigate]);

//   return <p className="text-center p-10">Signing you in...</p>;
// };

// export default OAuthSuccess;
