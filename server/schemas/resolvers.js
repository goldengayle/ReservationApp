const { AuthenticationError } = require('apollo-server-express');
const { User, Admin, Reservation } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      users: async () => {
        return User.find({}).populate('reservation');
      },
      
      user: async (parent, { username }) => {
        return User.findOne({username}).populate('reservation')
      },

      admin: async () => {
        return Admin.find({});
      },

      reservations: async () => {
        return Reservation.find({})
      },
      
      reservation: async(parent, { username }) => {
        const params = username ? { username }: {};
        return Reservation.find(params).sort({ createdAt: -1 })
      }

    },

    Mutation:{
      addUser: async (parent, { username, email, password }) => {
        const user = await User.create({ username, email, password });
        //const token = signToken(user);
        //return { token, user };
        return { user };
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('No user found with this email address');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const token = signToken(user);
  
        return { token, user };
      },
    }

}

module.exports = resolvers;


