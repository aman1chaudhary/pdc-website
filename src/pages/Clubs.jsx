import React, { useEffect } from "react";
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

        <div className="card-lg-container" data-aos="fade-up">
          <div className="row">
            <div className="col-md-4">
              <div className="card-lg-container-img">
                <img src='https://corp.smartbrief.com/wp-content/uploads/2020/07/AdobeStock_331489342-scaled.jpeg' alt='item'/>

              </div>

            </div>
            <div className="col-md-8">
              <div className="card-lg-container-content">
                <h3>Annuity Club</h3>
                <p>Finance remains one of the few non-core engineering fields that interest students a lot. However, due to the short number of courses available at IIT GN and the caps that they have, a lot of people fail to explore this field in detail. IIT Gandhinagar community has many finance enthusiasts, however, we lack a platform that would serve as a promoter of these interests and developing curiosity. With a view to establishing a peer-assisted learning environment for learning and exploring different domains of finance, including but not restricted to budgeting, stocks, trading, etc.</p>

              </div>
            </div>



          </div>

        </div>


      </div>
    </div>
  )
}

export default Clubs