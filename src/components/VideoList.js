import React from "react";
import VideoItem from "./VideoItem";

const VideoList =({videos,onVideoSelect})=>{
    const allVideos = videos.map(video=>{
        return <VideoItem key={video.id.videoId} videoProp={video} onVideoSelect={onVideoSelect}/>
    });

    return (
        <div className="ui relaxed divided list">
            {allVideos}
        </div>
    );
}

export default VideoList;




//----------------------------------------------------------------------------------------------------------------------------



