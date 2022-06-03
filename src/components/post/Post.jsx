import "./post.css";
import { MoreVert } from "@mui/icons-material";

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">

            {/* Top part of post */}
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/person/4.jpeg" alt="" className="postProfileImg" />
                    <span className="postUsername">Joel Miranda</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopLeft">
                    <MoreVert />
                </div>
            </div>

            {/* Center part of post */}
            <div className="postCenter">
                <span className="postText">Hey first post</span>
                <img src="/assets/person/2.jpeg" alt="" className="postImg" />
            </div>

            {/* Bottom part of post */}
            <div className="postBottom">
                <div className="postBottomLeft"></div>
                <div className="postBottomRight"></div>
            </div>

        </div>
    </div>
  )
}
