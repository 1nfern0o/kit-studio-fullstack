const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json({ extended: true }));

app.use('/api/hotels', require('./routes/hotels.routes.js'));


const PORT =  config.get('port') || 5000;

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        app.listen(PORT, () => console.log(`Gell ${PORT}`));
    } catch (e) {
        console.log('Server err', e.message);
        process.exit(1);
    }
}

start();