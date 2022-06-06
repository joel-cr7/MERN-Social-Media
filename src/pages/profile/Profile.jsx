import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import { useParams } from "react-router-dom"

export default function Profile() {

    const public_folder = process.env.REACT_APP_PUBLIC_FOLDER;

    const [user, setUser] = useState({});

    const username = useParams().username  //to get URL parameter

    //useEffect hook
    useEffect(() => {
        // async function to make request for all timeline posts
        const fetchUser = async () => {
            const res = await axios.get(`/users?username=${username}`);
            console.log("this is response "+ res);
            setUser(res.data);
        }
        fetchUser();
    }, [username]);

    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src={user.coverPicture ? public_folder + user.coverPicture : public_folder+"person/noCover.png"} 
                                alt="" className="profileCoverImg" />
                            <img src={user.profilePicture ? public_folder + user.profilePicture : public_folder+"person/noAvatar.png"} 
                                alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <span className="profileInfoDesc">{user.desc}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username={username} />
                        <Rightbar user={user}/>
                    </div>
                </div>
            </div>
        </>
    )
}
