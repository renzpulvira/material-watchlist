import React, { useState } from 'react';

export default function Register(){
  const [theStyle, setTheStyle] = useState('');

  return(
    <>
    <h1>{theStyle}</h1>
    </>
  )
}