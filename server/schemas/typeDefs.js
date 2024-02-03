const typeDefs = `#graphql

type User {
  id: ID!
  username: String!
  email: String!
  posts: [Post]
}

type Post {
  id: ID!
  postTitle: String!
  postContent: String!
  date: String
  time: String
  user: User!
  likes: [User]
  comments: [Comment]
}

type Comment {
  id: ID!
  commentContent: String!
  date: String
  time: String
  user: User!
}

# Queries
type Query {
  users: [User]
  posts: [Post]
  user(id: ID!): User
  post(id: ID!): Post
}

# Mutations
type Mutation {
  createUser(username: String!, email: String!, password: String!): User
  createPost(userId: ID!, postTitle: String!, postContent: String!): Post
  updateUser(id: ID!, username: String, email: String): User
  deletePost(id: ID!): Post
}
`;

module.exports = typeDefs;
