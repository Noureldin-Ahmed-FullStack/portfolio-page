import React, { createContext, useState } from 'react';

// Create a context
export let MyContext = createContext();


export default function MyContextProvider(props) {
  // let [profilePhotoURL, setprofilePhotoURL] = useState('https://ssniper.sirv.com/Images/3.png');
  const [darkMode, setDarkmode] = useState(true);
  const contextValue = {
    darkMode,
    setDarkmode,   
  };
 
  return (
    <MyContext.Provider value={contextValue}>
      {props.children}
    </MyContext.Provider>
  )
}
