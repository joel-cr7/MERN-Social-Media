import './rightbar.css';
import { Users } from "../../dummyData";
import Online from '../online/Online';

export default function Rightbar({ user }) {

  const public_folder = process.env.REACT_APP_PUBLIC_FOLDER;

  // If Home page then render this component
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src={`${public_folder}gift.png`} alt="" className="bitrhdatImg" />
          <span className="birthdayText"><b>Pola Foster</b> and <b>3 other friends</b> have their birthday today.</span>
        </div>

        <img src={`${public_folder}ad.png`} alt="" className="rightbarAd" />

        <h4 className="rightbarTitle">Online Friends</h4>

        {/* Rightbar Online Friends List */}
        <ul className="rightbarFriendList">
          {Users.map(u => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  // If Profile page then render this component
  const ProfileRightbar = () => {
    return(
      <>
        {/* User Information */}
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="RightbarInfoKey">City:</span>
            <span className="RightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="RightbarInfoKey">From:</span>
            <span className="RightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="RightbarInfoKey">Relationship:</span>
            <span className="RightbarInfoValue">{user.relationship ===1 ? "Single" : user.relationship ===2 ? "Married" : "-"}</span>
          </div>
        </div>

        {/* User Friends */}
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src={`${public_folder}person/1.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>

          <div className="rightbarFollowing">
            <img src={`${public_folder}person/2.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>

          <div className="rightbarFollowing">
            <img src={`${public_folder}person/3.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>

          <div className="rightbarFollowing">
            <img src={`${public_folder}person/4.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>

          <div className="rightbarFollowing">
            <img src={`${public_folder}person/5.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>

          <div className="rightbarFollowing">
            <img src={`${public_folder}person/6.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
      </>
    );
  };


  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );

}
