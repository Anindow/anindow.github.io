import '../styles/globals.css'
import Nav from '../components/Nav'
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false); 

  return (
    <>
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
      <Component {...pageProps} darkMode={darkMode} /> 
    </>
  );
}

export default MyApp;
