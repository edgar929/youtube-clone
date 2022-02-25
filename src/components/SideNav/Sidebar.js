import React from "react";
import SidebarRow from "./SidebarRow";
import './Sidebar.css';
import { Home } from "@material-ui/icons";
import  WhatshotIcon  from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import { Divider } from "@material-ui/core";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import { ThumbUpAltOutlined } from "@material-ui/icons";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { ExploreOutlined } from "@material-ui/icons";
import { SlideshowOutlined } from "@material-ui/icons";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarRow selected title="Home" Icon={Home} />
            <SidebarRow title="Explore" Icon={ExploreOutlined} />
            <SidebarRow title="Subscriptions" Icon={SubscriptionsIcon} />
            <Divider />
            <SidebarRow title="Library" Icon={VideoLibraryIcon} />
            <SidebarRow title="History" Icon={HistoryIcon} />
            <SidebarRow title="Your videos" Icon={SlideshowOutlined} />
            <SidebarRow title="Watch later" Icon={WatchLaterIcon} />
            <SidebarRow title="Liked video" Icon={ThumbUpAltOutlined} />
            <SidebarRow title="Show more" Icon={ExpandMoreIcon} />
            <SidebarRow title="Your channels" Icon={ExpandLessIcon} />

         </div>
    );
}
export default Sidebar;