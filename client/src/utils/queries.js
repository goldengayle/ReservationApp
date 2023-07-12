import { gql } from '@apollo/client';

export const QUERY_ME= gql`
query me{
me {
    _id
    email
    reservations {
      reservationTime
      groupSize
    }
  }
}`

export const QUERY_USER=gql`
query User($email: String!) {
    user(email: $email) {
      reservations {
        reservationTime
        phoneNumber
        groupSize
        comments
        usernameR
        _id
      }
    }
  }
`

// export const QUERY_ADMIN = gql`
// query admin{
//     admin {
//       _id
//       adminName
//       email
//     }
//   }`



export const QUERY_RESERVATIONS = gql`
query reservations {
    reservations {
      usernameR
      reservationTime
      phoneNumber
      groupSize
      comments
    }
  }



`

export const QUERY_RESERVATION = gql`
query Reservation($id: ID!) {
    reservation(_id: $id) {
      reservationTime
      phoneNumber
      usernameR
      groupSize
      comments
    }
  }
`