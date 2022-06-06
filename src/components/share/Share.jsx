import "./share.css";
import { PermMedia, Label, LocationOn, EmojiEmotions, Cancel } from "@mui/icons-material";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Share() {

    const public_folder = process.env.REACT_APP_PUBLIC_FOLDER;
    const {user} = useContext(AuthContext);
    const desc = useRef();
    const [file, setFile] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            desc: desc.current.value,
        }

        // if there is a image file
        if(file){
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);    // add the file and name (these properties will be used at serverside)
            
            newPost.img = fileName;   // store the filename as a property
            try {
                await axios.post("/upload", data);
            } catch (err) {
                console.log(err);
            }
        }

        try {
            await axios.post("/posts", newPost);
            window.location.reload();
        } catch (err) {
            
        }
    }

    return (
        <div className="share">
            <div className="shareWrapper">

                <div className="shareTop">
                    <img src={user.profilePicture ? public_folder + user.profilePicture : public_folder + "person/noAvatar.png"} 
                        alt="" className="shareProfileImg" />
                    <input placeholder={`What's in your mind ${user.username}?`} className="shareInput" ref={desc}/>
                </div>

                <hr className="shareHr" />

                {/* Preview the uploaded image */}
                {file && (
                    <div className="shareImgContainer">
                        {/* URL.createObjectURL is used to create pseudo url of file */}
                        <img src={URL.createObjectURL(file)} alt="" className="shareImg" />
                        <Cancel className="shareCancleImg" onClick={()=>setFile(null)}/>
                    </div>
                )}

                <form className="shareButtom" onSubmit={submitHandler}>

                    <div className="shareOptions">
                        {/* Photos and Videos */}
                        <label htmlFor="file" className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">Photo or Video</span>

                            {/* accept one file */}
                            <input style={{display: "none"}} type="file" id="file" accept=".png,.jpeg,.jpg" 
                                onChange={(e) => setFile(e.target.files[0])}/>   
                        </label>
                        {/* Tag */}
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        {/* Location */}
                        <div className="shareOption">
                            <LocationOn htmlColor="green" className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>
                        {/* Feelings */}
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>

                    <button className="shareButton" type="submit">Share</button>

                </form>

            </div>
        </div>
    )
}
