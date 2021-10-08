import React from 'react';
import './About.css';

const About = () => {
    return (
        <div>
            <div className="header-design mt-2">
            <h2 className="mb-1 mt-3">Meet our Founders</h2>
            </div>
            <div className="founder1 d-flex flex-column flex-md-row justify-content-center align-items-center">
                <div className="img">
                    <img src="https://www.jamiiforums.com/data/attachment-files/2016/08/1414273_uploadfromtaptalk1472576763239.jpg" className="img-fluid rounded-circle img-thumbnail" alt="" />
                </div>
                <div className="text">
                    <h3 className="heading">Ranchordas Chachar</h3>
                    <h6>In college, Farhan and Raju form a great bond with Rancho due to his refreshing outlook. Years later, a bet gives them a chance to look for their long-lost friend whose existence seems rather elusive.</h6>
                </div>
            </div>

            <div className="founder2 d-flex flex-column flex-md-row justify-content-center align-items-center">
                <div className="text order-2 order-md-1">
                    <h3 className="heading">Raju Rastogi</h3>
                    <h6>In college, Farhan and Raju form a great bond with Rancho due to his refreshing outlook. Years later, a bet gives them a chance to look for their long-lost friend whose existence seems rather elusive.</h6>
                </div>
                <div className="img order-1 order-md-2">
                    <img src="https://www.memefunny.net/uploads/3-idiots-raju-rastogi-smile-9585.jpg" className="img-fluid rounded-circle img-thumbnail" alt="" />
                </div>
            </div>
            <div className="founder3 d-flex flex-column flex-md-row justify-content-center align-items-center">
                <div className="img">
                    <img src="https://tanevareamae.files.wordpress.com/2014/10/ooo.jpg" className="img-fluid rounded-circle img-thumbnail" alt="" />
                </div>
                <div className="text">
                    <h3 className="heading">Farhan Qureshi</h3>
                    <h6>In college, Farhan and Raju form a great bond with Rancho due to his refreshing outlook. Years later, a bet gives them a chance to look for their long-lost friend whose existence seems rather elusive.</h6>
                </div>
            </div>
        </div>
    );
};

export default About;