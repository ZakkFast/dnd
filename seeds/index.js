const mongoose = rquire('mongoose');
const Race = require('../models/Race');
const connectDB = require('../config/connection');

connectDB();

const seedRace = [
    {
        index: 'dwarf',
        name: 'Dwarf',
        speed: 25
    },
];

const seedDB = async () => {
  await Race.deleteMany({});
  await Product.insertMany(seedRace);
};

seedDB().then(() => {
  mongoose.connection.close();
});
