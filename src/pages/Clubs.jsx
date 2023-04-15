import React, { useEffect } from "react";
import { ClubsData } from "../data/ClubsData";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Clubs = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <header id="page-header">
        <div className="page-heading">
          <h2>Clubs and Focused Groups</h2>
        </div>
      </header>


      <div className="page-container">


        {ClubsData.map(item => {
          return (
            <div className="card-lg-container" data-aos="fade-up">
              <div className="row">
                <div className="col-md-4">
                  <div className="card-lg-container-img">
                    <img src={item.image} alt='item' />

                  </div>

                </div>
                <div className="col-md-8">
                  <div className="card-lg-container-content">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>

                  </div>
                </div>
              </div>
            </div>

          )
        })}










      </div>
    </div>
  )
}

export default Clubs