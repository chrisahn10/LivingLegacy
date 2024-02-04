import PostFeed from '../components/PostFeed';
import PostForm from '../components/PostForm';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import beigeImage from '../assets/home/beige.jpg';
import { QUERY_POSTS } from '../utils/queries';

function Feed () {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.thoughts || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <PostForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PostFeed
              posts={posts}
              title="Some Feed for Thought(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
}


export default Feed;
