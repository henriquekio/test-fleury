import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Breadcrumbs from "./Breadcrumbs";

const MainContent = (props) => {
  const { title = '' } = props;

  return (
    <>
      <Navbar/>
      <main>
        <div className="container margin-top-30">
          <div className="row">
            <div className="twelve columns">
              <Breadcrumbs/>
              {title.length > 0 && <h4>{title}</h4>}
            </div>
          </div>
        </div>
        {props.children}
      </main>
      <Footer/>
    </>
  );
};

export default MainContent;