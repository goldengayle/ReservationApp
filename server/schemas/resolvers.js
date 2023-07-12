const { AuthenticationError } = require('apollo-server-express');
const { User, Admin, Reservation } = require('../models');
const { signToken } = require('../utils/auth');
const mongoose = require('mongoose');

// Inside your backend route or controller

// const { DELETE_RESERVATION } = require('../../client/src/utils/mutations');

const resolvers = {
  Query:{
      
      me: async (parent, args) => {
        const {userId }= args
        const convertedUserId = new mongoose.Types.ObjectId(userId);
          
          
          // if (loggedIn) {
            return User.findOne({ _id: convertedUserId}).populate('reservations');
          },
        //   throw new AuthenticationError('You need to be logged in!');
        // },
      user: async (parent, { email }) => {
        return User.findOne({email:email}).populate('reservations')
      },
      users: async () => {
        return User.find({}).populate('reservations');
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
      addUser: async (parent, { email, password }) => {
        const user = await User.create({ email, password });
        const token = signToken(user);
        return { token, user };
        
          
        }
      ,

      
       addReservation: async (parent, { usernameR, phoneNumber, groupSize, reservationTime, comments }) => {
      const reservation = await Reservation.create({ usernameR, phoneNumber, groupSize, reservationTime, comments});
        
      //   // const token = signToken(user);
      //   // return { token, reservation };
      console.log (reservation._id)
       return reservation
       const resId = reservation.id
       },

       

       addReservationToUser: async(parent, {useId, resId }, context) => {
        console.log("res id", resId)
    
        console.log("useId",useId)
       
        if (context){
          
          const updatedUser = await User.findOneAndUpdate(
            {_id:useId},
            {
              $addToSet : {reservations: resId}
            },
            {
              new: true,
              runValidators:true
            }
          ).populate('reservations');
          return updatedUser
        }

       },
      
      login: async(parent, { email, password}) => {
        const user = await User.findOne({email});

        if(!user){
            throw new AuthenticationError(`No user with this email found!`)
        }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw){
            throw new AuthenticationError(`Incorrect password`);
        }
        
        const token =signToken(user);
        console.log("tokena dn user", token, user)
        return { token, user};
    },
    }

}

module.exports = resolvers;


