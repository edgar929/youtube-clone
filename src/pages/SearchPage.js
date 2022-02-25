import React from "react";
import './SearchPage.css';
import { TuneOutlined } from "@material-ui/icons";
import { Divider } from "@material-ui/core";
import ChannelRow from '../components/channel/ChannelRow';
import VideoRow from "../components/channel/VideoRow";

const SearchPage = () => {
    return (
       <div className="container">
        <div className="searchPage">
           <div className="searchPage_filter">
               <TuneOutlined />
               <h2>FILTERS</h2>
           </div>
           <Divider />
              <ChannelRow
                    channel="Clever Programmer"
                    verified={true}
                    subs="1.2M"
                    noOfVideos="100"
                    description="This is a channel for programming and programming related videos"
             />
             <Divider className="divider"/>
           <div>
               <h3>Latest from</h3>
               <VideoRow 
                views="1.2M"
                subs="Clever Programmer"
                timestamp="1 week ago"
                channel="Clever Programmer"
                title="How to make a website"
                image="https://i.ytimg.com/vi/y-wAQGQkpz4/hqdefault.jpg"
                description="This is a video about how to make a website"
            />
            
            <VideoRow 
                views="1.2M"
                subs="Clever Programmer"
                timestamp="1 week ago"
                channel="Clever Programmer"
                title="How to make a website"
                image="https://i.ytimg.com/vi/y-wAQGQkpz4/hqdefault.jpg"
                description="This is a video about how to make a website"
            />

           </div>

        </div>
        </div>
    );
}
export default SearchPage;