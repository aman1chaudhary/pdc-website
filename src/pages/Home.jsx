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

      <div className="page-container">

        <div className="page-section">
          <div className="about-content">
            <div className="section-heading">
              <h2>About PDC</h2>
            </div>

            <p>Our mission is to provide the student body with a structured framework for their overall professional development. We work towards spreading awareness about the importance of professional skill development and creating avenues for students to enhance their career prospects. Our principles are based on assessing the current performance of IITGN students in professional aspects and creating a platform for improvement. We also strive to promote a healthy culture of professional skill development among our students. Additionally, we act as a communication medium between the Career Development Services (CDS) and the student body, facilitating feedback from companies to students and addressing student concerns with the CDS. Join us in your journey towards a successful and fulfilling professional career!</p>


          </div>
        </div>


      </div>




    </div>
  )
}

export default Home