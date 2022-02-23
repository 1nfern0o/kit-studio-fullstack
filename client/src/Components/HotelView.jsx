import React from 'react';
import Hotel from "./Hotel";
import {Room} from "./index";

const HotelView = ({hotel}) => (
    <div>
        <Hotel hotel={hotel} />
        <Room rooms={hotel.rooms} />
    </div>
);

export default HotelView;