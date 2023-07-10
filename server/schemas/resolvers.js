const { AuthenticationError } = require('apollo-server-express');
const { User, Admin, Reservation } = require('../models');
const { signToken } = require('../utils/auth');
// const { DELETE_RESERVATION } = require('../../client/src/utils/mutations');

const resolvers = {
    Query: {
      users: async () => {
        return User.find({}).populate('reservation');
      },
      
      me: async(parent, args, context) =>{
        if (context.user){
          return User.findOne({_id: context.user._id})
        }
        // throw new AuthenticationError('You need to be logged in!')
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
      
      reservation: async(parent, { usernameR }) => {
        const params = usernameR ? { usernameR }: {};
        return Reservation.find(params).sort({ createdAt: -1 })
      }

    },

    Mutation:{
      addUser: async (parent, { username, email, password }) => {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
        return { token, user };
        
          
        }
      ,

      
       addReservation: async (parent, { usernameR, email, groupSize, reservationTime, comments }) => {
      const reservation = await Reservation.create({ usernameR, email, groupSize, reservationTime, comments});
        
      //   // const token = signToken(user);
      //   // return { token, reservation };
       return reservation
       },

       addReservationToUser: async(parent, input , context) => {
        console.log(context.user)
        if (context.user){
          const updatedUser = await User.findOneAndUpdate(
            {_id:context.user._id},
            {
              $push : {reservation: input}
            },
            {
              new: true,
              runValidators:true
            }
          );
          return updatedUser
        }

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


