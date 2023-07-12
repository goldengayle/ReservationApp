const { gql } = require('apollo-server-express');

const typeDefs = gql`

input ReservationInput {
  _id: ID
  usernameR: String!
  phoneNumber: String!
  groupSize: String!
  reservationTime: String!
  comments: String

}
  type User {
    _id: ID
    email: String
    createdAt: String
    password: String
    reservations: [Reservation]
  }

  type Admin {
   _id: ID
   adminName: String
   email: String
   password: String
  }

  type Reservation {
  _id: ID
  usernameR: String!
  phoneNumber: String!
  groupSize: String!
  reservationTime: String!
  comments: String

 }

 type Auth {
    token: ID!
    user: User
 }

  type Query {
    users: [User]
    user(email: String!): User
    admin: [Admin]
    reservations: [Reservation]
    reservation(_id: ID!):Reservation
    me(userId:ID!): User
    
  }

  type Mutation {
    addUser( email: String!, password: String!): Auth
    addReservation(usernameR: String!, phoneNumber: String!, groupSize:String!, reservationTime: String!, comments: String ): Reservation
    addReservationToUser(useId:ID!, resId:ID! ): User
    login(email: String!, password: String!): Auth
  } 
`;

module.exports = typeDefs;
