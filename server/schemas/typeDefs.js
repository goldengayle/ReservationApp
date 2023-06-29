const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Thought {
    _id: ID
   thoughtText: String
    thoughtAuthor: String
    createdAt: String
    comments: [Comment]!
  }

 # type User {
  #  _id: ID
   # customerName: String
    #email: String
    #createdAt: String
    #password: String
  #}

  type Comment {
    _id: ID
    commentText: String
   createdAt: String
  }

  type Query {
    thoughts: [Thought]!
   thought(thoughtId: ID!): Thought
  }

  type Mutation {
    addThought(thoughtText: String!, thoughtAuthor: String!): Thought
    addComment(thoughtId: ID!, commentText: String!): Thought
    removeThought(thoughtId: ID!): Thought
    removeComment(thoughtId: ID!, commentId: ID!): Thought
  }
`;

module.exports = typeDefs;
