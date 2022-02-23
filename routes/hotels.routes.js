const { Router } = require('express');
const Hotel = require('./../models/Hotel');
const router = Router();

/* /api/hotels/all */
router.get('/all', async (req, res) => {
    try {
        const hotel = await Hotel.find({img: "https://via.placeholder.com/100"});
        res.json(hotel);
        res.send('hello world');
    } catch (e) {
        res.status(500).json({ message: 'Some error...'})
    }
})

/* /api/hotels/create */
router.post('/create', async (req, res) => {
    try {
        const { id, name, description, img } = req.body;


        const hotelCheck = await Hotel.findOne({name});

        if(hotelCheck) {
            return res.status(400).json({ message: 'Такой отель уже существует' })
        }

        const hotel = new Hotel({ id, name, description, img, rooms: [] });

        await hotel.save();

        res.status(201).json({ message: 'Отель создан' })

    } catch (e) {
        res.status(500).json({ message: 'Some error...'})
    }
})

module.exports = router;