import { Link } from 'react-router-dom';

const PostList = ({
  posts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!posts.length) {
    console.log(posts)
    return <h3>No Posts Yet</h3>;
  }

  return (
    <div className="text-center">
      {showTitle && <h3>{title}</h3>}
      {posts &&
        posts.map((post) => (
          <div key={post._id} className="card mb-3 mx-auto" style={{ maxWidth: '500px' }}>
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link className="text-light" to={`/profiles/${post.postAuthor}`}>
                  <strong>{post.postAuthor}</strong> <br />
                  <span style={{ fontSize: '1.2rem' }}>
                    had this thought on {post.createdAt}
                  </span>
                </Link>
              ) : (
                <span style={{ fontSize: '1.2rem' }}>
                  You had this thought on {post.createdAt}
                </span>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{post.postContent}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostList;
