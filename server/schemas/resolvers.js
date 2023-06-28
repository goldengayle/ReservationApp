const { Customer } = require('../models');

// const resolvers = {
//   Query: {
//     /*menuItems: async () => {
//       return MenuItems.find().sort({ createdAt: -1 });
//     },

//     menuItem: async (parent, { menuItemId }) => {
//       return Thought.findOne({ _id: menuItemId });
//     },*/

//     customers: async () => {
//         return Customer.find().sort({createdAt: -1});
//     },

//     customer: async (parent, { customerId }) => {
//         return Customer.findOne({ _id: customerId });
//       },
//   },}

//   // Mutation: {
//   //   /*addMenuItem: async (parent, { thoughtText, thoughtAuthor }) => {
//   //     return Thought.create({ thoughtText, thoughtAuthor });*/
//   //   },
//   //   addComment: async (parent, { thoughtId, commentText }) => {
//   //     return Thought.findOneAndUpdate(
//   //       { _id: thoughtId },
//   //       {
//   //         $addToSet: { comments: { commentText } },
//   //       },
//   //       {
//   //         new: true,
//   //         runValidators: true,
//   //       }
//   //     );
//   //   },
//   //   removeThought: async (parent, { thoughtId }) => {
//   //     return Thought.findOneAndDelete({ _id: thoughtId });
//   //   },
//   //   removeComment: async (parent, { thoughtId, commentId }) => {
//   //     return Thought.findOneAndUpdate(
//   //       { _id: thoughtId },
//   //       { $pull: { comments: { _id: commentId } } },
//   //       { new: true }
//   //     );
//   //   },
//   // }

// module.exports = resolvers;
