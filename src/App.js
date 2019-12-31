import React from 'react';
import NavbarE from './components/Navbar';
import JumbotronE from './components/Jumbotron';
import Buttons from './components/Buttons';
import Hoods from './components/Hoods';
import Properties from './components/Properties';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <JumbotronE></JumbotronE>
      <NavbarE></NavbarE>
      <Buttons></Buttons>
      <Hoods></Hoods>
      <Properties></Properties>
      <Footer></Footer>
    </>
  );
}

export default App;
