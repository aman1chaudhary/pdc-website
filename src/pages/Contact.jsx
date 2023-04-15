import React from 'react'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div>
      <header id="page-header">
        <div className="page-heading">
          <h2>Contact Us</h2>
        </div>
      </header>

      <div className="page-container">
        <div className="row">
          <div className="col-md-6 single-item">
            <div className="contact-content">
            <p>Contact our team for any inquiries, feedback, or partnership opportunities. We are here to answer any questions you may have and provide the necessary support to help you achieve your professional development goals.</p>

            </div>
            
            

          </div>
          <div className="col-md-6 single-item">
            <ContactForm />
          </div>


        </div>


      </div>


    </div>
  )
}

export default Contact