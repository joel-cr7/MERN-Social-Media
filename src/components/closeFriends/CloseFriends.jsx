import "./closeFriends.css";
import {Link} from "react-router-dom";

export default function CloseFriends({ user }) {

    const public_folder = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <Link to={"/profile/"+user.username} style={{textDecoration: "none", color: "black"}}>
            <li className="sidebarFriend">
                <img src={user.profilePicture ? public_folder + user.profilePicture : public_folder + "person/noAvatar.png"}
                    alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendName">{user.username}</span>
            </li>
        </Link>
    )
}
