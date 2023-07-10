const { gql } = require('apollo-server-express');

const typeDefs = gql`

input ReservationInput {
  _id: ID
  usernameR: String
  email: String
  groupSize: Int
  reservationTime: String
  comments: String

}
  type User {
    _id: ID
    username: String
    email: String
    createdAt: String
    password: String
    reservation: [Reservation]
  }

  type Admin {
   _id: ID
   adminName: String
   email: String
   password: String
  }

  type Reservation {
  _id: ID
  usernameR: String
  email: String
  groupSize: Int
  reservationTime: String
  comments: String

 }

 type Auth {
    token: ID!
    user: User
 }

  type Query {
    users: [User]
    user(username: String!): User
    admin: [Admin]
    reservations: [Reservation]
    reservation(reservationId: ID!):Reservation
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addReservation(usernameR: String!, email: String!, groupSize:Int!, reservationTime: String!, comments: String ): Reservation
    addReservationToUser(input: ReservationInput): User
    login(email: String!, password: String!): Auth
  } 
`;

module.exports = typeDefs;
