import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useHooks from '../../utilities/useHooks';
import Courses from '../Courses/Courses';

const Services = () => {
    const [courses] = useHooks('./courseInfo.json');
    const spinnerElement = <div className="text-center">
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    </div>;
    
    return (
        <div className="grid-design mt-2 mb-5">
            <h2 className="mb-3">We offer following courses</h2>
            {(courses.length===0) && spinnerElement}
            <Row xs={1} md={4} className="g-4">
                {
                    courses.map(course => <Courses course={course}>
                        <div className="text-center">
                            <Link to={`/service/${course.id}`}>
                                <button className="btn btn-secondary">Learn more</button>
                            </Link>
                        </div>
                    </Courses>)
                }
            </Row>
        </div>
    );
};

export default Services;