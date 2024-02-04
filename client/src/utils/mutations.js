import { gql } from '@apollo/client';

// Define mutation
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


export const ADD_POST = gql`
  mutation addPost($postContent: String!) {
    addPost(postContent: $postContent) {
      _id
      postContent
      postAuthor
      date
      time
      comments {
        _id
        commentContent
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($postId: ID!, $commentContent: String!) {
    addComment(postId: $postId, commentContent: $commentContent) {
      _id
      postContent
      postAuthor
      date
      time
      comments {
        _id
        commentContent
        date
        time
      }
    }
  }
`;
