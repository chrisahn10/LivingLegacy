const typeDefs = `#graphql

type User {
  id: ID
  username: String!
  email: String!
  password: String!
  posts: [Post]
}

type Post {
  _id: ID
  postTitle: String!
  postContent: String!
  postAuthor: String
  date: String
  time: String
  comments: [Comment]
  likes: [User]
}

type Comment {
  _id: ID
  commentContent: String!
  commentAuthor: String
  date: String
  time: String
  likes: [User]
}

type Auth {
  token: ID!
  user: User
}


# Queries
type Query {
  users: [User]
  user(username: String!): User
  posts: [Post]
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
