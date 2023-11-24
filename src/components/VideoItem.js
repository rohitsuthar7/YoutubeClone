import "./VideoItem.css";
import React from "react";

const VideoItem=({videoProp,onVideoSelect})=>{
   return(
       <div onClick={()=>onVideoSelect(videoProp)} className="video-item item">
           <img className="ui image" src={videoProp.snippet.thumbnails.medium.url} alt={videoProp.snippet.title}/>
           <div className="content">
               <div className="header">{videoProp.snippet.title}</div>
           </div>
       </div>
   );
}

export default VideoItem;



//--------------------------------------------------------------------------------------------------------------------
