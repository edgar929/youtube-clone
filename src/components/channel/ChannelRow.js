import React from "react";
import './ChannelRow.css';
import { Avatar, Button } from "@material-ui/core";
import { CheckCircleOutline } from "@material-ui/icons";

const ChannelRow = ({ channel, image, subs, noOfVideos, description, verified }) => {
    return (
        <div className="channelRow">
            <Avatar src={image} alt={channel} className="channelRow_logo"/>
            <div className="channelRow_text">
                <h4>{channel} {verified && <CheckCircleOutline />}</h4>
                <p>{subs} subscribers {noOfVideos} videos</p>
                <p>{description}</p>
            </div>
            <Button className="channelRow_btn">Subscribe</Button>
        </div>
    );
}
export default ChannelRow;