// import schema from Book.js
// const menuSchema = require('..schemas/MenuItems');

const adminSchema = new Schema(
    {
      adminName: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must use a valid email address'],
      },
      password: {
        type: String,
        required: true,
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
  adminSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // custom method to compare and validate password for logging in
  adminSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
  
  // when we query a user, we'll also get another field called `bookCount` with the number of saved books we have
  // userSchema.virtual('bookCount').get(function () {
  //   return this.savedBooks.length;
  // });
  
  const Admin = model('Admin', adminSchema);
  
  module.exports = Admin;