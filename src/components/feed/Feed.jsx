import { useContext, useEffect, useState } from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css';
import axios from "axios";
import {AuthContext} from "../../context/AuthContext"

export default function Feed({ username }) {

  //useState hook
  const [post, setPost] = useState([]);
  const {user} = useContext(AuthContext);


  //useEffect hook
  useEffect(() => {
    // async function to make request for all timeline posts
    // if we get username then it is feed to profile page or else whole timeline feed
    const fetchPosts = async () => {
      const res = username ? await axios.get("/posts/profile/"+username) : await axios.get("/posts/timeline/" + user._id);
      setPost(res.data.sort((p1, p2)=>{
        return new Date(p2.createdAt) - new Date(p1.createdAt);
      }));   //sort the posts according to date 
    }
    fetchPosts();
  }, [username, user._id]);


  return (
    <div className="feed">
      <div className="feedWrapper">
      {(!username || username === user.username) && <Share />}

        {post.map((p) => (
          <Post post={p} key={p._id} />
        ))}

      </div>
    </div>
  )
}