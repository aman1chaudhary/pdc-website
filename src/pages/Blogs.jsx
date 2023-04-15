import React, { useEffect } from "react";
import { BlogsData } from '../data/BlogsData'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blogs = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div>
            <header id="page-header">
                <div className="page-heading">
                    <h2>Blogs</h2>
                </div>
            </header>

            <div className="page-container">
                <div className="card-container">
                    <div className="row">
                        {BlogsData.map(item => {
                            return (
                                <div className='col-md-4'>
                                    <div className="card-item" data-aos="fade-up">
                                        <div className="card-item-img">
                                            <img src={item.image} alt='item' />
                                        </div>
                                        <div className="card-item-content">
                                        <Link to={`/material/blogs/${item.BlogTitle}`} onClick={() => window.scrollTo(0, 0)}><p>{item.BlogTitle}</p></Link>
                                            

                                        </div>

                                    </div>

                                </div>
                            )
                        })}
                        <div className="col-md-4">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs