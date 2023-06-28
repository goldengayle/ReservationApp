const db = require('../config/connection');
const { Admin, Reservation, User } = require('../models');
const adminSeeds = require('./adminSeeds.json');
const reservationSeeds = require('./reservationSeeds.json');
const userSeeds = require('./userSeeds.json');


db.once('open', async () => {
  try {
    await Admin.deleteMany({});
    await Admin.create(adminSeeds);

    await Reservation.deleteMany({});
    await Reservation.create(reservationSeeds);

    await User.deleteMany({});
    await User.create(userSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
