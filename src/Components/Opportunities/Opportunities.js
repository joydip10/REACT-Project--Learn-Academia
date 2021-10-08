import React from 'react';
import './Opportunities.css'
const Opportunities = () => {
    return (
        <div>
            <div className="position mb-3 mt-2 p-5">
                <h1>Positions Available</h1>
                <h3>Join as an Academician</h3>
                <button className="btn btn-danger">Learn More</button>
            </div>
            <div className="position mb-3 mt-2 p-5">
                <h1>Positions Available</h1>
                <h3>Join as an Academic assistant</h3>
                <button className="btn btn-danger">Learn More</button>
            </div>
            <div className="position mb-3 mt-2 p-5">
                <h1>Positions Available</h1>
                <h3>Join as Office Associate</h3>
                <button className="btn btn-danger">Learn More</button>
            </div>
        </div>
    );
};

export default Opportunities;