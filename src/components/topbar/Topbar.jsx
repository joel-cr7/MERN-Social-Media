import "./topbar.css";
import { Search, Person, Notifications, Chat } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {AuthContext} from "../../context/AuthContext"

export default function Topbar() {

  const {user} = useContext(AuthContext);
  const public_folder = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="topbarContainer">
      
      {/* Top Left Navbar */}
      <div className="topbarLeft">
        <Link to="/" style={{textDecoration: "none"}}>
          <span className="logo"> SocialMedia </span>
        </Link>
      </div>

      {/* Top Center Navbar */}
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon"/>
          <input placeholder="Search for posts, friends or videos" className="searchInput" />
        </div>
      </div>

      {/* Top Right Navbar */}
      <div className="topbarRight">
        {/* Links */}
        <div className="topbarLinks">
          <span className="topbarLink">HomePage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        {/* Icons */}
        <div className="topbarIcons">
          {/* Person Icon */}
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          {/* Chat Icon */}
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>
          {/* Notification Icon */}
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img src={user.profilePicture ? public_folder + user.profilePicture : public_folder + "person/noAvatar.png"} 
            alt="" className="topbarImg" />
        </Link>
      </div>

    </div>
  )
}
