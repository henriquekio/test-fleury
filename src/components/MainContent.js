import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainContent = (props) => {
  return (
    <>
      <Navbar/>
      <main>
        {props.children}
      </main>
      <Footer/>
    </>
  );
};

export default MainContent;