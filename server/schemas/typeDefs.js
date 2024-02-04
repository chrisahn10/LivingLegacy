const typeDefs = `#graphql

type User {
  _id: ID
  username: String
  email: String
  password: String
  posts: [Post]!
}

type Post {
  _id: ID
  postContent: String
  postAuthor: String
  createdAt: String
  comments: [Comment]!
}

type Comment {
  _id: ID
  commentContent: String
  commentAuthor: String
  createdAt: String
}

type Auth {
  token: ID!
  user: User
}


# Queries
type Query {
  users: [User]
  user(username: String!): User
  posts(username: String): [Post]
  post(postId: ID!): Post
  me: User
}

# Mutations
type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth 
  addPost(postContent: String!): Post
  addComment(postId: ID!, commentContent: String!): Post
  removePost(postId: ID!): Post
  removeComment(postId: ID!, commentId: ID!): Post
}
`;

module.exports = typeDefs;
