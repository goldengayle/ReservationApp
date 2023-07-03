const { User, Admin, Reservation } = require('../models');

const resolvers = {
    Query: {
      user: async () => {
        return User.find({});
      },

      admin: async () => {
        return Admin.find({});
      },

      reservation: async () => {
        return Reservation.find({})
      }
      
    }

}

module.exports = resolvers;


