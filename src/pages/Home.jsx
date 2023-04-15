import React from "react";
import { Helmet } from 'react-helmet';

const Home = () => {


  return (
    <div className='main-container'>
      <Helmet>
        <title>PDC | IIT Gandhinagar</title>
        <meta name="description" content="" />

      </Helmet>


      <header id="head">
        <div className="banner-content">
          <h1>Professional Development Council</h1>
        </div>
      </header>

    </div>
  )
}

export default Home