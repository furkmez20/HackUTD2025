// app/login/VisibilityIcon.jsx

import React from 'react';



export default function VisibilityIcon({ className = '' }) {

  return (

    <svg 

      xmlns="http://www.w3.org/2000/svg" 

      height="24" 

      viewBox="0 0 24 24" 

      width="24" 

      fill="currentColor" 

      className={className}

    >

      <path d="M0 0h24v24H0z" fill="none"/>

      <path d="M12 4.5c5.77 0 10.23 3.93 12 9-1.77 5.07-6.23 9-12 9S1.77 18.07 0 13.5c1.77-5.07 6.23-9 12-9zm0 14c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6zm0-10c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z"/>

    </svg>

  );

}

