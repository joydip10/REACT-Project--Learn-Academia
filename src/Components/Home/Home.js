import React, { createContext } from 'react';
import { Row } from 'react-bootstrap';
import Courses from '../Courses/Courses';
import './Home.css'
import Success from './../Success/Success';
import useHooks from '../../utilities/useHooks';
import { useHistory } from 'react-router';

export const RingContext= createContext('nothing');
const Home = () => {
    const [courses] = useHooks('./courseInfo.json');
    const [success] = useHooks('./successStories.json');
    const value="Ranchordas";
    const history = useHistory();

    const handleServices = () => {
        history.push('/services');
    }

    return (
        <RingContext.Provider value={value}>
            <div className="cover-design">
                <h2 className="heading-design">English Learning Academia and Consultancy</h2>
                <h3 className="subheading-design">For a boutique experience</h3>
            </div>

            <div className="grid-design mt-5 mb-5">
                <h2 className="mb-3">Some of our courses</h2>
                <Row xs={1} md={4} className="g-4">
                    {
                        courses.slice(0, 4).map(course => <Courses key={course.id} course={course}>
                            <div className="text-center">
                                <button className="btn btn-secondary text-center" onClick={handleServices}>See more</button>
                            </div>
                        </Courses>)
                    }
                </Row>
                <div className="text-center">
                    <button className="btn btn-primary mt-4 p-3 mx-auto fw-bold" onClick={handleServices}>See more courses...</button>
                </div>
            </div>

            <div className="grid-design mt-5 mb-5">
                <h2 className="mb-3">Some of our success stories</h2>
                <Row xs={1} md={4} className="g-4">
                    {
                        success.map(success => <Success key={success.id} success={success}></Success>)
                    }
                </Row>
            </div>
        </RingContext.Provider>
    );
};

export default Home;