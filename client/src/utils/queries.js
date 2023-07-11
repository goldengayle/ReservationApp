import { gql } from '@apollo/client';

export const QUERY_ME= gql`
query me {
    me{
        _id
        username
        email
        reservations
        password
    }

}`

export const QUERY_USER=gql`
query user($_id: ID!) {
    user{
        email
        reservations
    }

}
`

export const QUERY_ADMIN = gql`
query admin{
    admin {
      _id
      adminName
      email
    }
  }`



export const QUERY_RESERVATIONS = gql`
query reservations{
    reservation{
        usernameR
        reservationTime
        groupSize
        comments

    }

}


}
`

export const QUERY_RESERVATION = gql`
query reservation($_id: ID!){
    reservation{
        usernameR
        reservationTime
        groupSize
        comments

    }

}


}
`