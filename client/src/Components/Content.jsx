import React from 'react';
import Hotel from "./Hotel";
import { Link } from "react-router-dom";

const Content = ({hotels}) => {
    return (
        <div className="main-content">
            <div>Все отели</div>
            <div className="hotel-list">
                {hotels.map((hotel) => (
                    <Link to={`hotel/${hotel.id}`} key={hotel.id}>
                        <Hotel hotel={hotel} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Content;