import React, { useEffect } from "react";
import { EventsData } from '../data/EventsData'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Events = () => {
  useEffect(() => {
    AOS.init();
}, [])
  return (
    <div>
      <header id="page-header">
        <div className="page-heading">
          <h2>Events</h2>
        </div>
      </header>

      <div className="page-container">
        <div className="card-container">
          <div className="row">
            {EventsData.map(item => {
              return (
                <div className='col-md-4'>
                  <div className="card-item" data-aos="fade-up">
                    <div className="card-item-img">
                      <img src={item.image} alt='item'/>
                    </div>
                    <div className="card-item-content">
                      <Link to={`/events/${item.EventName}`} onClick={() => window.scrollTo(0, 0)}><p>{item.EventName}</p></Link>

                    </div>

                  </div>

                </div>
              )
            })}

          </div>

        </div>




      </div>


    </div>
  )
}

export default Events