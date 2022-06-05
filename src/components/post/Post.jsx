import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";
import {format} from "timeago.js";
import {Link} from "react-router-dom";

export default function Post({ post }) {
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});
    const public_folder = process.env.REACT_APP_PUBLIC_FOLDER;


    //useEffect hook
    useEffect(() => {
        // async function to make request for all timeline posts
        const fetchUser = async () => {
            const res = await axios.get(`/users?userId=${post.userId}`);
            console.log("this is response "+ res);
            setUser(res.data);
        }
        fetchUser();
    }, [post.userId]);
    // here the dependency for useEffect is post.userId as it may change


    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    }

    return (
        <div className="post">
            <div className="postWrapper">

                {/* Top part of post */}
                <div className="postTop">
                    <div className="postTopLeft">
                        {/* If no profile pic use default avatar */}
                        <Link to={`profile/${user.username}`}>
                            <img src={user.profilePicture ? user.profilePicture : public_folder+"person/noAvatar.png"} alt="" className="postProfileImg" />
                        </Link>
                        <span className="postUsername"> {user.username} </span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopLeft">
                        <MoreVert />
                    </div>
                </div>

                {/* Center part of post */}
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={public_folder + post.img} alt="" className="postImg" />
                </div>

                <hr className="postHr" />

                {/* Bottom part of post */}
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src={`${public_folder}like.png`} alt="" className="likeIcon" onClick={likeHandler} />
                        <div class="likeSperator"></div>
                        <img src={`${public_folder}heart.png`} alt="" className="likeIcon" onClick={likeHandler} />
                        <span className="postLikeCounter">{like} people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
