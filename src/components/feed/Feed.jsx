import { useEffect, useState } from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css';
import axios from "axios";

export default function Feed({ username }) {

  //useState hook
  const [post, setPost] = useState([]);


  //useEffect hook
  useEffect(() => {
    // async function to make request for all timeline posts
    const fetchPosts = async () => {
      const res = username ? await axios.get("/posts/profile/"+username) : await axios.get("/posts/timeline/62974cfffee758a0f417d739");
      setPost(res.data);
    }
    fetchPosts();
  }, [username]);


  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />

        {post.map((p) => (
          <Post post={p} key={p._id} />
        ))}

      </div>
    </div>
  )
}