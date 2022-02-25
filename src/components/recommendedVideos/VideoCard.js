import React from "react";
import "./VideoCard.css";
import { Avatar } from "@material-ui/core";

const VideoCard = ({ image, title, channel, views, timestamp, channelImage}) => {
    return (
        <div className="videoCard">
            <img src={image} alt="" className="videoCard_image"/>
            <div className="videoCard_info">
                <Avatar src={channelImage} alt={channel} className="videoCard_avatar" />
                <div className="videoCard_text">
                    <h4>{title}</h4>
                    <p className="">{channel}</p>
                    <p className="videoCard_timestamp">{views}  {timestamp}</p>
                </div>
            </div>
        </div>
    );
}
export default VideoCard;



