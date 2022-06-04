import './sidebar.css';
import { RssFeed, Chat, PlayCircle, Group, Bookmarks, HelpOutline, WorkOutline, Event, School } from "@mui/icons-material";
import CloseFriends from '../closeFriends/CloseFriends';
import {Users} from "../../dummyData";

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">

          {/* Feed Item */}
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon"/>
            <span className="sidebarListItemText">
              Feed
            </span>
          </li>

          {/* Chat Item */}
          <li className="sidebarListItem">
            <Chat className="sidebarIcon"/>
            <span className="sidebarListItemText">
              Chats
            </span>
          </li>

          {/* Videos Item */}
          <li className="sidebarListItem">
            <PlayCircle className="sidebarIcon"/>
            <span className="sidebarListItemText">
              Videos
            </span>
          </li>

          {/* Groups Item */}
          <li className="sidebarListItem">
            <Group className="sidebarIcon"/>
            <span className="sidebarListItemText">
              Groups
            </span>
          </li>

          {/* Bookmarks Item */}
          <li className="sidebarListItem">
            <Bookmarks className="sidebarIcon"/>
            <span className="sidebarListItemText">
              Bookmarks
            </span>
          </li>

          {/* Questions Item */}
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon"/>
            <span className="sidebarListItemText">
              Questions
            </span>
          </li>

          {/* Jobs Item */}
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon"/>
            <span className="sidebarListItemText">
              Jobs
            </span>
          </li>

          {/* Events Item */}
          <li className="sidebarListItem">
            <Event className="sidebarIcon"/>
            <span className="sidebarListItemText">
              Events
            </span>
          </li>

          {/* Courses Item */}
          <li className="sidebarListItem">
            <School className="sidebarIcon"/>
            <span className="sidebarListItemText">
              Courses
            </span>
          </li>

        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />

        <ul className="sidebarFriendList">

          {/* Display list of close friends */}
          {Users.map(u=>(
            <CloseFriends key={u.id} user={u}/>
          ))}

        </ul>
      </div>
    </div>
  )
}
