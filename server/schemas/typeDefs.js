const { gql } = require('apollo-server-express');

const typeDefs = gql`


  type User {
    _id: ID
    customerName: String
    email: String
    createdAt: String
    password: String
  }

  type Admin {
   _id: ID
   adminName: String
   email: String
   password: String
  }

  type Reservation {
  _id: ID
  reservationName: String
  email: String
  groupSize: String
  comments: String

 }

  #type Comment {
    #_id: ID
    #commentText: String
   #createdAt: String
  # }

  # type Query {
   # thoughts: [Thought]!
  # thought(thoughtId: ID!): Thought
  #}

  #type Mutation {
   # addThought(thoughtText: String!, thoughtAuthor: String!): Thought
   # addComment(thoughtId: ID!, commentText: String!): Thought
   # removeThought(thoughtId: ID!): Thought
   # removeComment(thoughtId: ID!, commentId: ID!): Thought
  #}

  type Query {
    user: [User]
    admin: [Admin]
    reservation: [Reservation]
    me: User
  }

  type Mutation {
    addUser(customerName: String!, email: String!, password: String!):User
  } 
`;

module.exports = typeDefs;
