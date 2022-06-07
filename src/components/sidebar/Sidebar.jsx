import './sidebar.css';
import { RssFeed, Chat, PlayCircle, Group, Bookmarks, HelpOutline, WorkOutline, Event, School } from "@mui/icons-material";
import CloseFriends from '../closeFriends/CloseFriends';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

export default function Sidebar() {

  const [friends, setFriends] = useState([]);
  const { user } = useContext(AuthContext);

  // Fetch all suggested friends
  useEffect(() => {
    const getFriendsList = async () => {
      try {
        const friendsList = await axios.get('/users/usersList/' + user._id);
        setFriends(friendsList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriendsList();
  }, [user]);


  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">

        <ul className="sidebarFriendList">

          {/* Display list of close friends */}
          <div className="suggestedFriends">Suggested Friends</div>
          {friends.map(u => (
            <CloseFriends key={u._id} user={u} />
          ))}

        </ul>


        <hr className="sidebarHr" />


        <ul className="sidebarList">

          {/* Feed Item */}
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">
              Feed
            </span>
          </li>

          {/* Chat Item */}
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">
              Chats
            </span>
          </li>

          {/* Videos Item */}
          <li className="sidebarListItem">
            <PlayCircle className="sidebarIcon" />
            <span className="sidebarListItemText">
              Videos
            </span>
          </li>

          {/* Groups Item */}
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">
              Groups
            </span>
          </li>

          {/* Bookmarks Item */}
          <li className="sidebarListItem">
            <Bookmarks className="sidebarIcon" />
            <span className="sidebarListItemText">
              Bookmarks
            </span>
          </li>

          {/* Questions Item */}
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">
              Questions
            </span>
          </li>

          {/* Jobs Item */}
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">
              Jobs
            </span>
          </li>

          {/* Events Item */}
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">
              Events
            </span>
          </li>

          {/* Courses Item */}
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">
              Courses
            </span>
          </li>

        </ul>
        <button className="sidebarButton">Show More</button>


      </div>
    </div>
  )
}
