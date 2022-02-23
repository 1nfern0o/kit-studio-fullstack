import React, {useEffect, useState} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import "./Scss/style.scss";
import { Header } from "./Components";
import "materialize-css";
import RoutesList from "./Routes";
import {useHttp} from "./Hooks/http.hook";

function App() {

    // const hotels = [
    //     {
    //         id: 1,
    //         name: "Отель 1",
    //         description: "Описание отеля 1",
    //         img: "https://via.placeholder.com/100",
    //         alt: "Hotel 1",
    //         rooms: [
    //             {
    //                 number: 1,
    //                 people: 2,
    //                 classRoom: 'Стандарт',
    //                 price: '50$',
    //                 status: true,
    //                 img: 'https://via.placeholder.com/100'
    //             },
    //             {
    //                 number: 2,
    //                 people: 4,
    //                 classRoom: 'Бизнес',
    //                 price: '250$',
    //                 status: true,
    //                 img: 'https://via.placeholder.com/100'
    //             },
    //             {
    //                 number: 3,
    //                 people: 3,
    //                 classRoom: 'Стандарт+',
    //                 price: '150$',
    //                 status: false,
    //                 img: 'https://via.placeholder.com/100'
    //             }
    //         ]
    //     }, {
    //         id: 2,
    //         name: "Отель 2",
    //         description: "Описание отеля 2",
    //         img: "https://via.placeholder.com/100",
    //         alt: "Hotel 2",
    //         rooms: [
    //             {
    //                 number: 1,
    //                 people: 2,
    //                 classRoom: 'Стандарт',
    //                 price: '100$',
    //                 status: true,
    //                 img: 'https://via.placeholder.com/100'
    //             },
    //             {
    //                 number: 2,
    //                 people: 4,
    //                 classRoom: 'Бизнес',
    //                 price: '550$',
    //                 status: true,
    //                 img: 'https://via.placeholder.com/100'
    //             },
    //             {
    //                 number: 3,
    //                 people: 3,
    //                 classRoom: 'Стандарт+',
    //                 price: '670$',
    //                 status: true,
    //                 img: 'https://via.placeholder.com/100'
    //             }
    //         ]
    //     }, {
    //         id: 3,
    //         name: "Отель 3",
    //         description: "Описание отеля 3",
    //         img: "https://via.placeholder.com/100",
    //         alt: "Hotel 3",
    //         rooms: [
    //             {
    //                 number: 1,
    //                 people: 2,
    //                 classRoom: 'Стандарт',
    //                 price: '50$',
    //                 status: false,
    //                 img: 'https://via.placeholder.com/100'
    //             },
    //             {
    //                 number: 2,
    //                 people: 4,
    //                 classRoom: 'Бизнес',
    //                 price: '250$',
    //                 status: false,
    //                 img: 'https://via.placeholder.com/100'
    //             },
    //             {
    //                 number: 3,
    //                 people: 3,
    //                 classRoom: 'Стандарт+',
    //                 price: '150$',
    //                 status: false,
    //                 img: 'https://via.placeholder.com/100'
    //             }
    //         ]
    //     }, {
    //         id: 4,
    //         name: "Отель 4",
    //         description: "Описание отеля 4",
    //         img: "https://via.placeholder.com/100",
    //         alt: "Hotel 4",
    //         rooms: [
    //             {
    //                 number: 1,
    //                 people: 2,
    //                 classRoom: 'Стандарт',
    //                 price: '50$',
    //                 status: true,
    //                 img: 'https://via.placeholder.com/100'
    //             },
    //             {
    //                 number: 2,
    //                 people: 4,
    //                 classRoom: 'Бизнес',
    //                 price: '250$',
    //                 status: true,
    //                 img: 'https://via.placeholder.com/100'
    //             },
    //             {
    //                 number: 3,
    //                 people: 3,
    //                 classRoom: 'Стандарт+',
    //                 price: '150$',
    //                 status: true,
    //                 img: 'https://via.placeholder.com/100'
    //             }
    //         ]
    //     },{
    //         id: 5,
    //         name: "Отель 5",
    //         description: "Описание отеля 5",
    //         img: "https://via.placeholder.com/100",
    //         alt: "Hotel 5",
    //         rooms: [
    //             {
    //                 number: 1,
    //                 people: 2,
    //                 classRoom: 'Стандарт',
    //                 price: '50$',
    //                 status: false,
    //                 img: 'https://via.placeholder.com/100'
    //             },
    //             {
    //                 number: 2,
    //                 people: 4,
    //                 classRoom: 'Бизнес',
    //                 price: '250$',
    //                 status: false,
    //                 img: 'https://via.placeholder.com/100'
    //             },
    //             {
    //                 number: 3,
    //                 people: 3,
    //                 classRoom: 'Стандарт+',
    //                 price: '150$',
    //                 status: false,
    //                 img: 'https://via.placeholder.com/100'
    //             }
    //         ]
    //     },{
    //         id: 6,
    //         name: "Отель 6",
    //         description: "Описание отеля 6",
    //         img: "https://via.placeholder.com/100",
    //         alt: "Hotel 6",
    //         rooms: [
    //             {
    //                 number: 1,
    //                 people: 2,
    //                 classRoom: 'Стандарт',
    //                 price: '50$',
    //                 status: false,
    //                 img: 'https://via.placeholder.com/100'
    //             },
    //             {
    //                 number: 2,
    //                 people: 4,
    //                 classRoom: 'Бизнес',
    //                 price: '250$',
    //                 status: true,
    //                 img: 'https://via.placeholder.com/100'
    //             },
    //             {
    //                 number: 3,
    //                 people: 3,
    //                 classRoom: 'Стандарт+',
    //                 price: '150$',
    //                 status: false,
    //                 img: 'https://via.placeholder.com/100'
    //             }
    //         ]
    //     }, {
    //         id: 7,
    //         name: "Отель 7",
    //         description: "Описание отеля 7",
    //         img: "https://via.placeholder.com/100",
    //         alt: "Hotel 7",
    //         rooms: [
    //             {
    //                 number: 1,
    //                 people: 2,
    //                 classRoom: 'Стандарт',
    //                 price: '50$',
    //                 status: false,
    //                 img: 'https://via.placeholder.com/100'
    //             },
    //             {
    //                 number: 2,
    //                 people: 4,
    //                 classRoom: 'Бизнес',
    //                 price: '250$',
    //                 status: false,
    //                 img: 'https://via.placeholder.com/100'
    //             },
    //             {
    //                 number: 3,
    //                 people: 3,
    //                 classRoom: 'Стандарт+',
    //                 price: '150$',
    //                 status: false,
    //                 img: 'https://via.placeholder.com/100'
    //             }
    //         ]
    //     }, {
    //         id: 8,
    //         name: "Отель 8",
    //         description: "Описание отеля 8",
    //         img: "https://via.placeholder.com/100",
    //         alt: "Hotel 8",
    //         rooms: [
    //             {
    //                 number: 1,
    //                 people: 2,
    //                 classRoom: 'Стандарт',
    //                 price: '50$',
    //                 status: false,
    //                 img: 'https://via.placeholder.com/100'
    //             },
    //             {
    //                 number: 2,
    //                 people: 4,
    //                 classRoom: 'Бизнес',
    //                 price: '250$',
    //                 status: false,
    //                 img: 'https://via.placeholder.com/100'
    //             },
    //             {
    //                 number: 3,
    //                 people: 3,
    //                 classRoom: 'Стандарт+',
    //                 price: '150$',
    //                 status: false,
    //                 img: 'https://via.placeholder.com/100'
    //             }
    //         ]
    //     }, {
    //         id: 9,
    //         name: "Отель 9",
    //         description: "Описание отеля 8",
    //         img: "https://via.placeholder.com/100",
    //         alt: "Hotel 9",
    //         rooms: [
    //             {
    //                 number: 1,
    //                 people: 2,
    //                 classRoom: 'Стандарт',
    //                 price: '50$',
    //                 status: true,
    //                 img: 'https://via.placeholder.com/100'
    //             },
    //             {
    //                 number: 2,
    //                 people: 4,
    //                 classRoom: 'Бизнес',
    //                 price: '250$',
    //                 status: true,
    //                 img: 'https://via.placeholder.com/100'
    //             },
    //             {
    //                 number: 3,
    //                 people: 3,
    //                 classRoom: 'Стандарт+',
    //                 price: '150$',
    //                 status: true,
    //                 img: 'https://via.placeholder.com/100'
    //             }
    //         ]
    //     }, {
    //         id: 10,
    //         name: "Отель 10",
    //         description: "Описание отеля 10",
    //         img: "https://via.placeholder.com/100",
    //         alt: "Hotel 10",
    //         rooms: [
    //             {
    //                 number: 1,
    //                 people: 2,
    //                 classRoom: 'Стандарт',
    //                 price: '50$',
    //                 status: true,
    //                 img: 'https://via.placeholder.com/100'
    //             },
    //             {
    //                 number: 2,
    //                 people: 4,
    //                 classRoom: 'Бизнес',
    //                 price: '250$',
    //                 status: true,
    //                 img: 'https://via.placeholder.com/100'
    //             },
    //             {
    //                 number: 3,
    //                 people: 3,
    //                 classRoom: 'Стандарт+',
    //                 price: '150$',
    //                 status: true,
    //                 img: 'https://via.placeholder.com/100'
    //             }
    //         ]
    //     }, {
    //         id: 11,
    //         name: "Отель 11",
    //         description: "Описание отеля 11",
    //         img: "https://via.placeholder.com/100",
    //         alt: "Hotel 11",
    //         rooms: [
    //             {
    //                 number: 1,
    //                 people: 2,
    //                 classRoom: 'Стандарт',
    //                 price: '50$',
    //                 status: true,
    //                 img: 'https://via.placeholder.com/100'
    //             },
    //             {
    //                 number: 2,
    //                 people: 4,
    //                 classRoom: 'Бизнес',
    //                 price: '250$',
    //                 status: true,
    //                 img: 'https://via.placeholder.com/100'
    //             },
    //             {
    //                 number: 3,
    //                 people: 3,
    //                 classRoom: 'Стандарт+',
    //                 price: '150$',
    //                 status: true,
    //                 img: 'https://via.placeholder.com/100'
    //             }
    //         ]
    //     },
    //
    // ];

    const [hotels, setHotels] = useState([]);

    const { request } = useHttp();

    useEffect(() => {
        const createHandler = async () => {
            try {
                const data = await request('http://localhost:5000/api/hotels/all');
                setHotels(data);
            } catch (e) {
                console.log(e.message);
            }
        };
        createHandler();
    }, []);

    return (
        <Router>
            <div className="main-page">
                <div className="container">
                    <Header />
                    <RoutesList hotels={hotels} />
                </div>
            </div>
        </Router>
    );
}

export default App;
