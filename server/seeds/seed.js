const db = require('../config/connection');
const { Admin, Reservation, User } = require('../models');
const adminSeeds = require('./adminSeeds.json');
const reservationSeeds = require('./reservationSeeds.json');
const userSeeds = require('./userSeeds.json');


db.once('open', async () => {
  try {
    await Admin.deleteMany({});
    await Admin.create(adminSeeds);

    
    // await Reservation.create(reservationSeeds);

    await User.deleteMany({});
    await User.create(userSeeds);

    await Reservation.deleteMany({});
    for (let i = 0; i < reservationSeeds.length; i++) {
      const { _id, usernameR } = await Reservation.create(reservationSeeds[i]);
      console.log('*reservation:*',reservationSeeds[i])
      const user = await User.findOneAndUpdate(
        { username: usernameR },
        {
          $addToSet: {
            reservation: _id,
          },
        }
      );
      console.log("*user:*", user)
    }
  // } catch (err) {
  //   console.error(err);
  //   process.exit(1);
  // }

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
