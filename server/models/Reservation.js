 // import schema from Book.js
 const { Schema, model } = require('mongoose');
 const dateFormat = require('../utils/dateFormat');
// const menuSchema = require('..schemas/MenuItems');

const reservationSchema = new Schema(
    {
        usernameR: {
        type: String,
        required: false,
        unique: false,
        dateAdded: new Date()
      },
      phoneNumber: {
        type: String,
        required: false,
        unique: false,
        // match: [/.+@.+\..+/, 'Must use a valid email address'],
      },
      groupSize:{
        type: String,
        required: false,
        unique: false
      },
      comments:{
        type: String,
        required: false,
        unique: false
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
      reservationTime: {
        type: String
        // type: Date,
        // default: Date.now,
        // get: (timestamp) => dateFormat(timestamp),
      },

  
      // set savedBooks to be an array of data that adheres to the bookSchema
      // savedItems: [menuSchema],
    },
    // set this to use virtual below
    {
      toJSON: {
        virtuals: true,
      },
    }
  );
  
  // hash user password
//   reservationSchema.pre('save', async function (next) {
//     if (this.isNew || this.isModified('password')) {
//       const saltRounds = 10;
//       this.password = await bcrypt.hash(this.password, saltRounds);
//     }
  
//     next();
//   });
  
  // custom method to compare and validate password for logging in
//   adminSchema.methods.isCorrectPassword = async function (password) {
//     return bcrypt.compare(password, this.password);
//   };
  
  // when we query a user, we'll also get another field called `bookCount` with the number of saved books we have
  // userSchema.virtual('bookCount').get(function () {
  //   return this.savedBooks.length;
  // });
  
  const Reservation = model('Reservation', reservationSchema);
  
  module.exports = Reservation;