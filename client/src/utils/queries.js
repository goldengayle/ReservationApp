import { gql } from '@apollo/client';

export const QUERY_ME= gql`
query me($userId: ID!){
me (userId: $userId){
    _id
    email
    reservations {
      reservationTime
      groupSize
      comments
      usernameR
      phoneNumber

    }
  }
}`

export const QUERY_USER=gql`
query user($_id:ID!) {
    user(_id:$_id) {
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