import { gql } from '@apollo/client';

export const LOGIN_GUEST = gql`
  mutation guestLogin {
    guestLogin {
      token
      user {
        _id
       email
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
       email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      token
      user {
        _id
       email
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(, $email: String, $password: String) {
    updateUser( email: $email, password: $password) {
      token
      user {
        _id
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
      email
      reservations
    }
  }
}`

export const ADD_RESERVATION = gql`
mutation addReservation($usernameR: String!, $phoneNumber: String!, $groupSize: String!, $reservationTime: String!) {
  addReservation(usernameR: $usernameR, phoneNumber: $phoneNumber, groupSize: $groupSize, reservationTime: $reservationTime) {
    _id
    comments
    phoneNumber
    groupSize
    reservationTime
    usernameR
  }
}`

export const ADD_RESTOUSER = gql`
mutation addReservationToUser($useId: ID!, $resId: ID!) {
  addReservationToUser(useId: $useId, resId: $resId) {
    email
    reservations {
      reservationTime
      groupSize
    }
  }
}`
