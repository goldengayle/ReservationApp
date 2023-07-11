import { gql } from '@apollo/client';

export const LOGIN_GUEST = gql`
  mutation guestLogin {
    guestLogin {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($username: String!, $email: String, $password: String) {
    updateUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
      }
    }
  }
`;

export const DELETE_RESERVATION= gql`
mutation deleteReservation($_id:ID){
  deleteReservation(_id: $_id){
    token
    user{
      username
      email
      reservations
    }
  }
}`

export const ADD_RESERVATION = gql`
mutation addReservation($usernameR: String!, $email: String!, $groupSize: String!, $reservationTime: String!) {
  addReservation(usernameR: $usernameR, email: $email, groupSize: $groupSize, reservationTime: $reservationTime) {
    _id
    comments
    email
    groupSize
    reservationTime
    usernameR
  }
}`

export const ADD_RESTOUSER = gql`
mutation addReservationToUser($_id: ID!) {
  addReservationToUser(_id: $_id) {
    username
    reservations {
      reservationTime
      groupSize
    }
  }
}`
