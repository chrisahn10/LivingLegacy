import { Link } from 'react-router-dom';
import captionImage from '../../assets/home/caption.jpg';

const PostList = ({
  posts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <div className="post-container">
      {showTitle && <h3>{title}</h3>}
      {posts.map((post) => (
        <div key={post._id} className="post-box">
          <div className="card mb-3 post-card">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link className="text-light" to={`/profiles/${post.postAuthor}`}>
                  <div className="username-container">
                    <span className="username">{post.postAuthor}</span>
                    <span style={{ fontSize: '0.8rem', marginLeft: '5px' }}>
                      had this thought on {post.createdAt}
                    </span>
                  </div>
                </Link>
              ) : (
                <span style={{ fontSize: '1.2rem' }}>
                  You had this thought on {post.createdAt}
                </span>
              )}
            </h4>
            <div
              className="card-body bg-light p-2"
              style={{
                backgroundImage: `url(${captionImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'black',
                overflow: 'hidden',
                height: 'auto',
              }}
            >
              <div className="card-text">
                <p>{post.postContent}</p>
              </div>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/posts/${post._id}`}
              style={{ fontSize: '0.8rem' }}
            >
              Join the discussion on this thought.
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
