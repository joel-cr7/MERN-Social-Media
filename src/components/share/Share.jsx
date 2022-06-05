import "./share.css";
import { PermMedia, Label, LocationOn, EmojiEmotions } from "@mui/icons-material";

export default function Share() {

    const public_folder = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <div className="share">
            <div className="shareWrapper">

                <div className="shareTop">
                    <img src={`${public_folder}person/4.jpeg`} alt="" className="shareProfileImg" />
                    <input placeholder="What's in your mind Joel?" className="shareInput" />
                </div>

                <hr className="shareHr" />

                <div className="shareButtom">

                    <div className="shareOptions">
                        {/* Photos and Videos */}
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">Photo or Video</span>
                        </div>
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

                    <button className="shareButton">Share</button>

                </div>

            </div>
        </div>
    )
}
