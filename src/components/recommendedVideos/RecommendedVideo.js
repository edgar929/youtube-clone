import React from "react";
import './RecommendedVideo.css';
import VideoCard from "./VideoCard";
import {videos} from "./dummy-data"

const RecommendedVideo = () => {
    return (
        <div className="recommendedVideos">
            <h2>Recommended videos</h2>
            <div className="recommendedVideos_video">
               { videos.map((item, key) => 
              ( <VideoCard
                     image={item.image}
                    title={item.title}
                    channel={item.channel}
                    views={item.views}
                    timestamp={item.timestamp}
                    channelImage={item.channelImage}
                    key={key}
               />)
               )}
                  
            </div>
        </div>
    );
}
export default RecommendedVideo;