import React from 'react';
import { useParams } from 'react-router';
import useHooks from './../../utilities/useHooks';
import './CourseDetails.css'
import NotFound from '../NotFound/NotFound';
const CourseDetails = () => {
    const { courseId } = useParams();
    const [courses] = useHooks(`https://joydip10.github.io/courseInfo/courseInfo.json`);
    let data = {};

    if (courses.length > 0) {
        data = courses.find(course => course.id === parseInt(courseId));
    }

    function isEmptyOrUndefined(obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop))
                return false;
        }

        return true;
    }


    return (
        <div>
            {(isEmptyOrUndefined(data)) ?
                <NotFound></NotFound>
                :
                <div className="d-flex flex-column align-items-center justify-center mt-3">
                    <img src={data.img} alt="" className="img-fluid img-thumbnail" />
                    <div className="d-flex flex-column align-items-center justify-center">
                        <h1>{data.title}</h1>
                        <h2 className="text-danger">{data.price}</h2>
                        <h3>{data.desc}</h3>
                    </div>
                </div>
            }

        </div>

    );
};

export default CourseDetails;