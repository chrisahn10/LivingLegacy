import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const PostForm = () => {

  const [postContent, setPostContent] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addPost, { error }] = useMutation
  (ADD_POST, {
    refetchQueries: [
      QUERY_POSTS,
      'getPosts',
      QUERY_ME,
      'me'
    ]
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addPost({
        variables: {
          postContent,
          postAuthor: Auth.getProfile().data.username,
        },
      });

      setPostContent('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'postContent' && value.length <= 280) {
      setPostContent(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div className="container text-center">
      <h3>Push the Culture! Use Your Voice</h3>

      {Auth.loggedIn() ? (
        <>
          <p className={`m-0 ${characterCount === 280 || error ? 'text-danger' : ''}`}>
            Character Count: {characterCount}/280
          </p>
          <form
            className="d-flex flex-column align-items-center"
            onSubmit={handleFormSubmit}
          >
            <div className="mb-3">
            <textarea
  name="postContent"
  placeholder="Here's a new thought..."
  value={postContent}
  className="form-control"
  style={{ minHeight: '150px', width: '35%' }} // Adjust the width here
  onChange={handleChange}
></textarea>

            </div>

            <div className="mb-3">
              <button className="btn btn-primary" type="submit">
                Add Post
              </button>
            </div>
            {error && (
              <div className="bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your thoughts. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};


export default PostForm;
