import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    //console.log(video);
    //const video = props.video;
    //const onVideoSelect = props.onVideoSelect;

    const imageURL = video.snippet.thumbnails.default.url;
    return (
        <li onClick={()=>onVideoSelect(video)}
            className="list-group-item">
            <div className="video-list media">
                <div className='media-left'>
                    <img className='image-object' src={imageURL} />
                </div>

                <div className='media-body'>
                    <div className='media-heading'>{video.snippet.title}</div>
                </div>

            </div>
        </li>
    );
}
export default VideoListItem;
