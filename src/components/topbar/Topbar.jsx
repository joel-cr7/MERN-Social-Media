import "./topbar.css";
import { Search, Person, Notifications, Chat } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      
      {/* Top Left Navbar */}
      <div className="topbarLeft">
        <span className="logo"> SocialMedia </span>
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
        <img src="/assets/person/4.jpeg" alt="" className="topbarImg" />
      </div>

    </div>
  )
}
