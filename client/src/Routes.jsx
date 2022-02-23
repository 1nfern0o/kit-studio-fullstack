import React from 'react';
import {Route, Routes} from 'react-router-dom';
import CreateHotel from "./Pages/CreateHotel";
import {Content} from "./Components";
import HotelView from "./Components/HotelView";

const RoutesList = ({ hotels }) => {
    return (
        <Routes>
            <Route path="/" exact element={<Content hotels={hotels} />} />
            <Route path="/create" element={<CreateHotel />} />
            {hotels.map((hotel) => (
                <Route path={`/hotel/${hotel.id}`} key={hotel.id} element={<HotelView hotel={hotel} />} />
            ))}
        </Routes>
    );
};

export default RoutesList;